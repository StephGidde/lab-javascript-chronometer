class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        var _chronometer = this;
        this.intervalId = setInterval(function () {
            _chronometer.currentTime += 1;
            _chronometer.setTime();
            console.log(_chronometer.currentTime)
        }, 1000);
    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(value) {
        if (value < 10) {
            return "0" + value
        } else if (value > 10) {
            return value.toString()
        }
    }
    setTime() {
        var minutes = this.twoDigitsNumber(this.setMinutes());
        console.log(minutes)
        var seconds = this.twoDigitsNumber(this.setSeconds());

    }

    stopClick() {
        clearInterval(this.intervalId)
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }
} 
