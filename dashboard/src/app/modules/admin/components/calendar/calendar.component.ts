import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  message: string = '';
  currentDate = new Date();
  month: string = '';
  year: number = 0;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: (number | null)[][] = [];

  selectedDay: number | null = null;
  showEventForm: boolean = false;
  editingEvent: any = null;

  newEventTitle: string = '';
  newEventTime: string = '';
  newEventColor: string = 'bg-blue-200';

  events = [
    { date: 1, title: 'All Day Event', color: 'bg-orange-200', month: 4 },
    { date: 6, title: 'Long Event', color: 'bg-pink-200', month: 4 },
    { date: 8, title: 'Repeating Event', color: 'bg-blue-200', month: 4 },
    { date: 15, title: 'Repeating Event', color: 'bg-blue-200', month: 4 },
    { date: 23, title: 'Dinner', time: '1:30pm', color: 'bg-green-200', month: 4 },
    { date: 18, title: 'Meeting', time: '4pm', color: 'bg-cyan-200', month: 4 },
    { date: 19, title: 'Lunch', time: '5:30pm', color: 'bg-teal-200', month: 5 },
    { date: 20, title: 'Meeting', time: '8pm', color: 'bg-indigo-200', month: 4 },
    { date: 17, title: 'Happy Hour', time: '11pm', color: 'bg-yellow-200', month: 4 },
    { date: 19, title: 'Birthday Party', time: '12:30pm', color: 'bg-purple-200', month: 4 },
  ];

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.month = this.currentDate.toLocaleString('default', { month: 'long' });
    this.year = this.currentDate.getFullYear();

    const firstDayOfMonth = new Date(this.year, this.currentDate.getMonth(), 1);
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(this.year, this.currentDate.getMonth() + 1, 0).getDate();

    const weeks: (number | null)[][] = [];
    let currentWeek: (number | null)[] = new Array(startDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) currentWeek.push(null);
      weeks.push(currentWeek);
    }

    this.weeks = weeks;
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
    this.resetSelection();
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
    this.resetSelection();
  }

  selectDay(day: number | null) {
    if (day !== null) {
      this.selectedDay = day;
      this.showEventForm = true;
      this.newEventTitle = '';
      this.newEventTime = '';
      this.newEventColor = 'bg-blue-200';
      this.editingEvent = null;
    }
  }

  getEventsForDay(day: number | null) {
    if (day == null) return [];
    const monthIndex = this.currentDate.getMonth();
    return this.events.filter(event => event.date === day && event.month === monthIndex);
  }

  addEvent() {
    if (this.selectedDay !== null) {
      if (this.editingEvent) {
        this.editingEvent.title = this.newEventTitle;
        this.editingEvent.time = this.newEventTime;
        this.editingEvent.color = this.newEventColor;
      } else {
        this.events.push({
          date: this.selectedDay,
          title: this.newEventTitle,
          time: this.newEventTime,
          color: this.newEventColor,
          month: this.currentDate.getMonth(),
        });
      }

      this.resetSelection();
      this.updateCalendar();
    }
  }

  deleteEvent(eventToDelete: any) {
    this.events = this.events.filter(event => event !== eventToDelete);
    this.message = 'Event deleted successfully!';
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
  onClose() {
    this.message = ''; // Clear or hide the message
  }
  editEvent(eventToEdit: any) {
    this.selectedDay = eventToEdit.date;
    this.showEventForm = true;
    this.newEventTitle = eventToEdit.title;
    this.newEventTime = eventToEdit.time || '';
  this.newEventColor = eventToEdit.color || 'bg-blue-200';
    this.editingEvent = eventToEdit;
  
    this.message = 'Editing event: ' + eventToEdit.title;

    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  resetSelection() {
    this.selectedDay = null;
    this.showEventForm = false;
    this.editingEvent = null;
    this.newEventTitle = '';
    this.newEventTime = '';
    this.newEventColor = 'bg-blue-200';
  }
}
