let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() =>{
    let currnentTime = new Date()

    hours.innerHTML = (currnentTime.getHours()< 10?"0":"") + currnentTime.getHours();
    minutes.innerHTML = (currnentTime.getMinutes()< 10?"0": "") + currnentTime.getMinutes();
    seconds.innerHTML = (currnentTime.getSeconds()< 10?"0": "") + currnentTime.getSeconds();
}, 1000);