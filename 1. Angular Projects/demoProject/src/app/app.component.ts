import { Component } from '@angular/core';

import {Todo} from "./todo";
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project to learn';
  
  todoValue:string;
  list: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== ""){
      const newItem: Todo ={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }

  // constructor(){
  //   console.log("constructor called");
  //   this.doSometing('Fokhrul');
  // }

  // doSometing(word:string): void{
  //   console.log("Awesome job done "+word);
  // }

}
