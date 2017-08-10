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




    $("#master-toggle").on("mousedown", function(){
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

    $("#header").css("transform", "translateX(0%)");
    $("#bio").css("visibility", "visible");
    $(".section").show();
    $("body").css("background", "#feffdb");
    $("#subheader").hide();

    $("#header").animate({
        "top": "5vh",
        "left": "5vw",
        "font-size": "3em"
    }, 1000)

    setTimeout(function(){
        $("#bio").animate({
            opacity: 1
        }, 1000)
    },1000)

    $("#navbar").css("visibility", "visible").animate({
        opacity: 1
    }, 1000);

}

function switchIntroOff(){

    var size;

    $("#header").css("transform", "translateX(-50%)");
    $("#bio").css("visibility", "hidden");
    //$(".section").hide();
    $("body").css("background", "white");
    $("#subheader").show();

    if($(window).width() > 550){
        size = "4em";
    } else {
        size = "2em";
    }

    $("#header").animate({
        "font-size": size,
        "top": "30vh",
        "left": "50vw"
    }, 1000)




    $("#navbar").css("visibility", "visible").animate({
        opacity: 0
    }, 1000);


    $("#bio").animate({
        opacity: 0
    }, 1000)
    
}

function fadeSubOut(){
    $("#variable-header").animate({ opacity: 0 }, fadeTime/10);
}


function fadeSubIn(){
        $("#variable-header").animate({ opacity: 1 }, fadeTime/10);
}