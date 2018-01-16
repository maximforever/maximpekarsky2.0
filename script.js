$(document).ready(main);

var introCounter = 1;
var introOptions = [
    "with code",
    "with music",
    "with people"
];

var fadeTime = 4000;
var switchOn = false;

$("#variable-header").text(introOptions[0]);


function main(){
    console.log("script.js is running");

    //     switchIntroOn();            // start with full website;

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

    var QRLCounter = 1;
    var TGFCounter = 1;
    var HTSCounter = 1;
    var hacktermsCounter = 1;
    var ExperimentCounter = 1;

    

    setInterval(function(){

        var images = ["0.gif", "1.gif", "2.gif", "3.gif"]
        var randomBackground = images[hacktermsCounter];
        var newBg = "url('assets/gifs/hackterms/" + randomBackground + "') no-repeat center center"

        $("#hackterms-screens").css("background", newBg);
        $("#hackterms-screens").css("background-size", "contain");


        if((hacktermsCounter+1) >= images.length){
            hacktermsCounter = 0;
        } else {
            hacktermsCounter++;
        }


    }, 4000);

    setInterval(function(){

        var images = ["0.gif", "1.gif", "2.gif", "3.gif"]
        var randomBackground = images[QRLCounter];
        var newBg = "url('assets/gifs/qrl/" + randomBackground + "') no-repeat center center"

        $("#qrl-screens").css("background", newBg);
        $("#qrl-screens").css("background-size", "contain");


        if((QRLCounter+1) >= images.length){
            QRLCounter = 0;
        } else {
            QRLCounter++;
        }


    }, 4000);

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

    setInterval(function(){

        var images = ["0.gif", "1.gif", "2.gif"]
        var randomBackground = images[ExperimentCounter];
        var newBg = "url('assets/gifs/experiments/" + randomBackground + "') no-repeat center center"

        $("#experiment-screens").css("background", newBg);
        $("#experiment-screens").css("background-size", "contain");


        if((ExperimentCounter+1) >= images.length){
            ExperimentCounter = 0;
        } else {
            ExperimentCounter++;
        }


    }, 4000);




    $("#master-toggle").on("mousedown", function(){
        console.log("switch on is: " + switchOn);

        if(switchOn){         
            switchIntroOff();
        } else {
            switchIntroOn();
        }

    });

    $(".navigation").on("click", ".nav-link", function(event){
        event.preventDefault();

        console.log($($.attr(this, 'href')).offset().top);

        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top - 50)
        }, 1000);
    });

}




function switchIntroOn(){

    var size;
    var margin;
    var marginLeft;
    var topSize;    

    /* update the toggle */

    $("#switch").animate({ "left": "55%" }, 350);
    $("#light").css("border", "0px solid black");
    $("#light").addClass("on");
    switchOn = true;


    $(".navigation").css("visibility", "visible");
    $(".navigation").css("margin-top", "-3em");

    $(".navigation").animate({
        "margin-top": "0em"
    }, 1000)




    if($(window).width() > 768){
        size = "3em";
        topSize = "3vh"
    } else {
        size = "2em";
        topSize = "3vh"
    }

    if($(window).width() > 550){
        margin = "33vw";
        marginLeft = "0vw";
    } else {
        margin = "16vw";
        marginLeft = "3vw";
    }



    $("#header").css("text-align", "left");
    $("#header").css("margin-left", margin);

    $("#bio").css("display", "block");
    $(".section").show();
    $("#intro-wrapper").css("background", "linear-gradient(#feffed 80%, #ffffff)");
    $("#subheader").hide();

    $("#header").animate({
        "top": topSize,
        "margin-left": marginLeft,
        "font-size": size
    }, 1000)

    $("#navbar").animate({
        "margin-left": "0vw"
    }, 1000)

    setTimeout(function(){
        $("#bio").animate({
            opacity: 1
        }, 1000)
    },1001)



    $("#navbar").css("visibility", "visible").animate({
        opacity: 1
    }, 1000);


    // load up soundcloud links after all the animations, so it doesn't cause animation performance issues or throw console errors because the section is hidden

    setTimeout(function(){
        $("#music-run").append('<iframe width = "100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54080943&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
        $("#music-flatlander").append('<iframe width = "100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76059285&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
        $("#music-fortinbras").append('<iframe width = "100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85694698&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    }, 1500);

}

function switchIntroOff(){

    var margin;
    var size;


    /* update the toggle*/

    $("#switch").animate({ "left": "5%" }, 350);
    $("#light").css("border", "1px solid black");
    $("#light").removeClass("on");
    switchOn = false;

    $(".navigation").animate({
        "margin-top": "-3em"
    }, 1000)

    
    if($(window).width() > 768){
        size = "4em";
    } else {
        size = "3em";
    }

    if($(window).width() > 550){
        margin = "33vw";
    } else {
        margin = "16vw";
    }

    $("#header").animate({
        "font-size": size,
        "top": "30vh",
        "margin-left": margin
    }, 1000)

    setTimeout(function(){
        $("#header").css("margin-left", "0vw");
        $("#header").css("text-align", "center");
        $("#navbar").css("visibility", "hidden");
        $(".navigation").css("visibility", "hidden");
    }, 1050)


    $("#bio").hide();
    $("#intro-wrapper").css("background", "white");
    $("#subheader").show();

    $(".section").not("#intro").hide();


    $("#navbar").css("visibility", "visible").animate({
        opacity: 0
    }, 1000);

    $("#toggle-section").animate({
        "top": "75vh"
    }, 1000)


    $("#bio").animate({
        opacity: 0
    }, 1000)

    $("#music-run").empty();
    $("#music-flatlander").empty();
    $("#music-fortinbras").empty();
    
}

function fadeSubOut(){
    $("#variable-header").animate({ opacity: 0 }, fadeTime/10);
}


function fadeSubIn(){
        $("#variable-header").animate({ opacity: 1 }, fadeTime/10);
}















