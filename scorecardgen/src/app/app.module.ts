import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { CompetationDetailsComponent } from './competation-details/competation-details.component';
import { JsonPipe, NgFor } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    CompetationDetailsComponent,
    CreateCompetitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,NgFor,NgModule, ReactiveFormsModule, JsonPipe,FormControl,FormGroup,FormBuilder,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }