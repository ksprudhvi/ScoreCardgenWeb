import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teaminfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-teaminfo.component.html',
  styleUrl: './add-teaminfo.component.css'
})
export class AddTeaminfoComponent {
  constructor(private router: Router) {}
  teamdiv: boolean = false;
  teams: { teamName: { id: string, name: string },teamRepresentativeEmail:{name:string,email:string} ,DirectorName: { id: string, name: string ,email:string}, coachName: { id: string, name: string ,email:string}, teamMembers: { id: string, name: string }[], }[] = [];
  addTeam(): void {
    this.teams.push({ teamName: { id: '', name: '' },teamRepresentativeEmail:{name:'',email:''},DirectorName: { id: '', name: '',email:'' }, coachName: { id: '', name: '' ,email:''}, teamMembers: [] });
  }
  addTeamMember(teamIndex: number): void {
    this.teams[teamIndex].teamMembers.push({ id: '', name: '' });
  }
  removeTeamMember(teamIndex: number, memberIndex: number): void {
    this.teams[teamIndex].teamMembers.splice(memberIndex, 1);
  }
  saveTeamsData(): void {
    // Convert teams data to a serializable format (JSON)
    const jsonData = JSON.stringify(this.teams);
    // Choose your preferred method for saving the data:
    // Option 1: Save to Local Storage (browser-based)
    localStorage.setItem('teamsData', jsonData);
    // Option 2: Send data to server using an HTTP request (server-side storage)
    // This would require additional logic for sending the data to your backend API.
    console.log(jsonData); // Optional: Log the saved data
  }
  isTeamFormValid(): boolean {
    if (this.teams.length === 0) {
      return true; // Empty form is considered valid
    }
    for (const team of this.teams) {
      if ((team.teamName.name ==='') || (team.teamRepresentativeEmail.name==='') || (team.teamRepresentativeEmail.email==='')) {
        return false; // Early return if any team has missing data
      }
    }
    return true; // All teams have required fields filled
  }

  saveandNextJudges():void {
    this.router.navigate(['confJudges']); // Replace with your desired rout
}
  
  

}
