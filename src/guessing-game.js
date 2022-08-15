class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minV = min;
        this.maxV = max;
    }

    guess() {
        return Math.round((this.minV+this.maxV)/2);
    }
    lower() {
        this.maxV = Math.round((this.minV+this.maxV)/2);
    }
    greater() {
        this.minV = Math.round((this.minV+this.maxV)/2);
    }
}

module.exports = GuessingGame;
