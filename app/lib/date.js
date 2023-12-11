export default class DateClass {
  constructor() {
    this.date = new Date();
  }

  getMonth() {
    const month = this.date.getMonth();

    const months = {
      0: "January",
      1: "Febuary",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    return months[month];
  }

  getDayNum() {
    return this.date.getDate();
  }

  getDay() {
    const day = this.date.getDay();

    const days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    return days[day];
  }

  getYear() {
    return this.date.getFullYear();
  }

  getCurrentDate() {
    return this.date;
  }

  getWeek() {}
}
