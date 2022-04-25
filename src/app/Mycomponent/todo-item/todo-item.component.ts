
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { todo } from 'src/app/todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todo;
  @Output() tododelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: todo) {
    this.tododelete.emit(todo);
    console.log("on click has been trigard")
  }
  onCheckboxclick(todo:todo){
    this.todoCheckbox.emit(todo);

  }
}
