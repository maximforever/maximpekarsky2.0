var triggerEvent = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? "touchstart" : "click";
var GRID_SIZE = 16;
var SPEED = 40;

var boardIsCurrentlyGenerating = false;


init();                 // setup game

var speeds = {
    slow: 200,
    medium: 40,
    fast: 10
}


function init(){
    generateEmptyBoard();

    document.getElementById("flip-button").addEventListener(triggerEvent, function(){
        if(!boardIsCurrentlyGenerating){
            boardIsCurrentlyGenerating = true;
            toggleButton(true);
            generateBoard();
        }
    });

    var speedOptions = document.querySelectorAll(".speed-option");

    for(var i = 0; i < speedOptions.length; i++){
        speedOptions[i].addEventListener(triggerEvent, function(){

            unselectAllSpeedOptions();

            if(typeof(speeds[this.id]) != "undefined"){
                SPEED = speeds[this.id];
                this.className = "speed-option selected";
            }
        });
    }
}


function unselectAllSpeedOptions(){
    var speedOptions = document.querySelectorAll(".speed-option");

    for(var i = 0; i < speedOptions.length; i++){
        speedOptions[i].className = "speed-option";
    }

}


function generateBoard(){
    console.log("generating");  
    generateEmptyBoard();
    colorSquare(0);
}

function generateEmptyBoard(){
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    for(var i = 0; i < GRID_SIZE * GRID_SIZE; i++){
        var square = document.createElement("div");
        square.className = "square";
        square.id = i;
        grid.appendChild(square);
    }
}


function colorSquare(counter){
    setTimeout(function(){
        var square = document.getElementById(counter);
        square.className = "square";

        if(counter < GRID_SIZE*GRID_SIZE -1){
            var nextSquare = document.getElementById(counter + 1);
            nextSquare.className += " next-square";
        }

        document.getElementById("coin").innerHTML = "T";
        

        if(flipCoin() == "heads"){
            square.className += " filled-in";
            document.getElementById("coin").innerHTML = "H";
        }

        document.getElementById("flip-number").innerHTML = counter + 1; 

        counter++;


        if(counter < GRID_SIZE*GRID_SIZE){
            colorSquare(counter);
        } else {
            boardIsCurrentlyGenerating = false;  
            toggleButton(false);
            document.getElementById("coin").innerHTML = "X";
        }

    }, SPEED);
    
    
}

function flipCoin(){
    return ( Math.random() < 0.5 ) ? "heads" : "tails";

}

function toggleButton(state){
    var button = document.getElementById("flip-button");
    button.disabled = state; 

    button.innerHTML = (state) ? "Generating..." : "Flip";
}