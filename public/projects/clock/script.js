init();

var TEST_TIME;
test = false;

var previousTime = {};
var animation = null;
var currentLightCounter = 0;


// start the interval
function init(){
    enableButtons();
    setInterval(updateTime, 200);
    test();
}

//
function updateTime(){
    var time = getFormattedTime(); 

    if(test){
        time = TEST_TIME;
    }

    // only refresh the screen if the time has changed
    if(JSON.stringify(previousTime) != JSON.stringify(time)){
        previousTime = time;
        refreshClock(time);
    }
    
}

// fetch time from system, strip hours and minutes
function getFormattedTime(){

    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();

    return formatTime(hours, minutes)
}

// format digits to class names
function formatTime(hours, minutes){

    var formattedTime = {
        am: true,
        hours: null,
        teenMinutes: null,
        tensOfMinutes: null,
        singleMinutes: null
    }

    if(hours > 12){
        hours -=12;
        formattedTime.am = false
    }

    if (hours == 0){ hours = 12 }

    formattedTime.hours = hours + "-hours";

    if(minutes > 0){
        if(minutes < 10){
            formattedTime.tensOfMinutes = "0-tens-of-minutes";
            formattedTime.singleMinutes = minutes - Math.floor(minutes/10)*10 + "-single-minutes";
        } else if(minutes < 20) {
            formattedTime.teenMinutes = minutes + "-teen-minutes";
        } else {
            formattedTime.tensOfMinutes = Math.floor(minutes/10) + "-tens-of-minutes";
            if(minutes%10 != 0){
                formattedTime.singleMinutes = minutes - Math.floor(minutes/10)*10 + "-single-minutes";
            }
            
        }
    }

    return formattedTime;
}

// physically update clock on screen
function refreshClock(time){

    var selectedWords = document.getElementsByClassName("word");

    //remove all selected elements
    for(var i = 0; i < selectedWords.length; i++){
        selectedWords[i].className = "word";
    }   

    console.log(time.hours);

    document.getElementById(time.hours).className += " selected";

    if(time.teenMinutes != null){
            document.getElementById(time.teenMinutes).className += " selected";
    }

    if(time.tensOfMinutes != null){
        document.getElementById(time.tensOfMinutes).className += " selected";
    }

    if(time.singleMinutes != null){
        document.getElementById(time.singleMinutes).className += " selected";
    }
    
    if(time.am){
        document.getElementById("am").className += " selected";
    } else {
        document.getElementById("pm").className += " selected";   
    }

}

// attach click listeners to change color buttons
function enableButtons(){
    var buttons = document.getElementsByClassName("change-color");

    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(e){
            console.log(e.target.id);
            document.getElementById("app").className = e.target.id;

            if(e.target.id == "christmas"){
                startChristmasAnimation();
            } else {
                clearInterval(animation);
                animation = null;
            }
        })
    }

}

// randomly pick a light with a random color every half a second
function startChristmasAnimation(){

    animation = setInterval(function(){

        var defaultColor = "#f9ff40";
        var selectedLights = document.getElementsByClassName("selected");
        var randomColorClass = "word selected random-color-" + Math.floor(Math.random()*4 + 1);          // these are four colors

        if(currentLightCounter >= selectedLights.length){
            currentLightCounter = 0;
        }


        for(var i = 0; i < selectedLights.length; i++){
            selectedLights[i].className =  (i == currentLightCounter) ? randomColorClass : "word selected";
        }

        currentLightCounter++;


    }, 500);
}


//test - runs through every minute on the clock, updating every 500 seconds

function test(){

    TEST_TIME = new Date();

    var min = 0;

    var countdown = setInterval(function(){
        
        TEST_TIME.setMinutes(min);
        min++;
        min = (min == 59) ? 0 : min;

    }, 500);   
}

