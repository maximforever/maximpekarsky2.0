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

    //switchIntroOn();            // start with full website;

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

    var TGFCounter = 1;
    var HTSCounter = 1;

    setInterval(function(){

        var images = ["0.gif", "1.gif", "2.gif", "3.gif","4.gif"]
        var randomBackground = images[TGFCounter];
        var newBg = "url('assets/gifs/theygotfit/" + randomBackground + "') no-repeat center center"

        $("#theygotfit-screens").css("background", newBg);
        $("#theygotfit-screens").css("background-size", "contain");


        if((TGFCounter+1) >= images.length){
            TGFCounter = 0;
        } else {
            TGFCounter++;
        }


    }, 4000);

    setInterval(function(){

        var images = ["0.gif", "1.gif", "2.gif"]
        var randomBackground = images[HTSCounter];
        var newBg = "url('assets/gifs/heartheirside/" + randomBackground + "') no-repeat center center"

        $("#heartheirside-screens").css("background", newBg);
        $("#heartheirside-screens").css("background-size", "contain");


        if((HTSCounter+1) >= images.length){
            HTSCounter = 0;
        } else {
            HTSCounter++;
        }


    }, 4000);




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
    $("#header").css("text-align", "left");
    $("#bio").css("visibility", "visible");
    $(".section").show();
    $("body").css("background", "#feffed");
    $("#subheader").hide();

    $("#header").animate({
        "top": "5vh",
        "left": "5vw",
        "font-size": "3.5em"
    }, 1000)

    $("#navbar").animate({
        "top": "80vh"
    }, 1000)

    $("#toggle-section").animate({
        "top": "90vh"
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
    $("#header").css("text-align", "center");
    $("#bio").hide();
    $("body").css("background", "white");
    $("#subheader").show();

    if($(window).width() > 550){
        size = "4em";
    } else {
        size = "3em";
    }

    $("#header").animate({
        "font-size": size,
        "top": "30vh",
        "left": "50vw"
    }, 1000)

    $(".section").not("#intro").hide();


    $("#navbar").css("visibility", "visible").animate({
        opacity: 0,
        "top": "80vh"
    }, 1000);

    $("#toggle-section").animate({
        "top": "75vh"
    }, 1000)


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















