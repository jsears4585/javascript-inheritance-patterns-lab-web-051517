const Point = function(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function (x, y) {
  return `(${this.x}, ${this.y})`
};

const Side = function(length) { this.length = length }

const Shape = function() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

const Circle = function(radius) {
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.diameter = function() {
  return 2 * this.radius
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

const Polygon = function() {
  this.args = [...arguments].reduce(function(a, b) {
    return a.concat(b);
  }, []);
}
Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.numberOfSides = function() {
  return this.args.length
}

Polygon.prototype.perimeter = function() {
  return this.args.reduce(function(a, b) {
    return a + b.length
  }, 0)
}

const Quadrilateral = function(one, two, three, four) {
  Polygon.call(this, new Side(one), new Side(two), new Side(three), new Side(four))
}
Quadrilateral.prototype = Object.create(Polygon.prototype)

const Rectangle = function(width, height) {
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, width, height, height)
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return this.width * this.height
}

const Square = function(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}
Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function() {}

const Triangle = function(one, two, three) {
  Polygon.call(this, new Side(one), new Side(two), new Side(three))
}
Triangle.prototype = Object.create(Polygon.prototype)
