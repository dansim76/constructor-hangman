var Letter = require(".letter.js")

var Word = function(word){
var that = this;

this.letterArr = []
this.word = word
this.wordFound = false;


//function that takes the letter from letter js and puts in a word
  this.arrayGen = function() {
        for (var i = 0; i < word.length; i++) {
            var newLetter = new Letter(word[i]);
            this.letterArr.push(newLetter);
        };
    };

 //function that takes the word length and making the string    
    this.stringGen = function() {
       
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.letterArr[i].checkLetterArgument() + " ";
        };
        console.log(wordString);
        if (wordString.indexOf("_") === -1) {
            this.wordFound = true;
        }
    };

    //function that takes 
    this.onGuess = function(guess) {
        
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].checkLetterGuessed(guess);
        };
        this.stringGen();
    };



}
module.exports = Word;