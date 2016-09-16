var canvas = document.getElementById("myCanvas");
var cxt= canvas.getContext("2d");
var myCube;
var x = 50;
var y = 550;

cxt.rect(x,y,50,50);
cxt.stroke();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	x += 100;
        y -= 100;
        cxt.rect(x,y,50,50);
		cxt.stroke();
    } 
} 
