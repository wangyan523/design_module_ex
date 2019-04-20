class Circle{
  draw() {
    console.log('画一个圆形');
  }
}

class Draw{
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('加一个红色的边框')
  }
}

let circle = new Circle()
circle.draw()
let draw = new Draw(circle)
draw.draw()