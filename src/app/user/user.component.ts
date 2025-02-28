import { Component, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  // @Input({required:true}) avatar!: string;  (angular 16)
  // @Input() avatar!: string;
  // @Input() name!: string;

  // how to recieve data using signals (angular 16)
  //first we have to import input function from angular core with the small i.
  avatar = input.required<string>(); // hear we are telling that we are receiving only string type value
  name = input.required<string>();
  //these signals are read only, means we cant set a new value inside this component,
  //means they cant be changed inside this component but offcourse we can change the value from where we are setting it up.

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {}
}
