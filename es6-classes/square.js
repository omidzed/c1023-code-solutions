/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()} and a width of ${this.width}.`;
  }
}

const newSquare = new Square(5);
console.log(newSquare.describe());
