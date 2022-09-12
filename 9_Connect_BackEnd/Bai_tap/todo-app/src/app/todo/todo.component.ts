import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import { TodoService } from '../todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : Todo[] = [];
  content = new FormControl();

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe(todoList => {
      this.todos = todoList;
    }, error => {
      console.log(error);
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }


  addTodo() {
    const value = this.content.value;

    if (value) {
      const todo: Todo = {
        id: this.todos.length + 1,
        content: value,
        complete: false
      };

      this.todoService.saveTodo(todo).subscribe(() => {
        this.content.reset();
        console.log('Add success!');

        this.todoService.getAll().subscribe(todoList => {
          this.todos = todoList;
        });

      }, error => {
        console.log(error);
      });
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      console.log('delete success');

      this.todoService.getAll().subscribe(todoList => {
        this.todos = todoList;
      });

    }, error => {
      console.log(error);
    });
  }
}
