import { Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { CompetationDetailsComponent } from './competation-details/competation-details.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { FileUploadService } from './services/file-upload.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { CompetationDeatilsUpdaterComponent } from './competation-deatils-updater/competation-deatils-updater.component';
import { AddTeaminfoComponent } from './add-teaminfo/add-teaminfo.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JudgesInfoComponent } from './judges-info/judges-info.component';
import { SpeechtotextComponent } from './speechtotext/speechtotext.component';
import { TextMainComponent } from './text-main/text-main.component';
import { ScorecardConfigComponent } from './scorecard-config/scorecard-config.component';
import { LoadEventTitleCardComponent } from './load-event-title-card/load-event-title-card.component';




export const routes: Routes = [
    { path: '', component: HomescreenComponent },
    { path: 'details', component: CompetationDetailsComponent },
    { path: 'add', component: CreateCompetitionComponent },
    { path: 'upload', component: ImageUploaderComponent },
    { path: 'update', component: CompetationDeatilsUpdaterComponent },
    { path: 'addTeam', component: AddTeaminfoComponent },
    { path: 'loadEvent', component: LoadEventTitleCardComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'confJudges', component: JudgesInfoComponent },
    { path: 'speak', component: TextMainComponent },
    { path: 'score', component: ScorecardConfigComponent },
];
