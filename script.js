class Clock {
    constructor() {
        this.clock = document.querySelector(".clock");
        this.UI = {};
        this.init();
    }

    updateClock() {
        const now = new Date();
        const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
        const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
        const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;

        this.UI.second.style.transform = `rotate(${seconds}deg)`;
        this.UI.minute.style.transform = `rotate(${minutes}deg)`;
        this.UI.hour.style.transform = `rotate(${hours}deg)`;
        requestAnimationFrame(this.updateClock.bind(this))
    }

    init() {
        this.clock.innerHTML = `<svg
                                    width="100"
                                    height="100"
                                    viewbox="-50 -50 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle class="border" r="47" ></circle>
                                    <line class="line line-1" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-2" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-3" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-4" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-5" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-6" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-7" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-8" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-9" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-10" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-11" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="line line-12" x1="0" y1="42" x2="0" y2="36"></line>
                                    <line class="hour" x1="0" y1="0" x2="0" y2="30"></line>
                                    <line class="minute" x1="0" y1="0" x2="0" y2="36"></line>
                                    <line class="second" x1="0" y1="0" x2="0" y2="42"></line>
                                    <circle class="center-dot" r="2"></circle>
                                </svg>`

        this.UI.second = this.clock.querySelector(".second");
        this.UI.minute = this.clock.querySelector(".minute");
        this.UI.hour = this.clock.querySelector(".hour");
        requestAnimationFrame(this.updateClock.bind(this))
    }
}
new Clock()