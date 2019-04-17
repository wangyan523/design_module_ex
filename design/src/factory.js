// 工厂模式
class Product{
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fn1() {
    alert('fn1')
  }
  fn2() {
    alert('fn2')
  }
}

class Creator{
  create(name) {
    return new Product(name)
  }
}

let create = new Creator()
let p = create.create('p')
p.init()
p.fn2()