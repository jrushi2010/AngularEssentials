import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() id!: string; // we are receiving id here
  @Input() avatar!: string;
  @Input() name!: string;

  // so we are emmiting a select custom event from the user component
  // so the app component will get to know that which user is clicked
  // because the app component is outputing the user and the app component will output the task of that user which clicked.
  // so we need to let the app component know when a user is clicked.
  @Output() select = new EventEmitter(); //so this eventEmmitter helps us to emit custom values through that select property to any parent component that intreseted.

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  //this function will get trigger when we click that button in that, i want to use that select property to emit that value.
  onSelectUser() {
    this.select.emit(this.id); // we are passing the id to a parent component
  }
}
