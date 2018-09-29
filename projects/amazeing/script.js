$("#toggle").on("click", function(){
    console.log("click!");
    $("body").toggleClass("dark-background");
});


var player= {
    x: 3,
    y: 4,
    hp: 100
}


function drawScreen(){

    $("#board").empty();

    for(var row=0; row<8; row++){

        $("#board").append("<div class='row'></div>");

        for(var column=0; column<8; column++){
            $(".row").last().append("<div class='square' data-x='" + column + "' data-y='" + row + "'></div>");

            if(player.x == column && player.y == row){
                $("[data-x='" + column + "'][data-y='" + row + "']").append("<div id = 'player'></div>");
            }

        } 
    }
}

drawScreen();



// key listeners
 
$("body").on("keyup",function(event){
    //console.log(event.keyCode);

    if(event.keyCode==87){
        
        if((player.y - 1) >= 0){
            player.y--;
        }
    }

    if(event.keyCode==83){
        
        if((player.y + 1) <= 7){
            player.y++;
        }
     
    }

    if(event.keyCode==68){


        if((player.x + 1) <= 7){
            player.x++;
        }

    }

    if(event.keyCode==65){

        if((player.x - 1) >= 0){
            player.x--;
        }
        
    }



    drawScreen();



})


// rows are Ys, columns are Xs