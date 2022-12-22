class Meetup {
  constructor (year, month) {
    this.year = year;
    this.month = month;
  }

  static DAYS = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
  }

  day(day, descriptor) {
    day = Meetup.DAYS[day.toLowerCase()]
    descriptor = descriptor.toLowerCase();

    let potentialDates = [];
    let currentDate = 1;
    let date = new Date(this.year, this.month - 1, currentDate);

    while ((date.getMonth() + 1) === this.month) {
      if (date.getDay() === day) {
        potentialDates.push(date);
      }
      currentDate += 1;
      date = new Date(this.year, this.month - 1, currentDate);
    }

    switch(descriptor) {
      case 'first':
        return potentialDates[0];
      case 'second':
        return potentialDates[1];
      case 'third':
        return potentialDates[2];
      case 'fourth':
        return potentialDates[3];
      case 'fifth':
        return potentialDates[4] || null;
      case 'last':
        return potentialDates.at(-1);
      case 'teenth':
        return potentialDates.filter(date => {
          return [13, 14, 15, 16, 17, 18, 19].includes(date.getDate());
        })[0];
    }
  }
}

module.exports = Meetup;