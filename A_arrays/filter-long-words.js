// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.


let filterLongWords = function (words) {
    let choosenWords = [];

    for (i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
        choosenWords.push(words[i]);
        }
    }

    return choosenWords;
};


console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
