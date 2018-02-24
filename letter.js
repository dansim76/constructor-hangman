var Letter = function(lett){

//a string value to store  underlying character for the letter
this.lett = lett;
//boolean value that stores whether the letter has been guessed
this.letterGuessed = false;
//function that returns underlying character if the letter has been guessed
this.checkLetterGuessed = function(){
if(letterGuessed = false){
	return lett;
}
else{
	return "_"
}
}


//function that takes character as an argument and check against the underlying character	
this.checkLetterArgument = function(){
if(this.lett === " " )
letterGuessed = true;

}




	



}
module.exports = Letter;