import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../model/category";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Product[]>(API_URL+"/products");
  }

  saveCategory(product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/products/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Category> {
    return this.httpClient.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL}/products/${id}`);
  }
}
