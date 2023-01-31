
var randomNo1 = Math.floor(Math.random()*6) + 1;

var randomDiceImg1 = "dice" + randomNo1 + ".png";
var randomImageSource1 = "images/"+ randomDiceImg1;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNo2 = Math.floor(Math.random()*6) + 1;

var randomDiceImg2 = "dice" + randomNo2 + ".png";
var randomImageSource2 = "images/"+ randomDiceImg2;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNo1 > randomNo2)
{
  document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if(randomNo1< randomNo2) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
}
else{
    document.querySelector("h1").innerHTML = "Draw ";
}
