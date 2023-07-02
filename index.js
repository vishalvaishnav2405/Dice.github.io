var randomNumber1 = Math.floor(Math.random()*6 + 1);
var dicenumber = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dicenumber);


var randomNumber2 = Math.floor(Math.random()*6 + 1);
var dicenumber = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", dicenumber);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won !!!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Won !!!";
}
else{
    document.querySelector("h1").innerHTML = "🤝🏻 It's a Tie";
}
