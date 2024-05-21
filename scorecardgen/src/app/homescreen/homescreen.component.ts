import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://competationhoster.azurewebsites.net/allcompe').subscribe(
      (data) => {
        // Assign the received data to eventMetaData
        this.eventMetaData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


  }

  // eventMetaData :any =[
  //   {
  //     "EventId": "e91cedee-a5ee-4e22-b49a-30c20cafd624",
  //     "eventCategory": "Tour",
  //     "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //     "eventImageUrl": "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1713452309%2Fpilvzikh0lvoaezm04ne.jpg",
  //     "eventPriceString": "10 Onwards",
  //     "eventTitle": "Hip HOp Heat Wave",
  //     "eventVenue": "Hyderabad",
  //     "id": "91aa23d5-ad8d-499d-91a2-d5e53647dca8"
  //   },
  //   {
  //     "EventId": "e91cedee-a5ee-4e22-b49a-30c20cafd624",
  //     "eventCategory": "JAZZ",
  //     "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //     "eventImageUrl": "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1713452309%2Fpilvzikh0lvoaezm04ne.jpg",
  //     "eventPriceString": "50 Onwards",
  //     "eventTitle": "Hard Rock Party",
  //     "eventVenue": "Hyderabad , Dallas ",
  //     "id": "c922e4c6-4d6b-4f24-80bc-1f4efcbca0d1"
  //   },
  //   {
  //     "EventId": "e91cedehertee-a5ee-4e22-b49a-30c20cafd624",
  //     "eventCategory": "JAZZ",
  //     "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //     "eventImageUrl": "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1713452309%2Fpilvzikh0lvoaezm04ne.jpg",
  //     "eventPriceString": "50 Onwards",
  //     "eventTitle": "Hard Rock Party",
  //     "eventVenue": "Hyderabad , Dallas ",
  //     "id": "c6e9affb-f3f4-4292-8a06-88f72864f226"
  //   },
  //   {
  //     "EventId": "e91cwededehertee-a5ee-4e22-b49a-30c20cafd624",
  //     "eventCategory": "JAZZ",
  //     "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //     "eventImageUrl": "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1713452309%2Fpilvzikh0lvoaezm04ne.jpg",
  //     "eventPriceString": "50 Onwards",
  //     "eventTitle": "Test Event ",
  //     "eventVenue": "Hyderabad , Dallas ",
  //     "id": "d37ea6e7-fab2-4377-843b-ffee66546350"
  //   },
  //   {
  //     "EventId": "e91cwededehertee-a5ee-4e22-b49a-540c20cafd624",
  //     "eventCategory": "HIp-Hop",
  //     "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //     "eventImageUrl": "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1713452309%2Fpilvzikh0lvoaezm04ne.jpg",
  //     "eventPriceString": "50 Onwards",
  //     "eventTitle": "Test Event Prudhvi ",
  //     "eventVenue": "Hyderabad , Dallas ",
  //     "id": "79141e0e-0718-4e0d-bb91-9448a4c8c7e2"
  //   }
  //   ,
  //     {
  //       "EventId": "e91cwededehertee-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601ea8c-0000-0300-0000-66476c800000\"",
  //       "_rid": "mbNnAIzxLU0BAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0BAAAAAAAAAA==/",
  //       "_ts": 1715956864,
  //       "eventCategory": "HIp-Hop",
  //       "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi ",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "38f8beca-206a-4ba9-9a1a-9f44b7ffbcc2"
  //     },
  //     {
  //       "EventId": "e934cwededehertee-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601e28e-0000-0300-0000-66476c850000\"",
  //       "_rid": "mbNnAIzxLU0CAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0CAAAAAAAAAA==/",
  //       "_ts": 1715956869,
  //       "eventCategory": "HIp-Hop",
  //       "eventDateString": "March 12 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi ",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "0e7f0fdc-f2e5-4662-b0a6-71868496a6fa"
  //     },
  //     {
  //       "EventId": "e93445wededehertee-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601ac97-0000-0300-0000-66476c9c0000\"",
  //       "_rid": "mbNnAIzxLU0DAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0DAAAAAAAAAA==/",
  //       "_ts": 1715956892,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "97343521-f8a1-4695-b8d9-c8af04aee8ec"
  //     },
  //     {
  //       "EventId": "e93445wedeweredehertee-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"96011999-0000-0300-0000-66476ca00000\"",
  //       "_rid": "mbNnAIzxLU0EAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0EAAAAAAAAAA==/",
  //       "_ts": 1715956896,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "7a1f7239-2eaa-4466-9dcf-17019532f864"
  //     },
  //     {
  //       "EventId": "e934wdeweredehertee-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601fb9a-0000-0300-0000-66476ca60000\"",
  //       "_rid": "mbNnAIzxLU0FAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0FAAAAAAAAAA==/",
  //       "_ts": 1715956902,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "b98e3d82-7ca2-41b2-bb7b-dee0c4e880c6"
  //     },
  //     {
  //       "EventId": "e934wdeweredeherteehh-a5ee-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"96013d9f-0000-0300-0000-66476cb30000\"",
  //       "_rid": "mbNnAIzxLU0GAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0GAAAAAAAAAA==/",
  //       "_ts": 1715956915,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "3ae12ecf-ef20-47af-bddc-df49693b9e71"
  //     },
  //     {
  //       "EventId": "e934wdeweredeherteehh-a5edfgbe-4e22-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"96012ca1-0000-0300-0000-66476cb70000\"",
  //       "_rid": "mbNnAIzxLU0HAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0HAAAAAAAAAA==/",
  //       "_ts": 1715956919,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "133d2b96-1d81-4668-96ec-e68af2879d00"
  //     },
  //     {
  //       "EventId": "e934wdeweredeherteehh-a5edfgbe-4e2dfg2-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"960119a2-0000-0300-0000-66476cba0000\"",
  //       "_rid": "mbNnAIzxLU0IAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0IAAAAAAAAAA==/",
  //       "_ts": 1715956922,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "1db0d98a-4149-4512-b639-71f41bdbb0aa"
  //     },
  //     {
  //       "EventId": "e934wdewh-a5edfgbe-4e2dfg2-b49a-540c20cafd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"96014fa4-0000-0300-0000-66476cbf0000\"",
  //       "_rid": "mbNnAIzxLU0JAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0JAAAAAAAAAA==/",
  //       "_ts": 1715956927,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "8f45e8ad-2d52-452b-8b26-a7560620b6ba"
  //     },
  //     {
  //       "EventId": "e934wdewh-a5edfgbe-4e2dfg2-b49a-540c20yhd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"960108a6-0000-0300-0000-66476cc30000\"",
  //       "_rid": "mbNnAIzxLU0KAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0KAAAAAAAAAA==/",
  //       "_ts": 1715956931,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "706f1b9c-9fbe-4237-be2a-debc4ebb644b"
  //     },
  //     {
  //       "EventId": "e34wdesth-a5edfgbe-4e2dfg2-b49a-540c20yhd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601faa8-0000-0300-0000-66476cca0000\"",
  //       "_rid": "mbNnAIzxLU0LAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0LAAAAAAAAAA==/",
  //       "_ts": 1715956938,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "63e4d22b-ae55-480a-8445-1eccf336f860"
  //     },
  //     {
  //       "EventId": "e34wdesth-a5edfgbe-4e2dfg2-b49a-54ergew0yhd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"960111ab-0000-0300-0000-66476ccf0000\"",
  //       "_rid": "mbNnAIzxLU0MAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0MAAAAAAAAAA==/",
  //       "_ts": 1715956943,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "dbefb21f-f3a4-4743-ad8f-da170f38f95e"
  //     },
  //     {
  //       "EventId": "e34wdwtesth-a5edfgbe-4e2dfg2-b49a-54ergew0yhd624",
  //       "_attachments": "attachments/",
  //       "_etag": "\"9601d7ac-0000-0300-0000-66476cd40000\"",
  //       "_rid": "mbNnAIzxLU0NAAAAAAAAAA==",
  //       "_self": "dbs/mbNnAA==/colls/mbNnAIzxLU0=/docs/mbNnAIzxLU0NAAAAAAAAAA==/",
  //       "_ts": 1715956948,
  //       "eventCategory": "Jazz",
  //       "eventDateString": "March 23 th from 5 Pm to 6 Pm",
  //       "eventImageUrl": "",
  //       "eventPriceString": "50 Onwards",
  //       "eventTitle": "Test Event Prudhvi 222",
  //       "eventVenue": "Hyderabad , Dallas ",
  //       "id": "d2f3c5d2-3b0c-40d4-8422-cc48db7914d8"
  //     }
    
  // ]
  navigateToDetails(eventId:string){
      const navigationExtras: NavigationExtras = {
        queryParams: { eventId:eventId },
        state: { someOtherData: 'value' } // Optionally pass additional data
      };
      this.router.navigate(['details'], navigationExtras);
      //this.router.navigate(['addTeam']); // Replace with your desired rout
    
  }

}
