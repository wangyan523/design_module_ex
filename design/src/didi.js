class DidiCar{
  constructor(name,plate,type) {
    this.name = name
    this.plate = plate
    this.type = type
  }
  start() {
    console.log(`车辆${this.name},车牌号${this.plate}`);
  }
  end() {
    console.log(`共计${5*this.type}元`);
  }
}