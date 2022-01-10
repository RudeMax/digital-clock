
// HOURS
let hour1Seg1 = document.querySelector('.wrapper__clock__digit1__segment-1');
let hour1Seg2 = document.querySelector('.wrapper__clock__digit1__segment-2');
let hour1Seg3 = document.querySelector('.wrapper__clock__digit1__segment-3');
let hour1Seg4 = document.querySelector('.wrapper__clock__digit1__segment-4');
let hour1Seg5 = document.querySelector('.wrapper__clock__digit1__segment-5');
let hour1Seg6 = document.querySelector('.wrapper__clock__digit1__segment-6');
let hour1Seg7 = document.querySelector('.wrapper__clock__digit1__segment-7');

let hour2Seg1 = document.querySelector('.wrapper__clock__digit2__segment-1');
let hour2Seg2 = document.querySelector('.wrapper__clock__digit2__segment-2');
let hour2Seg3 = document.querySelector('.wrapper__clock__digit2__segment-3');
let hour2Seg4 = document.querySelector('.wrapper__clock__digit2__segment-4');
let hour2Seg5 = document.querySelector('.wrapper__clock__digit2__segment-5');
let hour2Seg6 = document.querySelector('.wrapper__clock__digit2__segment-6');
let hour2Seg7 = document.querySelector('.wrapper__clock__digit2__segment-7');

// MINUTES
let minute1Seg1 = document.querySelector('.wrapper__clock__digit3__segment-1');
let minute1Seg2 = document.querySelector('.wrapper__clock__digit3__segment-2');
let minute1Seg3 = document.querySelector('.wrapper__clock__digit3__segment-3');
let minute1Seg4 = document.querySelector('.wrapper__clock__digit3__segment-4');
let minute1Seg5 = document.querySelector('.wrapper__clock__digit3__segment-5');
let minute1Seg6 = document.querySelector('.wrapper__clock__digit3__segment-6');
let minute1Seg7 = document.querySelector('.wrapper__clock__digit3__segment-7');

let minute2Seg1 = document.querySelector('.wrapper__clock__digit4__segment-1');
let minute2Seg2 = document.querySelector('.wrapper__clock__digit4__segment-2');
let minute2Seg3 = document.querySelector('.wrapper__clock__digit4__segment-3');
let minute2Seg4 = document.querySelector('.wrapper__clock__digit4__segment-4');
let minute2Seg5 = document.querySelector('.wrapper__clock__digit4__segment-5');
let minute2Seg6 = document.querySelector('.wrapper__clock__digit4__segment-6');
let minute2Seg7 = document.querySelector('.wrapper__clock__digit4__segment-7');


// SECONDS
let second1Seg1 = document.querySelector('.wrapper__clock__digit5__segment-1');
let second1Seg2 = document.querySelector('.wrapper__clock__digit5__segment-2');
let second1Seg3 = document.querySelector('.wrapper__clock__digit5__segment-3');
let second1Seg4 = document.querySelector('.wrapper__clock__digit5__segment-4');
let second1Seg5 = document.querySelector('.wrapper__clock__digit5__segment-5');
let second1Seg6 = document.querySelector('.wrapper__clock__digit5__segment-6');
let second1Seg7 = document.querySelector('.wrapper__clock__digit5__segment-7');

let second2Seg1 = document.querySelector('.wrapper__clock__digit6__segment-1');
let second2Seg2 = document.querySelector('.wrapper__clock__digit6__segment-2');
let second2Seg3 = document.querySelector('.wrapper__clock__digit6__segment-3');
let second2Seg4 = document.querySelector('.wrapper__clock__digit6__segment-4');
let second2Seg5 = document.querySelector('.wrapper__clock__digit6__segment-5');
let second2Seg6 = document.querySelector('.wrapper__clock__digit6__segment-6');
let second2Seg7 = document.querySelector('.wrapper__clock__digit6__segment-7');

// SEGMENTS CODES

let seg1Code = [0, 2, 3, 5, 6, 7, 8, 9];
let seg2Code = [0, 4, 5, 6, 8, 9];
let seg3Code = [0, 1, 2, 3, 4, 7, 8, 9];
let seg4Code = [2, 3, 4, 5, 6, 8, 9];
let seg5Code = [0, 2, 6, 8];
let seg6Code = [0, 1, 3, 4, 5, 6, 7, 8, 9];
let seg7Code = [0, 2, 3, 5, 6, 8, 9];

// FUNCTION

