class Car{
  constructor(num, name) {
    this.num = num 
    this.name = name
  }
}

class ZhuanCar extends Car{
  constructor(num, name) {
    super(num, name)
    this.price = 2
  }
}

class KuaiCar extends Car{
  constructor(num, name) {
    super(num, name)
    this.price = 1
  }
}

class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，车辆名称:${this.car.name},车牌号:${this.car.num}`)
  }
  end() {
    console.log(`行程结束，车费共计${this.car.price*5}元`);
  }
}

let Cadilac = new ZhuanCar('豫C 00000', '凯迪拉克')
let trip = new Trip(Cadilac)
trip.start()
trip.end()