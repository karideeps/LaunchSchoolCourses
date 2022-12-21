class Robot {
  static chosenNames = [];

  constructor() {
    this.robotName = this.name();
  }

  name() {
    if (this.robotName) return this.robotName;
    let randomName = this.generateRandomName();

    while(Robot.chosenNames.includes(randomName)) {
      randomName = this.generateRandomName();
    }
    Robot.chosenNames.push(randomName);
    this.robotName = randomName;
    return randomName;
  }

  generateRandomName() {
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let digits = '0123456789';
    let name = '';
    name += alphabets[Math.floor((Math.random() * alphabets.length))];
    name += alphabets[Math.floor((Math.random() * alphabets.length))];
    name += digits[Math.floor((Math.random() * digits.length))];
    name += digits[Math.floor((Math.random() * digits.length))];
    name += digits[Math.floor((Math.random() * digits.length))];
    return name;
  }

  reset() {
    this.robotName = undefined;
    this.robotName = this.name();
  }
}

module.exports = Robot;
