class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) { 
    if (callback) {
        this.intervalId = setInterval(() => {
        this.currentTime += 10
        callback(
          this.computeTwoDigitNumber(this.getMinutes()), 
          this.computeTwoDigitNumber(this.getSeconds()), 
          this.computeTwoDigitNumber(this.getMiliseconds())
          )
      }, 10)
    } else {
        this.intervalId = setInterval(() => {
        this.currentTime++
      }, 10)
    }
   
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000)
  }

  getSeconds() {
    return (Math.floor(this.currentTime / 1000)) % 60
  }

  getMiliseconds() {
    return this.currentTime % 1000
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value
    } else if (value > 99) {
      return Math.floor(value / 10).toString()
    }
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset(callback) {
    callback()
    this.intervalId = null
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + ':' + this.computeTwoDigitNumber(this.getMiliseconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
