import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs';
import { ResultItems } from './models/product.model';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from 'src/app/shared/components/nav/nav.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { KEYSTORAGEFAVORITE } from 'src/environments/environment';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    NavComponent,
    MatSnackBarModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductsService);
  private snackBar = inject(MatSnackBar)
  private router = inject(Router)
  listProducts!: ResultItems[];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(
        tap((products) => (this.listProducts = products))
      )
      .subscribe();
  }

  addFavorite(item: ResultItems) {
    const productsFavorte = localStorage.getItem(KEYSTORAGEFAVORITE) as any;
    const storage: { [key: string]: any } = {};
    storage[item.id] = {
      id: item.id,
      title: item.title,
      price: item.price,
      seller: item.seller,
      tags: item.tags,
      thumbnail: item.thumbnail,
    };
    if (productsFavorte) {
      const keyStorage = Object.keys(JSON.parse(productsFavorte));
      const valueStorage = Object.values(JSON.parse(productsFavorte));
      keyStorage.forEach((element, index) => {
        storage[keyStorage[index]] = valueStorage[index];
      });
    }
    localStorage.setItem(KEYSTORAGEFAVORITE, JSON.stringify(storage));
    this.snackBar.open('Producto agregado a favoritos', 'Aceptar')
  }

  viewDetail(item: ResultItems){
    const navigationExtras: NavigationExtras  = item as NavigationExtras
    this.router.navigate(['detail'],{ state: navigationExtras})
  }

}
