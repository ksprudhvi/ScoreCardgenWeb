import { Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { CompetationDetailsComponent } from './competation-details/competation-details.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { FileUploadService } from './services/file-upload.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { CompetationDeatilsUpdaterComponent } from './competation-deatils-updater/competation-deatils-updater.component';




export const routes: Routes = [
    { path: '', component: HomescreenComponent },
    { path: 'details', component: CompetationDetailsComponent },
    { path: 'add', component: CreateCompetitionComponent },
    { path: 'upload', component: ImageUploaderComponent },
    { path: 'update', component: CompetationDeatilsUpdaterComponent },
];
