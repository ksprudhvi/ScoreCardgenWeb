import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-judges-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './judges-info.component.html',
  styleUrl: './judges-info.component.css'
})
export class JudgesInfoComponent {
  constructor(private router: Router) {}
  judges: { id: string, name: string ,email : string,guestJugde :boolean }[] = [];

  addJudge(): void {
    this.judges.push({ id: '', name: '' ,email : '',guestJugde :false });
  }
  toggleGuestJudge(index: number): void {
    this.judges[index].guestJugde = !this.judges[index].guestJugde;
  }
  saveandGenScoreCard():void {
      this.router.navigate(['scorecard']); // Replace with your desired rout
  }
}