function check(){
    let date = new Date();

    let seconds = date.getSeconds();
    let secondsString = seconds.toString();
    let minutes = date.getMinutes();
    let minutesString = minutes.toString();
    let hours = date.getHours();
    let hoursString = hours.toString();

    // MISSING ZERO

    if (secondsString < 10) {
       let arrSec = Array.from(secondsString);
       arrSec.unshift('0');
       secondsString = arrSec;
    }

    if (minutesString < 10) {
        let arrMin = Array.from(minutesString);
        arrMin.unshift('0');
        minutesString = arrMin;
     }

     if (hoursString < 10) {
        let arrHou = Array.from(hoursString);
        arrHou.unshift('0');
        hoursString = arrHou;
     }

     // LET'S GO!

    
    let secondOne = secondsString[0]; 
    let secondTwo = secondsString[1];
    let minuteOne = minutesString[0];
    let minuteTwo = minutesString[1];
    let hourOne = hoursString[0];
    let hourTwo = hoursString[1];

    let numberSecondOne = Number(secondOne);
    let numberSecondTwo = Number(secondTwo);
    let numberMinuteOne = Number(minuteOne);
    let numberMinuteTwo = Number(minuteTwo);
    let numberHourOne = Number(hourOne);
    let numberHourTwo = Number(hourTwo);


    // SECONDS

        // Indicator 2

    if (seg1Code.includes(numberSecondTwo)) {
        second2Seg1.style.backgroundColor = '#ee2126';
    } else {
        second2Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberSecondTwo)) {
        second2Seg2.style.backgroundColor = '#ee2126';
    } else {
        second2Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberSecondTwo)) {
        second2Seg3.style.backgroundColor = '#ee2126';
    } else {
        second2Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberSecondTwo)) {
        second2Seg4.style.backgroundColor = '#ee2126';
    } else {
        second2Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberSecondTwo)) {
        second2Seg5.style.backgroundColor = '#ee2126';
    } else {
        second2Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberSecondTwo)) {
        second2Seg6.style.backgroundColor = '#ee2126';
    } else {
        second2Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberSecondTwo)) {
        second2Seg7.style.backgroundColor = '#ee2126';
    } else {
        second2Seg7.style.backgroundColor = '#333333';
    };

        // Indicator 1


    if (seg1Code.includes(numberSecondOne)) {
        second1Seg1.style.backgroundColor = '#ee2126';
    } else {
        second1Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberSecondOne)) {
        second1Seg2.style.backgroundColor = '#ee2126';
    } else {
        second1Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberSecondOne)) {
        second1Seg3.style.backgroundColor = '#ee2126';
    } else {
        second1Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberSecondOne)) {
        second1Seg4.style.backgroundColor = '#ee2126';
    } else {
        second1Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberSecondOne)) {
        second1Seg5.style.backgroundColor = '#ee2126';
    } else {
        second1Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberSecondOne)) {
        second1Seg6.style.backgroundColor = '#ee2126';
    } else {
        second1Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberSecondOne)) {
        second1Seg7.style.backgroundColor = '#ee2126';
    } else {
        second1Seg7.style.backgroundColor = '#333333';
    };

    // MINUTES

        // Indicator 2

    if (seg1Code.includes(numberMinuteTwo)) {
        minute2Seg1.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberMinuteTwo)) {
        minute2Seg2.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberMinuteTwo)) {
        minute2Seg3.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberMinuteTwo)) {
        minute2Seg4.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberMinuteTwo)) {
        minute2Seg5.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberMinuteTwo)) {
        minute2Seg6.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberMinuteTwo)) {
        minute2Seg7.style.backgroundColor = '#ee2126';
    } else {
        minute2Seg7.style.backgroundColor = '#333333';
    };

        // Indicator 1


    if (seg1Code.includes(numberMinuteOne)) {
        minute1Seg1.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberMinuteOne)) {
        minute1Seg2.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberMinuteOne)) {
        minute1Seg3.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberMinuteOne)) {
        minute1Seg4.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberMinuteOne)) {
        minute1Seg5.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberMinuteOne)) {
        minute1Seg6.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberMinuteOne)) {
        minute1Seg7.style.backgroundColor = '#ee2126';
    } else {
        minute1Seg7.style.backgroundColor = '#333333';
    };

    // HOURS

        // Indicator 2

    if (seg1Code.includes(numberHourTwo)) {
        hour2Seg1.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberHourTwo)) {
        hour2Seg2.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberHourTwo)) {
        hour2Seg3.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberHourTwo)) {
        hour2Seg4.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberHourTwo)) {
        hour2Seg5.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberHourTwo)) {
        hour2Seg6.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberHourTwo)) {
        hour2Seg7.style.backgroundColor = '#ee2126';
    } else {
        hour2Seg7.style.backgroundColor = '#333333';
    };

        // Indicator 1

    if (seg1Code.includes(numberHourOne)) {
        hour1Seg1.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg1.style.backgroundColor = '#333333';
    };

    if (seg2Code.includes(numberHourOne)) {
        hour1Seg2.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg2.style.backgroundColor = '#333333';
    };

    if (seg3Code.includes(numberHourOne)) {
        hour1Seg3.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg3.style.backgroundColor = '#333333';
    };

    if (seg4Code.includes(numberHourOne)) {
        hour1Seg4.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg4.style.backgroundColor = '#333333';
    };

    if (seg5Code.includes(numberHourOne)) {
        hour1Seg5.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg5.style.backgroundColor = '#333333';
    };

    if (seg6Code.includes(numberHourOne)) {
        hour1Seg6.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg6.style.backgroundColor = '#333333';
    };

    if (seg7Code.includes(numberHourOne)) {
        hour1Seg7.style.backgroundColor = '#ee2126';
    } else {
        hour1Seg7.style.backgroundColor = '#333333';
    };


};

let interval = setInterval(check, 1000);



