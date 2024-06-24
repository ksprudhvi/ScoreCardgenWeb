import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-scorecard-config',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './scorecard-config.component.html',
  styleUrl: './scorecard-config.component.css'
})
export class ScorecardConfigComponent {
  isListening: boolean = false;
  eventId: any;
  TeamId:any;
  error: any;
  judgeId: any;
  TeamsInfo!: any;
  scoreCardId!:any;
  ScoreCard: { creativity:number  , formation: number ,technique : number,difficulty :number,sync:number ,total:number,comments: String} = {
    creativity: 0,
    formation: 0,
    technique: 0,
    difficulty: 0,
    sync: 0,
    total:0,
    comments :''
  };
  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.eventId = params['eventId'];
      this.judgeId = params['judgeId'];
     if (this.eventId && this.judgeId) {
       // Use the eventId here, e.g., for data fetching or processing
       console.log('Retrieved eventId:', this.eventId);
       console.log('Retrieved judgeID:', this.judgeId);
       // Call a service to fetch data based on eventId (optional)
     } else {
       // Handle the case where 'eventId' is not present
       console.error('eventId parameter not found in query string.');
     }
   });

   const data ={
    EventId:this.eventId
   }
  
  const urlForteamsJudges = `https://competationhoster.azurewebsites.net/getTeamsJudges/${this.eventId}`;
  this.http.get<any>(urlForteamsJudges).subscribe(
    (data) => {
      // Assign the received data to eventMetaData
      this.TeamsInfo = data[0].teamsInfo;
      console.info('scoreCard data info',data)
      console.info('TeamsInfo ', this.TeamsInfo);
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  ); 
  }
  
  onTeamChange(): void {
    const url = 'https://competationhoster.azurewebsites.net/getScorecard';
    console.log('started Team Change get ')
    // Define the HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data ={
      EventId:this.eventId,
      judgeId:this.judgeId,
      teamId:this.TeamId
    }
    console.log('data',data)
    const jsonData = JSON.stringify(data);
    // Make the POST request with the provided data
    this.http.post<any>(url, jsonData, { headers }).subscribe(
      (responseDta) => {
        console.log('POST request successful:', responseDta);
       this.ScoreCard = responseDta[0].scorecard; 
       this.scoreCardId=responseDta[0].id// Assign response to a variable to use in template
      },
      (error) => {
        console.info('Error making POST request:', error);
        this.error = error.message || 'An error occurred'; // Set error message
      }
    );

  }


  
  commentsObject:any;
  results: string ='';

  startListening() {
    // Check if the browser supports speech recognition
    if ('webkitSpeechRecognition' in window) {
      // Create a new instance of webkitSpeechRecognition
      const vSearch = new (<any>window).webkitSpeechRecognition();
      vSearch.continuous = true; // Continuous recognition
      vSearch.interimresults = false;
      vSearch.lang = 'en-US';
      vSearch.start();
  
      // Event listener for when speech recognition results are available
      vSearch.onresult = (e:any) => {
        this.commentsObject=e.results;
        for (const comment of this.commentsObject) {
          const transcript = comment[0].transcript;
          console.log(comment[0].transcript);
          this.results += transcript;

        }
     // Store the recognized text
        this.getResult();
      };
      // Event listener for the stop button click
      const stopButton = document.getElementById('stopButton');
      if (stopButton) {
        stopButton.addEventListener('click', () => {
          vSearch.stop(); // Stop the speech recognition
        });
      } else {
        console.error('Stop button not found');
      }
    } else {
      alert('Your browser does not support voice recognition!');
    }
  }
  
  stopListening() {
  }
  getResult() {
    // Process the recognized text
    console.log(this.results);
    this.ScoreCard.comments=this.ScoreCard.comments+this.results;
  }

  submitScorecard():void{
    console.log("score card {}",this.ScoreCard)

    const url = 'https://competationhoster.azurewebsites.net/update_scores';

    // Define the HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log('score card ',this.ScoreCard);
    const scorecard = {
      creativity: parseInt(this.ScoreCard.creativity.toString(), 10),
      formation: parseInt(this.ScoreCard.formation.toString(), 10),
      technique: parseInt(this.ScoreCard.technique.toString(), 10),
      difficulty: parseInt(this.ScoreCard.difficulty.toString(), 10),
      sync: parseInt(this.ScoreCard.sync.toString(), 10),
      total: 0,
    };
    const data ={
      EventId:this.eventId,
      id:this.scoreCardId,
      scorecard:scorecard
   //   TeamName:
    }
    console.log('data',data)
    const jsonData = JSON.stringify(data);
    // Make the POST request with the provided data
    this.http.post<any>(url, jsonData, { headers }).subscribe(
      (responseDta) => {
        console.log('POST request successful:', responseDta);
       //this.ScoreCard = responseDta.scorecard; // Assign response to a variable to use in template
      },
      (error) => {
        console.info('Error making POST request:', error);
        this.error = error.message || 'An error occurred'; // Set error message
      }
    );


  }

}
