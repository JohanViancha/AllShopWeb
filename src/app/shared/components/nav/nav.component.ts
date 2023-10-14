import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { KEYSTORAGEFAVORITE } from 'src/environments/environment.development';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


  private router = inject(Router);

  goFavorite() {
    this.router.navigate(['/favorite']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  deleteFavorite(){
    localStorage.removeItem(KEYSTORAGEFAVORITE)
  }
}
