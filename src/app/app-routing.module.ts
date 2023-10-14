import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { DetalleProductComponent } from './pages/detalle-product/detalle-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'home',
    loadComponent:  ()=> import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'nav',
    component: NavComponent
  },

  {
    path: 'favorite',
    loadComponent:  ()=> import('./pages/favorite/favorite.component').then((x) => x.FavoriteComponent),
  },

  {
    path:'detail',
    component: DetalleProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
