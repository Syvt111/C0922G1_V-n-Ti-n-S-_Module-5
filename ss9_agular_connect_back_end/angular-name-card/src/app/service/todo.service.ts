import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../model/todo';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Todo[]>(API_URL + '/todos');
  }
  save(todo): Observable<Todo> {
    return this.httpClient.post(API_URL + '/todos', todo);
  }
  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put(`${API_URL}/todos/${id}`, todo);
  }
  delete(id: number): Observable<Todo> {
    return this.httpClient.delete(`${API_URL}/todos/${id}`);
  }
}
