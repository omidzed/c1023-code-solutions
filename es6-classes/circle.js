/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} and a radius of ${this.radius}.`;
  }
}

const circle = new Circle(3);
console.log(circle.describe());
