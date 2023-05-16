const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");
const textElement = document.getElementById("text");

let showDate = true;

function upDateTime(){
    const data = new Date();
    
    const day = data.getDay();
    const ampm = data.getHours() >= 12 ? "PM" : "AM";
    const hour = data.getHours() + data.getMinutes()/60;
    const minute = data.getMinutes() + data.getSeconds()/60;
    const second = data.getSeconds() + data.getMilliseconds()/1000;

    textElement.textContent = showDate ? day : ampm;
    hoursElement.setAttribute("transform", `rotate(${(360/12)*hour})`);
    minutesElement.setAttribute("transform", `rotate(${(360/60)*minute})`);
    secondsElement.setAttribute("transform", `rotate(${(360/60)*second})`);

    requestAnimationFrame(upDateTime);
}
//console.log(day);

requestAnimationFrame(upDateTime);

textElement.addEventListener("click", () =>{
    showDate = !showDate;
})
