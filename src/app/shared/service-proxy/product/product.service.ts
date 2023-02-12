import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiUrl: string;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private _http: HttpClient
  ) { this.apiUrl = environment.baseUrl }


  createProduct(body: any) {
    return this._http.post<Product>(this.apiUrl + 'product', body)
  }

  updateProduct(id, body) {
    return this._http.put<Product>(this.apiUrl + `product/${id}`, body)
  }

  deleteProduct(id) {
    return this._http.delete(this.apiUrl + `product/${id}`)
  }

  getProduct(id) {
    return this._http.get<Product>(this.apiUrl + `product/${id}`)
  }

  getAllProduct() {
    return this._http.get<Product[]>(this.apiUrl + 'product')
  }

}
