// Relogio digital
const Horas = document.getElementById('hours');
const Min = document.getElementById('minute');
const Seg = document.getElementById('second');

const relogioAnalogico = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0'+ s;

    Horas.innerHTML = hr;
    Min.innerHTML = min;
    Seg.innerHTML = s;
});

// Relogio analogico
const Hour = document.querySelector('.hour-hand');
const Minute = document.querySelector('.minute-hand');
const Sec = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    Sec.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    Minute.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    Hour.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

}, 1000);

const ModDig = document.querySelector('#digitalmode');
const AnaMod = document.querySelector('#analogmode');
const DigWatch = document.querySelector('.hidden');
const Anaclock = document.querySelector('.hidden2');

ModDig.addEventListener("click", clicar);

function clicar(){
    Anaclock.classList.add("hidden2")
    Anaclock.style.display= "none"

    DigWatch.classList.add("hidden")
    DigWatch.style.display = "flex"
}


AnaMod.addEventListener("click", clicar1);

function clicar1(){
    DigWatch.classList.add("hidden2")
    DigWatch.style.display= "none"

    Anaclock.classList.add("hidden")
    Anaclock.style.display = "block"
}

