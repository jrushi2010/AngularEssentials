import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  users = DUMMY_USERS;
}
