/*
declare class `Meetup`
  constructor(year, month)
    this.year = year
    this.month = month

  day(day, descriptor)
    // input: two strings
    // output: string (date to string);

    declare `potentialDates` and initialize it to `[]`
    let currentDate = 1
    let date = new Date(this.year, this.month - 1, currentDate)

    while `currentDate.getMonth() === this.month`
      if currentDate.this.day() === day
        push currentDate to `potentialDates`
      currentDate += 1;
      date = newDate(this.year, this.month - 1, currentDate);

    if descriptor === first
      return `pontentialDates[0]`
    if descriptor === second
      return `potentialDates[1]`
    ...
    if descriptor === fifth
      if length of potentialDate is less than 5
        return null
      else
        return `potentialDates[4]`
    if descriptor === last
      return potentialDates.at(-1);
    if descriptor === teenth
      filter potentialDates
        if the `getDate()` of the date is included in [13, 14, 15, 16, 17, 18, 19]
          return true
      return element at index 0 of potentialDates;
*/