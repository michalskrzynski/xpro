// No need to change the following code
// The area object defines the div in which the balls will be created
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// No need to change the following code
// The initialize function creates the area div on the Html page
function initialize() {
  area.element.style.width = area.width + 'px';
  area.element.style.height = area.height + 'px';
  document.body.appendChild(area.element);
}

// No need to change the following code
// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}

// No need to change the following code
// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
  }
}

// TODO: implement the create function
function create(color, dx, dy) {
  const newBall = {
    element: null,
    width: 40,
    height: 40,
    x: dx,
    y: dy,
    dx: 0,
    dy: 0
  }
  
  //Object.create(this);

  // TODO: Set newBall properties: dx, dy, width, height
  // HINT: Set the newBall's height and width each to 40
  

  // TODO: set the newBall.element property and initialize it to a Html element "div"
  newBall.element = document.createElement("div");

  // TODO: set the backgroundColor, width and height style properties for newBall.element
  newBall.element.style.backgroundColor = color;
  newBall.element.style.left = dx + "px";
  newBall.element.style.top = dx + "px";

  // This line set the CSS class for newBall.element. No need to change this line
  newBall.element.className += ' ball';

  // TODO: set the width and height of newBall based on newBall.element
  newBall.element.style.width = newBall.width + "px";
  newBall.element.style.height = newBall.height + "px";
  // Hint: use the Javascript parseInt() function to convert a string value to integer

  // TODO: use the Javascript appendChild() function to add newBall.element to the area element
  area.element.appendChild( newBall.element ); 
  return newBall;
}

// TODO: implement the update function
function update(ball, x, y) {
  ball.dx = x;
  ball.dy = y;

  changeDirectionIfNecessary( ball, ball.x + ball.dx, ball.y + ball.dy);

  // TODO: use the moveTo() function to move the ball
  ball.x = ball.x + ball.dx;
  ball.y = ball.y + ball.dy;
  moveTo(ball, ball.x, ball.y);
  // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms

  setTimeout( update, 16, ball, x, y);
  
}

// Uncomment these lines for step 1 of the activity
// This is expected to create 3 balls within the area div

initialize();
const ball1 = create('blue', 4, 3);
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);
moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

// Uncomment these lines for step 2 of the activity
// This is expected to make the 3 balls move around the area div

update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);

// Do not change code past this point
if (typeof module !== 'undefined') {
  module.exports = { update, create, changeDirectionIfNecessary, moveTo, area };
}
