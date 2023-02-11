import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public apiUrl: string;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private _http: HttpClient
  ) { this.apiUrl = environment.baseUrl }

  createCategory(body: any) {
    return this._http.post<Category>(this.apiUrl + 'category', body)
  }

  updateCategory(id, body) {
    return this._http.put<Category>(this.apiUrl + `category/${id}`, body)
    //,{ params: { id: id } }

  }

  deleteCategory(id) {
    return this._http.delete(this.apiUrl + `category/${id}`)
  }

  getCategory(id) {
    return this._http.get<Category>(this.apiUrl + `category/${id}`)
  }

  getAllCategory() {
    return this._http.get<Category[]>(this.apiUrl + 'category')
  }
}
