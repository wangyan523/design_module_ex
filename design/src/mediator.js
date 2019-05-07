class A{
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num 
    if(m) {
      m.setB()
    }
  }
}

class B{
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num 
    if(m) {
      m.setA()
    }
  }
}

class Mediator{
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setB() {
    let number = this.a.number
    this.b.setNumber(number *222)
  }
  setA() {
    let number = this.b.number
    this.a.setNumber(number / 2)
  }
}

let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(100, m)
console.log(a, b);
b.setNumber(100, m)
console.log(a, b);