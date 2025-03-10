import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;

  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTasl(this.task.id);
  }
}
