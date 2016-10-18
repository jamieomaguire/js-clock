// Based off of tutorials found at W3 schools
function getTime() {

    var hoursDigits = document.getElementById('js-hours');
    var minutesDigits = document.getElementById('js-minutes');
    var secondsDigits = document.getElementById('js-seconds');

    // get today's date
    today = new Date();
    // breakdown into hours, minutes, seconds
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    // appened 0 before single digits on minutes and seconds
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    // appened to appropriate sections
    hoursDigits.innerHTML = hours;
    minutesDigits.innerHTML = minutes;
    secondsDigits.innerHTML = seconds;
    // set loading timer
    var timer = setTimeout(getTime, 500);

}

function checkTime(i){
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}
