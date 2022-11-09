let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  const target = document.getElementById('target');

  for( let i = 1; i <= gridSize; i++ ) {
    let div = document.createElement('div');
    div.setAttribute('id', 'd' + i);
    div.innerText = i;
    target.appendChild( div );
  }
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
}

function move() {
  if( position > 1 ) toggle( position-1 )
  toggle( position++ );
  if( position > 1 && position <= gridSize+1 ) setTimeout( move, 100 );
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
}

function toggle(position) {
  if( position < 1 || position > gridSize ) return 0;

  id = 'd'+position;
  let div = document.getElementById( id );
  div.classList.toggle( 'on' );
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  // If a position of less than 1 is passed into the function, return 0 as the grid positions only go from 1 to 100
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}
