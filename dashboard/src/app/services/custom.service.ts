import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: string;
  time?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  private storageKey = 'tasks';

  loadTasks(): Task[] {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (!saved) return [];

      const parsed: Task[] = JSON.parse(saved);
      return parsed.map(task => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }));
    } catch (error) {
      console.error('Error loading tasks:', error);
      alert('Could not load tasks.');
      return [];
    }
  }

  saveTasks(tasks: Task[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
      alert('Could not save tasks.');
    }
  }
}
