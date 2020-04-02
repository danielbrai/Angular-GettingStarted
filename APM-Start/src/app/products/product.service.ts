import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL: 'api/products/products.json';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    const products = this.httpClient.get<IProduct[]>('api/products/products.json').pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

    return products;
  }
  handleError(errorMessage) {
    return throwError(errorMessage);
  }
}
