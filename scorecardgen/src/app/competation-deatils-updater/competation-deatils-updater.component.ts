import { Component, OnInit  } from '@angular/core';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../services/file-upload.service';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AddTeaminfoComponent } from '../add-teaminfo/add-teaminfo.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-competation-deatils-updater',
  standalone: true,
  imports: [ CommonModule,AddTeaminfoComponent,ImageUploaderComponent,ImageCropperModule],
  templateUrl: './competation-deatils-updater.component.html',
  styleUrl: './competation-deatils-updater.component.css'
})
export class CompetationDeatilsUpdaterComponent  implements OnInit{
  selectedFiles?: FileList;
  currentFile?: File;
  teamsInfo!:AddTeaminfoComponent;
  progress = 0;
  message = '';
  preview = '';
  imageInfos?: Observable<any>;
  imageUrl!: string | ArrayBuffer | null;
  selectedCategory: string = '';
  selectedAge: string = '';
    selectedLanguage: string = '';

  constructor(private uploadService: FileUploadService,private router: Router) {}
  onCategoryChange(category: string): void {
    console.log('Selected category:', category);
    // You can perform any additional actions here based on the selected category
  }
  conditions: string[] = [
    'Children below 5 years can enter for free.',
    'Outside food and beverages are not allowed.',
    'Entry tickets are non-refundable.',
    'The management reserves the right to admission.'
  ];
  CompetitionHighlights: string[] = [
    'Competition Opening ceremony at 09:45 am.',
    'Shopping at abcd '
  ];
  forEntryRules: string[] = [
    'Each ticket admits one person only.' ,
     'Children below 33" height will not be charged.' ,
     'The ticket is valid for the day of reservation. ' ,
     'Personal food, beverages, and bottled water are not allowed - except for diabetics and infants.' ,
    'The parking ticket is valid for one day; the vehicle parked is at the owner’s risk.'
  ];
  directionUrl: string ='replace with  Direction Url'
  updateDirectionUrl(event: any) {
    // Update directionUrl with the new value from the input event
    this.directionUrl = event.target.innerText.trim(); // Trim to remove leading/trailing whitespace
    // Here you can implement the logic to save directionUrl to your backend or local storage
    // For example, you can make an HTTP request to your backend API to save the updated directionUrl
    // Replace the comment below with your actual saving logic
    // this.saveDirectionUrl(this.directionUrl);
  }
  addNewCondition() {
    this.conditions.push(' Add new condition');
  }
  addforEntryRules() {
    this.forEntryRules.push('Add new Entry Rule');
  }
  addCompetitionHighlights() {
    this.CompetitionHighlights.push(' Add new Highlight');
  }
  
  saveData(): void {
    const data = {
      eventTitle: (document.querySelector('[data-ref="edp_event_title_desktop"]') as HTMLElement).innerText.trim(),
      eventCategory: (document.querySelector('[data-ref="edp_event_category_desktop"]') as HTMLElement).innerText.trim(),
      eventDateString: (document.querySelector('[data-ref="edp_event_datestring_desktop"]') as HTMLElement).innerText.trim(),
      eventVenue: (document.querySelector('[data-ref="edp_event_venue_desktop"]') as HTMLElement).innerText.trim(),
      priceString: (document.querySelector('[data-ref="edp_price_string_desktop"]') as HTMLElement).innerText.trim(),
    };

   
      
    // Convert data to JSON
    const jsonData = JSON.stringify(data);

    // Here, you can save jsonData using your preferred method (e.g., sending it to a server, storing it locally)
    console.log(jsonData);
  } 
  saveandNavifatetoTeamsInfo(): void {
    this.router.navigate(['addTeam']); // Replace with your desired rout
  }
  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }
  previewStatus: boolean = false;
  imageUploder: boolean = true;

  showPreview() {
    this.previewStatus = true;
    this.imageUploder= false;
  }
  
  showUploader() {
    this.previewStatus = false;
    this.imageUploder= true;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    this.showPreview()
  }

  imageCropped(event: any): void {
    // Handle the cropped image data here
    console.log('Cropped Image Data:', event.base64);
    // You can save the cropped image data or perform other actions
  }
  
  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;
        const reader = new FileReader();
          this.previewStatus = true;
          this.imageUploder= false;
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
        
        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }

      this.selectedFiles = undefined;
    }
  }

}
function saveDataandNavigateToTeamsInfo() {
  throw new Error('Function not implemented.');
}

