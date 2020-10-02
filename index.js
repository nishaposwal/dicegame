var first = Math.floor(Math.random() * 6) + 1;

var second = Math.floor(Math.random() * 6) + 1;

if (first > second) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (first < second) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Its a tie";

}

document.querySelector(".img1").setAttribute("src", "images/dice" + first + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + second + ".png");