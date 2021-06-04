//Predict what the following code will print out:

let phrase = "that's all folks";
console.log(phrase[phrase.length]);               // undefined
console.log(phrase[phrase.length - 1]);           //  s
console.log(phrase[phrase.length - 2]);           //  k

const i = 9;
const char = phrase[i];                          // char is i which is 9 so its 9 index from phrase
console.log(char);                               //l
console.log(phrase.indexOf(char));               //8
console.log(phrase.slice(2,8));                  // at's a            2,8 its 2 to 8 not 2 & 8       8 is not included

console.log("abcdefg".slice(1,3));                // bc      3 is not included
console.log("abcdefg".slice(2));                  // cdefg        
console.log("abcdefg".slice(4));                  // efg
console.log("abcdefg".slice(2, -1));              // cdef     -1 not included
console.log("abcdefg".slice(2,-2));               //cde       -2 not included




