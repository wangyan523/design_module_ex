class Transverter{
  original() {
    return '德国原装插头'
  }
}

class Target{
  constructor() {
    this.adaptee = new Transverter()
  }
  request() {
    let info = this.adaptee.original()
    return `${info} --- 转换 --- 中国插头`
  }
}

let target = new Target()
let res = target.request()
console.log(res);