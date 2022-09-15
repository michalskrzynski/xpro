//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocityX = 50;
var velocityY = 20;
var reverseX = -1;
var reverseY = -1;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  positionX += velocityX*reverseX;
  ball.style.left = positionX + "px";

  positionY += velocityY*reverseY;
  ball.style.top = positionY + "px";

  if ( positionX > Xmax || positionX < Xmin ) reverseX *= -1;
  if ( positionY > Ymax || positionY < Ymin ) reverseY *= -1;
}

setInterval(moveBall, 100);
