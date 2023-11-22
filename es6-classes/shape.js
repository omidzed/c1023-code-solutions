/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area of this shape is ${this.area} and its perimeter is ${this.perimeter}.`;
  }
}

const square = new Shape(4, 8);
console.log(square.describe());
