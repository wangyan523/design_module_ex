const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallBacks = []
  that.rejectedCallBacks = []

  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallBacks.map(cb => cb(that.value))
    }
  }

  function reject() {
    if(that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallBacks,map(cb => cb(that.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? 
                onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ?
                onRejected : r => {
                  throw r
                }
  if(that.state === PENDING) {
    that.resolvedCallBacks.push(onFulfilled)
    that.rejectedCallBacks.push(onRejected)
  }
  if(that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if(that.state === REJECTED) {
    onRejected(that.value)
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('asdasd')
  })
}).then(res => {
  console.log(res);
})