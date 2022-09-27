//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

function arrayFlattener( arr ) {
  let result = [];

  for(let i=0; i<arr.length; i++) {
    if( !Array.isArray(arr[i]) ) result.push( arr[i] )
    else {
      for(let j=0; j<arr[i].length; j++) result.push( arr[i][j] );
    }
  }

  return result;
}

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1,[2,3],4,5]))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}
