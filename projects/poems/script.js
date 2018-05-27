$(document).ready(main);

var poems;

var triggerEvent = "click";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    triggerEvent = "touchstart";
} 


function main(){
    console.log("script.js is running");

    getPoemsFromReddit();


    $("body").on(triggerEvent, ".toggle-right", function(){
        nextPoem();
    });

    $("body").on(triggerEvent, ".toggle-left", function(){
        previousPoem();
    });

    $("body").on(triggerEvent, "#random", function(){
        randomPoem();
    });
 
}


function init(){
    getPoemsFromReddit();

}


function nextPoem(){
    currentIndex = (currentIndex == poems.length -1) ? 0 : currentIndex + 1;
    console.log(currentIndex);
    displayPoem(poems[currentIndex]);
}


function previousPoem(){

    currentIndex = (currentIndex == 0) ? poems.length - 1 : currentIndex - 1;
    console.log(currentIndex);
    displayPoem(poems[currentIndex]);
}

function randomPoem(){

    var randomIndex = Math.floor(Math.random()*poems.length);
    currentIndex = randomIndex;
    displayPoem(poems[currentIndex]);
}

function getPoemsFromReddit(){
    $.ajax({
        type: "get",
        url: "https://www.reddit.com/user/Poem_for_your_sprog.json?limit=1000",
        success: function(response){

            console.log(response.data.children);
            poems = response.data.children;
            currentIndex = 0;
            displayPoem(poems[currentIndex]);
        }
    });
}

function displayPoem(poem){

    $(".poem").css("display", "flex");

    thisPoem = poem.data;

    var content = document.createElement('span');
    content.innerHTML = thisPoem.body_html.toString();

    // wtf.
    $("#poem-body").empty().append($.parseHTML(content.innerHTML)[0].data);

    $("#current-count").text(currentIndex + 1);
    $("#total-count").text(poems.length);
    $("#poem-link").attr("href", "https://www.reddit.com" + thisPoem.permalink)

}






