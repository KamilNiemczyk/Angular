import { Component } from '@angular/core';
import { TodoDto } from '../../services/dto/TodoDto';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(private todoService : TodoService) { }
  todos: TodoDto[] = [];

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(id : number) {
    this.todoService.deleteTodo(id).subscribe(todos => {
      this.todoService.getAllTodos().subscribe(todosa => {
        this.todos = todosa;
        }
      )
    });
  }
  addTodo() {
    this.todoService.addTodo().subscribe(todos => {
      this.todoService.getAllTodos().subscribe(todosa => {
        this.todos = todosa;
        }
      )
    });
  }
  updateTodoStatus(id : number, isComplete : boolean) {
    console.log(id, isComplete);
    
    this.todoService.updateTodoStatus(id, isComplete).subscribe(todos => {
      this.todoService.getAllTodos().subscribe(todosa => {
        this.todos = todosa;
        }
      )
    });
  }
}
