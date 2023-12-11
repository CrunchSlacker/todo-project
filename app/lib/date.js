export default class DateClass {
  constructor() {
    this.date = new Date();
    this.days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    this.months = [
      { month: "January", maxDays: 31 },
      { month: "February", maxDays: 28 },
      { month: "March", maxDays: 31 },
      { month: "April", maxDays: 30 },
      { month: "May", maxDays: 31 },
      { month: "June", maxDays: 30 },
      { month: "July", maxDays: 31 },
      { month: "August", maxDays: 31 },
      { month: "September", maxDays: 30 },
      { month: "October", maxDays: 31 },
      { month: "November", maxDays: 30 },
      { month: "December", maxDays: 31 },
    ];
  }

  //Returns the month as a String
  returnMonth() {
    const monthIndex = this.date.getMonth();
    return this.months[monthIndex].month;
  }

  //Date: Nov 1, 2004; will return 1
  returnDayNum() {
    return this.date.getDate();
  }

  //Date: Nov 1, 2004; will return string Monday
  returnDay() {
    const day = this.date.getDay();
    return this.days[day];
  }

  //Takes a number 0-6 and will return corresponding day. (0 = Sunday ... 6 = Saturday)
  returnDayFromIndex(date) {
    return this.days[date];
  }

  //Returns the year
  returnYear() {
    return this.date.getFullYear();
  }

  //Returns Date
  returnCurrentDate() {
    return this.date;
  }

  //Returns an Array of Objects, Each object represents a day in the week.
  returnWeek() {
    let startDate = this.date.getDate() - this.date.getDay();
    const maxDays = this.months[this.date.getMonth()].maxDays;
    const week = [];
    for (let dateIndex = 0; dateIndex < 7; dateIndex++) {
      if (startDate + dateIndex > maxDays) {
        startDate = 1 - dateIndex;
      }
      week.push({
        day: this.returnDayFromIndex(dateIndex),
        date: startDate + dateIndex,
        isToday: startDate + dateIndex == this.date.getDate(),
        isTomorrow: week[week.length - 1] && week[week.length - 1].isToday,
      });
    }
    if (
      week[week.length - 1].isToday &&
      week[0].date > week[week.length - 1].date
    ) {
      week[0].isTomorrow = true;
    } else {
      week[0].isTomorrow = false;
    }
    return week;
  }
}
