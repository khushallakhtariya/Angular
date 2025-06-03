import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: string;
  time?: string;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  newTask = '';
  dueDate = '';
  dueTime = '';
  editingTask: Task | null = null;
  filter: 'all' | 'active' | 'completed' = 'all';

  message = signal<string | null>(null);
  messageType = signal<'success' | 'error'>('success');
  tasks = signal<Task[]>(this.loadTasks());

  activeTasksCount = computed(
    () => this.tasks().filter((task) => !task.completed).length
  );

  completedTasksCount = computed(
    () => this.tasks().filter((task) => task.completed).length
  );

  filteredTasks = computed(() => {
    const allTasks = this.tasks();
    return this.filter === 'active'
      ? allTasks.filter((t) => !t.completed)
      : this.filter === 'completed'
      ? allTasks.filter((t) => t.completed)
      : allTasks;
  });

  showMessage(text: string, type: 'success' | 'error' = 'success') {
    this.message.set(text);
    this.messageType.set(type);
    setTimeout(() => this.message.set(null), 3000);
  }

  addTask() {
    const trimmed = this.newTask.trim();
    if (trimmed.length < 2) {
      this.showMessage('Task must be at least 2 characters long.', 'error');
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: trimmed,
      completed: false,
      createdAt: new Date(),
      dueDate: this.dueDate || undefined,
      time: this.dueTime || undefined,
    };

    this.tasks.update((tasks) => {
      const updated = [...tasks, task];
      this.saveTasks(updated);
      return updated;
    });

    this.newTask = '';
    this.dueDate = '';
    this.dueTime = '';
    this.showMessage('Task added successfully!');
  }

  toggleComplete(id: number) {
    this.tasks.update((tasks) => {
      const updated = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      this.saveTasks(updated);
      return updated;
    });
    this.showMessage('Task status Complete.');
  }

  editTask(task: Task) {
    this.editingTask = {
      ...task,
      dueDate: task.dueDate ?? '',
      time: task.time ?? '',
    };
  }

  saveEditedTask() {
    if (!this.editingTask) return;
    const trimmed = this.editingTask.title.trim();
    if (trimmed.length < 2) {
      this.showMessage('Task title must be at least 2 characters.', 'error');
      return;
    }

    this.tasks.update((tasks) => {
      const updated = tasks.map((t) =>
        t.id === this.editingTask!.id
          ? {
              ...this.editingTask!,
              title: trimmed,
              dueDate: this.editingTask!.dueDate || undefined,
              time: this.editingTask!.time || undefined,
            }
          : t
      );
      this.saveTasks(updated);
      return updated;
    });

    this.editingTask = null;
    this.showMessage('Task updated successfully!');
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => {
      const updated = tasks.filter((t) => t.id !== id);
      this.saveTasks(updated);
      return updated;
    });
    this.showMessage('Task deleted.');
  }

  clearCompleted() {
    this.tasks.update((tasks) => {
      const updated = tasks.filter((t) => !t.completed);
      this.saveTasks(updated);
      return updated;
    });
    this.showMessage('Completed tasks cleared.');
  }

  saveTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  loadTasks(): Task[] {
    const saved = localStorage.getItem('tasks');
    try {
      const parsed: Task[] = saved ? JSON.parse(saved) : [];
      return parsed.map((task) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }));
    } catch {
      return [];
    }
  }
}
