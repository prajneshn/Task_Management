import { Injectable } from '@angular/core';
import { newTask } from './task/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: '9b2d52a5-7dbb-4c85-bdc1-5d256d536e1d',
      userId: 'u1',
      title: 'Complete project report',
      summary: 'Finalize and submit the project report by the end of the week.',
      duedate: '2023-08-15',
    },
    {
      id: '1a3d47a6-8ebb-4a2e-9b4c-2a6f79e274d5',
      userId: 'u1',
      title: 'Team meeting',
      summary:
        'Attend the team meeting to discuss the project milestones and deliverables.',
      duedate: '2023-08-17',
    },
    {
      id: 'c4d7c4d1-6d6f-4b3b-89b7-4f57a7c14f23',
      userId: 'u2',
      title: 'Code review',
      summary:
        'Review the code for the new feature implementation and provide feedback.',
      duedate: '2023-08-16',
    },
    {
      id: 'f1e2d6a1-7a4e-4c38-baf7-8e4741d4d8a1',
      userId: 'u3',
      title: 'Client presentation',
      summary:
        'Prepare and deliver the presentation for the client meeting next week.',
      duedate: '2023-08-20',
    },
    {
      id: 'a8d5c2a9-4f0b-4e5a-b3f2-7e1f2e5c2e9a',
      userId: 'u2',
      title: 'Database backup',
      summary:
        'Perform a full backup of the database before the scheduled maintenance.',
      duedate: '2023-08-18',
    },
    {
      id: 'b3e4c2d1-6c3e-4b7b-9c4d-3e5f6a1d8b7c',
      userId: 'u4',
      title: 'Update documentation',
      summary: 'Update the project documentation with the latest API changes.',
      duedate: '2023-08-19',
    },
    {
      id: 'd5e3c7b2-5e4d-4c2a-b6d4-8f1a7d3e5b4c',
      userId: 'u3',
      title: 'Design review',
      summary:
        'Participate in the design review meeting and provide feedback on the new UI design.',
      duedate: '2023-08-21',
    },
  ];

  constructor() {
    var tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getSelectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(task: newTask, id: string) {
    this.tasks.unshift({
      id: uuidv4(),
      userId: id,
      title: task.title,
      summary: task.summary,
      duedate: task.date,
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
