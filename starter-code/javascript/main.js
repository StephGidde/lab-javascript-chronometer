var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes());
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds());
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds());
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (btnLeft.innerText === "START") {
        btnLeft.innerText = "STOP";
        btnLeft.className = "btn stop";
        btnRight.innerText = "SPLIT";
        chronometer.startClick();
        printMinutes();
        printSeconds();
        //minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes());
        //minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes());
        //secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds());
        //secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds());
    } else {
        btnLeft.innerText = "START"
        btnLeft.className = "btn start"
        btnRight.innerText = "RESET"
        chronometer.stopClick();
    }
    

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.innerText === 'RESET') {
        btnRight.innerText = "SPLIT"
    } else {
        btnRight.innerText = "SPLIT"
        btnRight.innerText = "RESET"
    }
});
