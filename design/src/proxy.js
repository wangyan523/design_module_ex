// class ReadImg{
//   constructor(filename) {
//     this.filename = filename 
//     this.loadFromDisk()
//   }
//   display() {
//     console.log('display...', this.filename);
//   }
//   loadFromDisk() {
//     console.log('loading...', this.filename);
//   }
// }

// class ProxyImg{
//   constructor(filename) {
//     this.ReadImg = new ReadImg(filename)
//   }
//   display() {
//     this.ReadImg.display()
//   }
// }

// let img = new ReadImg('.png')
// img.display()

///////////es6 proxy/////////////
let star = {
  name: 'Mayday',
  age: 100,
  phone: 'star: 18888888888'
}

// 经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      return 'agent: 13333333333'
    }
    if(key === 'price') {
      return 1000000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val < 1000000) {
        console.log('价格太低， 免谈');
      } else {
        target[key] = val
        return true
      }
    }
  }
})

console.log(agent.name);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 900000
console.log(agent.customPrice);