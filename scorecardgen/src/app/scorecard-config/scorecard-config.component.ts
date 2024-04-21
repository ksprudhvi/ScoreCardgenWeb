import { Component } from '@angular/core';

@Component({
  selector: 'app-scorecard-config',
  standalone: true,
  imports: [],
  templateUrl: './scorecard-config.component.html',
  styleUrl: './scorecard-config.component.css'
})
export class ScorecardConfigComponent {
  isListening: boolean = false;
  ScoreCard: { creativity:number  , formation: number ,technique : number,difficulty :number,sync:number ,total:number,comments: String} = {
    creativity: 0,
    formation: 0,
    technique: 0,
    difficulty: 0,
    sync: 0,
    total:0,
    comments :''
  };
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

}
