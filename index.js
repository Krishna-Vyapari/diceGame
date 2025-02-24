function diceValue1() {
    if (randomVariable1 == 1) {
        var result = "./images/dice1.png" ;
    }else  if (randomVariable1 == 2) {
        var result = "./images/dice2.png ";
    }else     if (randomVariable1 == 3) {
        var result = "./images/dice3.png " ;
    }else    if (randomVariable1 == 4) {
        var result = "./images/dice4.png" ;
    }else    if (randomVariable1 == 5) {
        var result = "./images/dice5.png" ;
    }else {
        var result = "./images/dice6.png" ;
    }
    return result;
}
function diceValue2() {
    if (randomVariable2 == 1) {
        var result2 = "./images/dice1.png" ;
    }else  if (randomVariable2 == 2) {
        var result2 = "./images/dice2.png ";
    }else     if (randomVariable2 == 3) {
        var result2 = "./images/dice3.png " ;
    }else    if (randomVariable2 == 4) {
        var result2 = "./images/dice4.png" ;
    }else    if (randomVariable2 == 5) {
        var result2 = "./images/dice5.png" ;
    }else {
        var result2 = "./images/dice6.png" ;
    }
    return result2;
}
function winner(){
    if (randomVariable1 == randomVariable2) {
        document.querySelector("h1").innerHTML = "DRAW!";
    }else if (randomVariable1 > randomVariable2) {
        document.querySelector("h1").innerHTML = "PLAYER 1 WINS THIS GAME!";
    }else {
        document.querySelector("h1").innerHTML = "PLAYER 2 WINS THIS GAME!";
    }
}

var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
var value = diceValue1(randomVariable1);
var value2 = diceValue2(randomVariable2);
document.querySelector(".img1").setAttribute("src", value);
document.querySelector(".img2").setAttribute("src", value2);
winner(randomVariable1, randomVariable2);