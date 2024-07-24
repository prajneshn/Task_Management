import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) selectedUserId!: string;
  isNewTask!: boolean;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getSelectedUserTasks(this.selectedUserId);
  }

  onAddTask() {
    this.isNewTask = true;
  }

  onCloseAddTask() {
    this.isNewTask = false;
  }

  OnSubmit(task: newTask) {
    this.taskService.addTask(task, this.selectedUserId);
    this.isNewTask = false;
  }
}
