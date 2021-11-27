class Shape {
  constructor(id, x, y) {
    this.id = id;
  }

  toString() {
    return `Shape(${this.id})`;
  }
}

const shape = new Shape("1");
console.log(shape.toString());

/**
 * Inheritance
 */
// class Rectangle extends Shape {
//   constructor(id, x, y, width, height) {
//     super(id, x, y);
//     this.width = width;
//     this.height = height;
//   }
//   toString() {
//     return "Rectangle > " + super.toString();
//   }
// }
// const rec = new Rectangle("2", 1, 2, 100, 200);
// console.log(rec.toString());

/**
 * Static members
 */
// class Rectangle extends Shape {
//   static defaultRectangle() {
//     return new Rectangle("default", 0, 0, 100, 100);
//   }
// }

// const defRectangle = Rectangle.defaultRectangle();

/**
 * Getters / Setters
 */
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  set width(width) {
    this._width = width;
  }
  get width() {
    return this._width;
  }
  set height(height) {
    this._height = height;
  }
  get height() {
    return this._height;
  }
}
var r = new Rectangle(50, 20);
r.height = 30;
console.log(r.height);
