var rand1 = Math.floor((Math.random()*6)+1);
var rand2 = Math.floor((Math.random()*6)+1);


if (rand1 > rand2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if (rand1 < rand2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Play again :)";
}

var randomImage1 = "./images/dice" + rand1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

var randomImage2 = "./images/dice" + rand2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);