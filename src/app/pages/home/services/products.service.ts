import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { URLMERCADOLIBREAPI } from 'src/environments/environment';
import { ENDPOINT } from '../models/product.constants';
import { Items, ResultItems } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpModule: HttpClient = inject(HttpClient);

  getProducts(): Observable<ResultItems[]> {
    const search = `search?nickname=TEKSHOP_COLOMBIA`
    return this.httpModule.get<Items>(
      `${URLMERCADOLIBREAPI}${ENDPOINT.itemsProducts}${search}`
    ).pipe(
      map(({ results })=> results),
      catchError((err)=>{
        throw err;
      })
    );
  }


}
