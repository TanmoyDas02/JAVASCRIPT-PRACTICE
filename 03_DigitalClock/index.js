const clock = document.getElementById('clock');


// setInterval() --> repeats the execution of the function continuously.
//                   (() => {}, 1000) --> 1000 means time here
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);