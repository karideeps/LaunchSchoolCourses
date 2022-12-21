/*
declare class `Clock`
  constructor(minutes)
    this.minutes = minutes;

  static at(hour, minutes)
    minutes = (hour * 60) + minutes
    return new Clock(minutes)

  toString()
    // convert this.minutes into string format

    while (this.minutes < 0) this.minutes += 1440
    while (this.minutes > 1440) this.minutes -= 1440

    this.minutes = this.minutes % 1400
    let hours = Math.floor(this.minutes / 60) ??
    let minutes = this.mintes - hours * 24; ??
    String.format();

  add(minutes) // create a new clock object
    let currentMinutes = this.getMinutes;
    currentMinutes += minutes
    return new Clock(currentMinutes);

  subtract(minutes) // create a new clock object
    let currentMinutes = this.getMinutes;
    currentMinutes -= minutes
    return new Clock(currentMinutes);

  getMinutes()
    return this.minutes

*/