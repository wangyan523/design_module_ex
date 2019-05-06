// class Circle{
//   draw() {
//     console.log('画一个圆形');
//   }
// }

// class Draw{
//   constructor(circle) {
//     this.circle = circle
//   }
//   draw() {
//     this.circle.draw()
//     this.setRedBorder(circle)
//   }
//   setRedBorder(circle) {
//     console.log('加一个红色的边框')
//   }
// }

// let circle = new Circle()
// circle.draw()
// let draw = new Draw(circle)
// draw.draw()

////////////es7///////////////
// function testDec(isDec) {
//   return function testDec(target) {
//     target.isDec = isDec
//   }
// }

// @testDec(true)
// class Demo{

// }
// console.log(Demo.isDec)

/////////mixins/////////////
// function mixins(...list) {
//   return function(target) {
//     Object.assign(target.prototype, ...list)
//   }
// }

// const Foo = {
//   foo() {
//     console.log('foo');
//   }
// }

// @mixins(Foo)
// class Myclass{

// }

// let obj = new Myclass(Foo)
// obj.foo()

//////////方法只读///////////
function readOnly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Person{
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }
  @readOnly
  name() {
    console.log(`${this.first} + ${this.last}`); 
  }
}

let p = new Person()
p.name()
p.name = function() {
  alert(111)
}


////////////打印日志////////////////
// function log(target, name, descriptor) {
//   let oldValue = descriptor.value
//   descriptor.value = function() {
//     console.log(`calling ${name} with`, arguments); 
//     return oldValue.apply(this, arguments)
//   }
//   return descriptor
// }

// class Math{
//   @log
//   add(a,b) {
//     return a+b
//   }
// }
// let l = new Math()
// const result = l.add(1,4)
// console.log(result);