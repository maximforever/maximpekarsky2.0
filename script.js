$(document).ready(main);

var introCounter = 0;
var introOptions = [
    "with code",
    "with music",
    "with people"
];

var fadeTime = 4000;
var switchOn = false;


function main(){
    console.log("script.js is running");

    setInterval(function(){
        fadeSubIn(); 
        setTimeout(function(){
            introCounter++;
            fadeSubOut();
            if(introCounter > 2){
                introCounter = 0
            }

        }, fadeTime*0.8)
        
        $("#variable-header").text(introOptions[introCounter]);

    }, fadeTime)




    $("#master-toggle").on("click", function(){
        console.log("switch on is: " + switchOn);

        if(switchOn){         
            $("#switch").animate({ "left": "5%" }, 350);
            $("#light").css("border", "1px solid black");
            $("#light").removeClass("on");
            switchIntroOff();
            switchOn = false;

        } else {
            $("#switch").animate({ "left": "55%" }, 350);
            $("#light").css("border", "0px solid black");
            $("#light").addClass("on");
            switchIntroOn();
            switchOn = true;
        }

    });
}


function switchIntroOn(){
/*
    $("#header").animate({
        "padding-top": "5vh",
        "font-size": "3em"
    }, 1000)

    $("#header").css("text-align", "left");
    $("#bio").show();
    $("#navbar").show();
*/

     $(".section").show();

    $("body").css("background", "#feffdb");
    
    $("#navbar").animate({
        opacity: 1
    }, 1000);


    $("#subheader").hide();

}

function switchIntroOff(){

    $("body").css("background", "white");

    $("#header").animate({
        "padding-top": "30vh",
    }, 1000)


    $("#subheader").show();
     $("#header").css("text-align", "center ");


    $("#bio").hide();


    $("#navbar").animate({
        opacity: 0
    }, 1000);
}

function fadeSubOut(){
    $("#variable-header").animate({ opacity: 0 }, fadeTime/10);
}


function fadeSubIn(){
        $("#variable-header").animate({ opacity: 1 }, fadeTime/10);
}