class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.prevCall = Math.ceil((this.max+this.min)/2)
        return this.prevCall            
    }

    lower() {
        this.max = this.prevCall
    }   

    greater() {
        this.min = this.prevCall
    }
}

module.exports = GuessingGame;
