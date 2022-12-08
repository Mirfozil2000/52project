const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(msg) {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = date.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = date.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);