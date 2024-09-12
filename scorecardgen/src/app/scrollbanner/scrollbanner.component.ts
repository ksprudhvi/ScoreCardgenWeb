// Corrected Angular Component (TypeScript)
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Corrected import for Router
import { of } from 'rxjs';

@Component({
  selector: 'app-scrollbanner',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './scrollbanner.component.html',
  styleUrls: ['./scrollbanner.component.css']
})
export class ScrollbannerComponent implements OnInit, AfterViewInit, OnDestroy {
  getBannersUrl = 'https://competationhoster.azurewebsites.net/getBanners';
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  banners: any[] | undefined;
  currentIndex = 0;
  intervalId: any;

  items = [
    {
      link: '/vijay-prakash-sep21-2024/event',
      srcset: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Fg_custom%2Fv1722576066%2Fkoqrpml3gtaxnli4mj1l.jpg',
      src: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_560/c_crop%2Fg_custom%2Fv1722576066%2Fkoqrpml3gtaxnli4mj1l.jpg',
      alt: 'Event 1'
    },
    {
      link: '/chandan-shetty-live-in-bangalore-nov24-2024/event',
      srcset: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Fg_custom%2Fv1722587665%2Ffea1lja4xhsassmhm8k3.jpg',
      src: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_560/c_crop%2Fg_custom%2Fv1722587665%2Ffea1lja4xhsassmhm8k3.jpg',
      alt: 'Event 2'
    },
    {
      link: '/jollywood-best-amusement-park-resorts-in-bangalore/event',
      srcset: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Fg_custom%2Fv1718807157%2Fpz08ykl20gmefdtfr8mv.jpg',
      src: 'https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_560/c_crop%2Fg_custom%2Fv1718807157%2Fpz08ykl20gmefdtfr8mv.jpg',
      alt: 'Event 3'
    }
  ];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Load banners on initialization
    this.loadBanners();
  }

  ngAfterViewInit(): void {
    // Implement any logic that needs to run after the view is initialized
   // this.startAutoScroll(); // Start auto-scroll on view initialization
  }

  ngOnDestroy(): void {
    // Clear the interval to prevent memory leaks when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Load existing banners
  loadBanners(): void {
    this.http.get<any[]>(this.getBannersUrl).subscribe({
      next: (response) => {
        this.banners = response; // Expecting response to be an array of banners with { BannerId, imageUrl }
      },
      error: (error) => {
        console.error('Error loading banners:', error);
        this.errorMessage = 'Failed to load banners';
      }
    });
  }

  // Starts the automatic scrolling of banner items
  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  // Move to the previous slide
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  // Move to the next slide
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    if (this.currentIndex === 0) {
      // Reset to the first slide after reaching the end
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.nextSlide(), 3000);
    }
  }

  // Go to a specific slide
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  // Example function demonstrating an asynchronous operation
  myFunction = () => {
    console.log('Function started');
    this.startAutoScroll();
    console.log('Executed immediately after startAutoScroll');
    return 'Result';
  };
}
