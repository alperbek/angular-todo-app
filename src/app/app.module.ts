import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './my-material/my-material.module';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }