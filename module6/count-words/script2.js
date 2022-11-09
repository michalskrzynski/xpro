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
  const words = text.toLowerCase().replace(',' , '').replace('.', '').split(" ");
  //const words = [...(text.toLowerCase()).matchAll(/\w+/g)]; //better solution, matches words, no need to think about punctuation

  // wordCount is a map containing pair like: word => its occurences
  const wordCount = {};

  // This loop goes through the words and creates the key value pair objects under wordCount
  words.forEach( (item) => wordCount[item] == null ? wordCount[item] = 1 : wordCount[item] += 1 );

  const myArray = Object.entries(wordCount);
  myArray.sort( (a, b) => b[1] - a[1] ); // thats because under [1] index there # occurences
  //https://www.w3schools.com/jsref/jsref_sort.asp

  const bArray = myArray.splice(0, 3);
  return bArray;
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = countWords;
}
