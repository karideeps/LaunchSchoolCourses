const Car = require("./car");

describe("The Car class", () => {
  test('two new cars are equal objects', () => {
    let car1 = new Car();
    let car2 = new Car();

    car1.a = {
      a: 'hello',
    };
    car2.a = {
      a: 'hello',
    };

    expect(car1).toEqual(car2);
  })
});