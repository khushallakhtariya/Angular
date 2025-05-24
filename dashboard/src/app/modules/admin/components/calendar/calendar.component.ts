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
isToday(_t19: number|null): any {
throw new Error('Method not implemented.');
}
isCurrentMonth(_t19: number|null) {
throw new Error('Method not implemented.');
}
  currentDate = new Date();
  month: string = '';
  year: number = 0;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: (number | null)[][] = [];

  selectedDay: number | null = null;
  showEventForm: boolean = false;

  newEventTitle: string = '';
  newEventTime: string = '';
  newEventColor: string = 'bg-blue-200';

  events = [
    { date: 1, title: 'All Day Event', color: 'bg-orange-200', month: 4 },
    { date: 6, title: 'Long Event', color: 'bg-pink-200', month: 4 },
    { date: 8, title: 'Repeating Event', color: 'bg-blue-200', month: 4 },
    { date: 15, title: 'Repeating Event', color: 'bg-blue-200', month: 4 },
    {
      date: 23,
      title: 'Dinner',
      time: '1:30pm',
      color: 'bg-green-200',
      month: 4,
    },
    { date: 18, title: 'Meeting', time: '4pm', color: 'bg-cyan-200', month: 4 },
    {
      date: 18,
      title: 'Lunch',
      time: '5:30pm',
      color: 'bg-teal-200',
      month: 4,
    },
    {
      date: 18,
      title: 'Meeting',
      time: '8pm',
      color: 'bg-indigo-200',
      month: 4,
    },
    {
      date: 18,
      title: 'Happy Hour',
      time: '11pm',
      color: 'bg-yellow-200',
      month: 4,
    },
    {
      date: 19,
      title: 'Birthday Party',
      time: '12:30pm',
      color: 'bg-purple-200',
      month: 4,
    },
  ];

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.month = this.currentDate.toLocaleString('default', { month: 'long' });
    this.year = this.currentDate.getFullYear();

    const firstDayOfMonth = new Date(this.year, this.currentDate.getMonth(), 1);
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
      this.year,
      this.currentDate.getMonth() + 1,
      0
    ).getDate();

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
    if (day) {
      this.selectedDay = day;
      this.showEventForm = true;
    }
  }

  getEventsForDay(day: number | null) {
    if (day == null) return [];
    const monthIndex = this.currentDate.getMonth();
    return this.events.filter(
      (event) => event.date === day && event.month === monthIndex
    );
  }

  addEvent() {
    if (this.selectedDay !== null) {
      this.events.push({
        date: this.selectedDay,
        title: this.newEventTitle,
        time: this.newEventTime,
        color: this.newEventColor,
        month: this.currentDate.getMonth(),
      });

      this.newEventTitle = '';
      this.newEventTime = '';
      this.newEventColor = 'bg-blue-200';
      
      this.updateCalendar();
      this.showEventForm = false;
    }
  }

  resetSelection() {
    this.selectedDay = null;
    this.showEventForm = false;
  }
}
