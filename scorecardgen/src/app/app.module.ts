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
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { CompetationDeatilsUpdaterComponent } from './competation-deatils-updater/competation-deatils-updater.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    CompetationDetailsComponent, // Corrected spelling
    ImageUploaderComponent,
    CompetationDeatilsUpdaterComponent // Corrected spelling
  ],
  imports: [
    BrowserModule,
    FormsModule, // Needed for ngModel two-way data binding
    ReactiveFormsModule, // Needed for reactive forms
    HttpClientModule,
    CommonModule, // Import for NgFor directive
    ImageCropperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
