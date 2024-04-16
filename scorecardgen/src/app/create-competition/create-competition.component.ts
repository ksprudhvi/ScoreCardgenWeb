import { Component, NgModule } from '@angular/core';
import saveAs from 'file-saver';
import { FormBuilder,FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css'],
  standalone: true
})
export class CreateCompetitionComponent {
  competitionName: string = '';
  generalinfo!: FormGroup;
  teaminfo!: FormGroup;
  judgesinfo!: FormGroup;
  selectedStep: string = 'competitionDetails';
  venueLocation: string = '';
  dateTime: string = '';
  teams: { teamName: { id: string, name: string }, coachName: { id: string, name: string }, teamMembers: { id: string, name: string }[] }[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize your form groups here
    this.generalinfo = this.formBuilder.group({
      // Define your form controls for general info
    });

    this.teaminfo = this.formBuilder.group({
      // Define your form controls for team info
    });

    this.judgesinfo = this.formBuilder.group({
      // Define your form controls for judges info
    });
  }

  addTeam(): void {
    this.teams.push({ teamName: { id: '', name: '' }, coachName: { id: '', name: '' }, teamMembers: [] });
  }

  addTeamMember(teamIndex: number): void {
    this.teams[teamIndex].teamMembers.push({ id: '', name: '' });
  }

  removeTeamMember(teamIndex: number, memberIndex: number): void {
    this.teams[teamIndex].teamMembers.splice(memberIndex, 1);
  }

  submitGeneralForm() {
    this.generalinfo.disable();
    this.judgesinfo.disable();
  }

  submitTeamForm() {
    this.generalinfo.disable();
    this.teaminfo.disable();
  }

  submitJudgeForm() {
    this.judgesinfo.disable();
  }

  submitForm() {
    // Create JSON object representing the form data
    const formData = {
      competitionName: this.competitionName,
      venueLocation: this.venueLocation,
      dateTime: this.dateTime
    };

    // Convert JSON object to string
    const jsonData = JSON.stringify(formData);

    // Convert string to Blob
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Save Blob as JSON file
    saveAs(blob, 'form_response.json');
  }

  isFormDisabled(formName: string): boolean {
    // Check if the form should be disabled based on the selectedStep
    if (this.selectedStep === 'competitionDetails' && formName === 'generalinfo') {
      return false; // Enable the form
    } else if (this.selectedStep === 'addTeamDetails' && formName === 'teaminfo') {
      return false; // Enable the form
    } else if (this.selectedStep === 'addJudges' && formName === 'judgesinfo') {
      return false; // Enable the form
    } else {
      return true; // Disable the form for other steps
    }
  }
}
