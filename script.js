const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

const updateClock = () => {
    const now = new Date();

    const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
    const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;

    secondEl.style.transform = `rotate(${seconds}deg)`;
    minuteEl.style.transform = `rotate(${minutes}deg)`;
    hourEl.style.transform = `rotate(${hours}deg)`;
    requestAnimationFrame(updateClock);
};

requestAnimationFrame(updateClock);
