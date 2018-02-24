var inquirer = require("inquirer");
var Word = require("./word.js");
var letter = require("./letter.js");


var wordList =["school","javascript","bootcamp","constructor","character"]
var numGuesses = 7
var currentword
console.log("welcome to hangman v2");


function startGame(){
	this.reset();

	
	var chosenWord =""
	chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
	currentword = new Word(arrayGen)
	//letterInChosenword = chosenWord.split("");
	//numBlanks = letterInChosenword.length;
	blankAndSuccesses = [];
	wrongGuesses = [];



}

function reset(){
	this.numGuesses =7;
}


inquirer.prompt([
	{name:"guessLetter",
	message:"? Guess a letter!"
	}

	]).then(function(answers){
		var inputLetter = answers.guessLetter.toLowerCase();


	});
	if((this.numGuesses > 0) )


	if(letterInChosenWord.toString()=== blankAndSuccesses.toString()){
		console.log("you win")


		startGame();
	}
	else if (numGuesses === 0 ){
		console.log(" You lose");
		startGame();


	}

this.startGame();

