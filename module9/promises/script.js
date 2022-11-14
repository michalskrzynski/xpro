function one() {
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log(1);
      resolve();
    },1000);
  });
}

function two() {
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log( 2 );
      resolve();
    }, 1000)
  });
}

function three() {
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log( 3 );
      resolve(); 
    }, 1000);
  });
}


one()
  .then(two)
  .then(three)
  .then( () => {console.log('all done');}); 