var number = Math.random();
var randomNumber = Math.floor(number *6) + 1;
var randomDice = "dice" + randomNumber +".png"
var randomDiceimage = "./images/" + randomDice

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceimage);

var number2 = Math.random();
var randomNumber2 = Math.floor(number2 *6) + 1;
var randomDice2 = "dice" + randomNumber2 +".png"
var randomDiceimage2 = "./images/" + randomDice2

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceimage2);

if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}