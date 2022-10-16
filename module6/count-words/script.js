// This script will run when the page is loaded
window.onload = () => {
  let result = countWords();
  console.log(result);
};

function countWords() {
  // The text variable contains the long string of words
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  // TODO: add code here to remove the periods and commas and transform all words to lowercase letters
  const regex = /\w+/g;
  const words = [...text.matchAll(regex)];


  // The wordArray array will contains a key value pair for words and their occurences in the text
  //const wordArray = text.split(" ");

  const counters = words.reduce( (prev, curr) => {
    let candidate = curr[0].toLowerCase();
    candidate in prev ? prev[candidate]++ : prev[candidate] = 1;
    return prev;
  }, {});

  // This loop goes through the wordArray and creates the key value pair objects
  // const wordCount = {};
  // wordArray.forEach((item) => {
  //   if (wordCount[item] == null) wordCount[item] = 1;
  //   else {
  //     wordCount[item] += 1;
  //   }
  // });

  // Turn objects into an array of arrays
  //let myArray = Object.entries(wordCount);

  // TODO: sort the arrays based on the count number and store the result in a variable called bArray

  let threeFrequent = [{word:'', cnt: 0}, {word:'', cnt:0}, {word:'', cnt:0}]
  for( let word in counters ) {
    if( counters[ word ] > threeFrequent[2].cnt ) {
      threeFrequent[2] = {word: word, cnt: counters[word]};
      threeFrequent.sort( (a,b) => b.cnt - a.cnt );
    }
  }
  // return the first three most common words.
  return threeFrequent;
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = countWords;
}
