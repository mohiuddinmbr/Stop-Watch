const time = document.querySelector('.time');

let second = 0;
let minutes = 0;
let hours = 0;

let inter ;

function start(){
    inter = setInterval(() => {
        second++;
        if (second == 60){
            second = 0;
            minutes++;
        }
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
        time.innerHTML = `${hours} : ${minutes} : ${second}`
    }, 1000);
    
    
}



function stop(){
    clearInterval(inter)
}

function reset(){
    clearInterval(inter);

    second = 0;
    minutes = 0;
    hours = 0;

    time.innerHTML = `00 : 00 : 00`
}

