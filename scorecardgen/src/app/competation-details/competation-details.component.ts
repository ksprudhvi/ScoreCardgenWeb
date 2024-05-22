import { Component, OnInit } from '@angular/core';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competation-details',
  templateUrl: './competation-details.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./competation-details.component.css']
})
export class CompetationDetailsComponent implements OnInit {
  eventId:string=''
  directionUrl:string='https://maps.app.goo.gl/4f42zLjafaXB6pg89'

  EventData !:any;
  responseData!: Object;
  error!: any;
  TeamsInfo!: any;
  JudegsInfo!: any;
  constructor(private router: Router ,private activatedRoute: ActivatedRoute,private http: HttpClient) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.eventId = params['eventId'];
     if (this.eventId) {
       // Use the eventId here, e.g., for data fetching or processing
       console.log('Retrieved eventId:', this.eventId);
       // Call a service to fetch data based on eventId (optional)
     } else {
       // Handle the case where 'eventId' is not present
       console.error('eventId parameter not found in query string.');
     }
   });

   const url = 'https://competationhoster.azurewebsites.net/getEvent/';

    // Define the HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data ={
      EventId:this.eventId
    }
    const jsonData = JSON.stringify(data);
    // Make the POST request with the provided data
    this.http.post(url, jsonData, { headers }).subscribe(
      (response) => {
        console.log('POST request successful:', response);
        this.EventData = response; // Assign response to a variable to use in template
      },
      (error) => {
        console.info('Error making POST request:', error);
        this.error = error.message || 'An error occurred'; // Set error message
      }
    );
    console.log(this.responseData);
    const urlForteamsJudges = `https://competationhoster.azurewebsites.net/getTeamsJudges/${this.eventId}`;
    this.http.get<any>(urlForteamsJudges).subscribe(
      (data) => {
        // Assign the received data to eventMetaData
        this.TeamsInfo = data[0].teamsInfo;
        this.JudegsInfo = data[0].JudegsInfo;
        console.info('TeamsInfo ', this.TeamsInfo);
        console.info('JudegsInfo: ',  this.JudegsInfo);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }



  NavigateToScoreCard(): void {
    this.router.navigate(['score']); // Replace with your desired rout
  }

}
