const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks = cb => cb
    }
  }
}