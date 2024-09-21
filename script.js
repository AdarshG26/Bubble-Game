function makeBubbles(){
    var bubbleCount = "";
    for(var i=0; i<=146; i++){
        let randomNum = Math.floor(Math.random()*10)
        bubbleCount = bubbleCount + `<div class="bubble">${randomNum}</div>`
    }
    document.querySelector('.panel-bottom').innerHTML = bubbleCount;
}

var timer = 60;
function runTimer(){
    var TIMER = setInterval(function(){
        if(timer >0){
            timer = timer - 1;
            document.querySelector('#timer-value').innerHTML = timer;
        }
        else{
            clearInterval(TIMER)
            document.querySelector('.panel-bottom').innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}

var randomHit = 0;
function getNewHit(){
    randomHit = Math.floor(Math.random()*10)
    document.querySelector('#hit-value').innerHTML = randomHit
}

var score = 0;
function incrementScore(){
    score = score + 10
    document.querySelector('#score-value').innerHTML = score
}

document.querySelector('.panel-bottom').addEventListener('click', function(details){
    let clickedBubble = Number((details.target.innerHTML));
    if(clickedBubble === randomHit){
        incrementScore()
        getNewHit()
        makeBubbles()
    }
})


makeBubbles();
runTimer();
getNewHit();
