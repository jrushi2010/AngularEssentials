import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;

  // @Output() select = new EventEmitter();
  select = output<string>(); //angular 16
  // behind of this output function angular will create eventEmmiter or you, so we dont have to.

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
