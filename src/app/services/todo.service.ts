import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): Todo[] {
    this.todos = this.todos.filter(t => t.id !== id);
    return this.todos;
  }
}
