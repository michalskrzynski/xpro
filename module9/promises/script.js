function one() {
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log(1);
      resolve();
    },5000);
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
    }, 500);
  });
}


//ex 1

// one()
//   .then(two)
//   .then(three)
//   .then( () => {console.log('all done');}); 

// console.log('Yeah!');


//ex 2

// const withAwait = async () => {

//   await one();
//   await two();
//   await three();

// }

// withAwait();


const withAwaitAll = async () => {
  Promise.all(
  [ one(), two(), three() ]
  )
};

withAwaitAll();