//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str)=>str.split("").reverse().join(""),

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups:(arr)=>arr.filter((e,i)=> i === arr.indexOf(e)),

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt:(str)=>str.split(" ").map(e=>e[0].toUpperCase() + e.slice(1)).join(" "),

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter:(str)=>str.toLowerCase().match(/[aeiou]/g).length,

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime:(num)=> {
    if(num < 1) return false;
    for(let i = num - 1; i > 1; i--) {
      if(!(num%i)) return false
    }
    return true
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo:'1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1:'Hello World',
  log2:undefined
}
