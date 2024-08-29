import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading.service'; // Adjust path as needed


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-homescreen',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  eventMetaData: any;
  loading!:Boolean ;
  successMessage !:any;
  errorMessage !:any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: HttpClient,public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.startAutoScroll();
    this.loading=true;
    this.http.get<any>('https://competationhoster.azurewebsites.net/allcompe').subscribe(
      (data) => {
        // Assign the received data to eventMetaData
        this.eventMetaData = data;
        // this.loadingService.hide();
        this.loading=false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading=false;
      }
    );

  }
  items = [
    {
      link: '/vijay-prakash-sep21-2024/event',
      srcset: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Fg_custom%2Fv1722576066%2Fkoqrpml3gtaxnli4mj1l.jpg',
      src: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_560/c_crop%2Fg_custom%2Fv1722576066%2Fkoqrpml3gtaxnli4mj1l.jpg',
      alt: 'Event 1'
    }
   
  ];
  currentIndex = 0;
  intervalId: any;



  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
  navigateToDetails(eventId:string){
      const navigationExtras: NavigationExtras = {
        queryParams: { eventId:eventId },
        state: { someOtherData: 'value' } // Optionally pass additional data
      };
      this.router.navigate(['details'], navigationExtras);
      //this.router.navigate(['addTeam']); // Replace with your desired rout
    
  }

}
