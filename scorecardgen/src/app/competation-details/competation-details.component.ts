import { Component, OnInit } from '@angular/core';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competation-details',
  templateUrl: './competation-details.component.html',

  styleUrls: ['./competation-details.component.css']
})
export class CompetationDetailsComponent implements OnInit {

  directionUrl:string='https://maps.app.goo.gl/4f42zLjafaXB6pg89'
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  NavigateToScoreCard(): void {
    this.router.navigate(['score']); // Replace with your desired rout
  }

}
