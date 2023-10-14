import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { NavComponent } from 'src/app/shared/components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-product',
  templateUrl: './detalle-product.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    NavComponent,
    MatIconModule
  ],
  styleUrls: ['./detalle-product.component.scss'],
})
export class DetalleProductComponent {
  private activeRouter = inject(Router);
  product!: any;
  constructor() {
    this.product = this.activeRouter.getCurrentNavigation()?.extras.state;
  }
}
