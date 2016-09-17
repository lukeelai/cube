var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 50;
var x = 50;
var y = 5;
var dx = 2;
var dy = -2;

function drawRect() {
    ctx.beginPath();
    ctx.rect(x, y, radius, radius);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect();
    
    if(x + dx > canvas.width-radius || x + 50 < radius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-radius || y + 50 < radius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);
