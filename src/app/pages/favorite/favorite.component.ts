import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from 'src/app/shared/components/nav/nav.component';
import { KEYSTORAGEFAVORITE } from 'src/environments/environment.development';
import { MatIconModule } from '@angular/material/icon';
import { ResultItems } from '../home/models/product.model';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NavComponent,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favorites!: ResultItems[];

  isFavorites(){
    return !this.favorites || Object.keys(this.favorites).length == 0
  }
  ngOnInit(): void {
    this.listarFavorites()
  }

  deleteFavorite(id:any){
    const favorites =
      (JSON.parse(
        localStorage.getItem(KEYSTORAGEFAVORITE)!
      ) as ResultItems[]) || null;
      delete favorites[id];

    localStorage.setItem(KEYSTORAGEFAVORITE, JSON.stringify(favorites));
    this.listarFavorites();

  }


  listarFavorites(){
    const favorites =
      (JSON.parse(
        localStorage.getItem(KEYSTORAGEFAVORITE)!
      ) as ResultItems[]) || null;
    if (favorites) {
      this.favorites = Object.values(favorites).map((item) => {
        return item;
      });
    }
  }
}
