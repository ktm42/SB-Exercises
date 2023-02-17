/*Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "Done!" and stop.*/

function countdown(num){
    let currentNumber = num;
    
    const countdownTimer = setInterval(() => {
        console.log(currentNumber);
        if (currentNumber === 0) {
            clearInterval(countdownTimer);
            console.log("DONE!")
        };
        currentNumber--
    }, 1000);
}

function randomgame() {
 let num;
 let times = 0;
 let counter = setInterval(() => {
    num = Math.random();
    times++
    if (num > .75) {
        clearInterval(counter);
        console.log ('It took ' + times + ' try/tries.');
    }
 }, 1000)
}