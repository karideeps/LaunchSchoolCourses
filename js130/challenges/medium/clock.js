class Clock {
  constructor(minutes) {
    this.minutes = minutes;
  }

  static at(hour, minutes) {
    if (!minutes) minutes = 0;
    minutes = (hour * 60) + minutes;
    return new Clock(minutes);
  }

  toString() {
    let minutes = this.getMinutes();
    while (minutes < 0) minutes += 1440;
    while (minutes > 1440) minutes -= 1440;

    let hours = Math.floor(minutes / 60);
    minutes = minutes - (hours * 60);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  isEqual(clockObject) {
    for (let prop in this) {
      if (this[prop] !== clockObject[prop]) return false;
    }
    return true;
  }

  add(minutes) {
    let currentMinutes = this.getMinutes();
    currentMinutes += minutes;
    return new Clock(currentMinutes);
  }

  subtract(minutes) {
    let currentMinutes = this.getMinutes();
    currentMinutes -= minutes;
    return new Clock(currentMinutes);
  }

  getMinutes() {
    return this.minutes;
  }
}

module.exports = Clock;