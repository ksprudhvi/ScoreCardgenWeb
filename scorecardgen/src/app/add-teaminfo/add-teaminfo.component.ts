import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-teaminfo',
  standalone: true,
  imports: [FormsModule,CommonModule],  // Import FormsModule here
  templateUrl: './add-teaminfo.component.html',
  styleUrls: ['./add-teaminfo.component.css']
})
export class AddTeaminfoComponent {
  error: any;
  responseData!: any;
  loading!:Boolean ;
  successMessage !:any;
  errorMessage !:any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: HttpClient) {}
  eventId:string=''
  testName: any;
  ngOnInit() {

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
  }
  
  teamdiv: boolean = false;
 
  teams: { teamName: { id: string, name: string },teamRepresentativeEmail:{name:string,email:string} ,DirectorName: { id: string, name: string ,email:string}, coachName: { id: string, name: string ,email:string}, teamMembers: { id: string, name: string }[], }[] = [];
  addTeam(): void {
    this.teams.push({ teamName: { id: uuidv4(), name: '' },teamRepresentativeEmail:{name:'',email:''},DirectorName: { id: uuidv4(), name: '',email:'' }, coachName: { id: uuidv4(), name: '' ,email:''}, teamMembers: [] });
  }
  addTeamMember(teamIndex: number): void {
    this.teams[teamIndex].teamMembers.push({ id: uuidv4(), name: '' });
  }
  removeTeamMember(teamIndex: number, memberIndex: number): void {
    this.teams[teamIndex].teamMembers.splice(memberIndex, 1);
  }
  saveTeamsData(): void {
    this.loading=true;
    const teamData ={
        EventId:this.eventId,
        teamsInfo:this.teams
    }

    console.log(teamData);
    // Convert teams data to a serializable format (JSON)
    const jsonData = JSON.stringify(teamData);
  
    localStorage.setItem('teamsData', jsonData);
    // Option 2: Send data to server using an HTTP request (server-side storage)
    // This would require additional logic for sending the data to your backend API.
    console.log(jsonData); // Optional: Log the saved data

    // Here, you can save jsonData using your preferred method (e.g., sending it to a server, storing it locally)
    const url = 'https://competationhoster.azurewebsites.net/updateTeams';

    // Define the HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Make the POST request with the provided data
    this.http.post(url, jsonData, { headers }).subscribe(
      (response) => {
        console.log('POST request successful:', response);
        this.responseData = response;
        // this.loadingService.hide();
        this.loading=false
        this.successMessage="Team Details Saved Succesfully";
        this.saveandNextJudges()
        setTimeout(() => this.successMessage=(null), 2000);
        // Assign response to a variable to use in template
      },
      (error) => {
        console.info('Error making POST request:', error);
        this.errorMessage = 'An error occurred .Please Try again'; 
        setTimeout(() => this.errorMessage=(null), 2000);// Set error message
      }
    );
    console.log(this.responseData);
  }
  isTeamFormValid(): boolean {
    if (this.teams.length === 0) {
      return false; // Empty form is considered valid
    }
    for (const team of this.teams) {
      if ((team.teamName.name ==='') || (team.teamRepresentativeEmail.name==='') || (team.teamRepresentativeEmail.email==='')) {
        return true; // Early return if any team has missing data
      }
    }
    return false; // All teams have required fields filled
  }

  saveandNextJudges():void {
    const navigationExtras: NavigationExtras = {
      queryParams: { eventId:this.eventId },
      state: { someOtherData: 'value' } // Optionally pass additional data
    };
    this.router.navigate(['confJudges'], navigationExtras);
    //this.router.navigate(['addTeam']); // Replace with your desired rout
  }
}
  
  
