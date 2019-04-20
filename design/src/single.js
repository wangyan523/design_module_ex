// 单例模式
// class SingleObject{
//   login() {
//     console.log('login...')
//   }
// }

// SingleObject.getInstance = (function() {
//   let instance
//   return function() {
//     if(!instance) {
//       instance = new SingleObject()
//     }
//     return instance
//   }
// })()

// let obj1 = SingleObject.getInstance()
// obj1.login()

// 登录框例子
class LoginForm{
  constructor() {
    this.state = 'hide'
  }
  show() {
    if(this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示');
  }
  hide() {
    if(this.state === 'hide') {
      alert('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框隐藏');
  }
}

LoginForm.getInstance = (function() {
  let instance
  return function() {
    if(!instance) {
      instance =  new LoginForm()
    }
    return instance
  }
})()

let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.hide()