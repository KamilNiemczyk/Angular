import { Injectable } from '@angular/core';
import { TodoDto } from './dto/TodoDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient : HttpClient) { }

  getAllTodos() : Observable<TodoDto[]> {
    return this.httpClient.get<TodoDto[]>('http://localhost:3000/todos');
  }
  deleteTodo(id : number) : Observable<Object> {
    return this.httpClient.delete('http://localhost:3000/todos/' + id);
  }
  addTodo() : Observable<Object> {
    const id = Math.floor(Math.random() * 1000);
    const name = 'Todo ' + id;
    const isComplete = false;
    return this.httpClient.post('http://localhost:3000/todos', { id, name, isComplete });
  }
  updateTodoStatus(id : number, isComplete : boolean) : Observable<Object> {
    return this.httpClient.patch('http://localhost:3000/todos/' + id, { isComplete });
  }
}
