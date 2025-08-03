class Stopwatch {
    constructor() {
        this.running = false;
        this.startTime = null;
        this.endTime = null
    }
    start() {
        if (!this.running) {
            this.startTime = Date.now();
            console.log('stopwatch started')
            this.running = true
            return this.startTime
        } else {
            console.error("your stop watch is already runinng");

        }
    }

    stop() {
        if (this.running) {
            this.endTime = Date.now()
            console.log('stopwatch stopped')
            this.running = false
            return this.endTime
        } else {
            console.error("please start the stopwatch before you stop it")
        }
    }
    duration() {
        let dur = Math.floor((this.endTime - this.startTime) / 1000)
        console.log(`clock ran this much ${dur}`)
    }

    reset() {
        this.running = false;
        this.startTime = null;
        this.endTime = null
    }
}

