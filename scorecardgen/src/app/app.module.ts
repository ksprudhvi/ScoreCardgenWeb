import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { CompetationDetailsComponent } from './competation-details/competation-details.component';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { CompetationDeatilsUpdaterComponent } from './competation-deatils-updater/competation-deatils-updater.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AddTeaminfoComponent } from './add-teaminfo/add-teaminfo.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JudgesInfoComponent } from './judges-info/judges-info.component';
import { SpeechtotextComponent } from './speechtotext/speechtotext.component';
import { TextMainComponent } from './text-main/text-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    CompetationDetailsComponent,
    CreateCompetitionComponent,
    ImageUploaderComponent,
    CompetationDeatilsUpdaterComponent,
    AddTeaminfoComponent,
    LoginPageComponent,
    JudgesInfoComponent,
    SpeechtotextComponent,
    TextMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ImageCropperModule,
    BrowserAnimationsModule,NgFor,NgModule, ReactiveFormsModule, JsonPipe,FormControl,FormGroup,FormBuilder,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }