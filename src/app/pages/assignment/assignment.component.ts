import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public mode = 'list';
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(500),
        Validators.required,
      ])]
    });
    this.load();
  }

  ngOnInit() {
    
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    const data = new Date().toLocaleString();
    var check = document.getElementById("pri") as HTMLInputElement;
    
    if(!check.checked) {
      let aux
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].pri) {
          aux = i;
        }
      }
      this.todos.splice(aux+1, 0, new Todo(id, title, false, data.substr(0,16), check.checked));
    }
    else{
      this.todos.splice(0, 0, new Todo(id, title, false, data.substr(0,16), check.checked));
    }

    this.save();
    this.clear();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.save();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
      let aux, x;
      for(let i = 0; i < this.todos.length; i++) {
        if(!this.todos[i].done) {
          aux = i;
        }
        if(this.todos[i].id == todo.id) {
          x = i;
        }
      }
    this.todos.splice(aux+1, 0, this.todos[x]);
    this.todos.splice(x, 1);
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('lista', data);
    this.mode='list';
  }

  load() {
    const data = localStorage.getItem('lista');
    if(data)
      this.todos= JSON.parse(data);
      else
      this.todos = [];
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}


