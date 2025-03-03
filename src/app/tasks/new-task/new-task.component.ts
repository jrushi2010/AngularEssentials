import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();

  //Angular 17 using singls, we dont have to change anything in the template(html) file, signal will automatically read it from the ngmodel
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
