/* code for play button */
let titleCard = document.querySelector(".titlescreen")
let startButton = document.querySelector(".playbutton")
let screenOne = document.querySelector(".promptone")

/* play */
startButton.onclick = function() {
  screenOne.style.display = "block";
  titleCard.style.display = "none";
}

/* crime scene */
let crimeScene = document.querySelector(".crimescene")
let yesLetter = document.querySelector(".acceptletter")
let noLetter = document.querySelector(".denyletter")
let buttonCrime = document.querySelector(".optionone")

buttonCrime.onclick = function() {
  crimeScene.style.display = "block";
  screenOne.style.display = "none";
}

/* beat up civilians */
let civilianEnd = document.querySelector(".endcivilian")
let buttonCivilian = document.querySelector(".optiontwo")

buttonCivilian.onclick = function() {
  screenOne.style.display="none";
  civilianEnd.style.display="block";
}

let restartButton = document.querySelector(".restart")
restartButton.onclick = function() {
  screenOne.style.display="block";
  civilianEnd.style.display="none";

let denyLetter = document.querySelector(".denyletter")
  denyLetter.onclick = function () {
    civilianEnd.style.display="block";
    crimeScene.style.display="none";
  }
  
}

let acceptLetter = document.querySelector(".yesdude")
let acceptScreen = document.querySelector(".letteraccept")
 acceptLetter.onclick = function() {
   acceptScreen.style.display="block";
   crimeScene.style.display="none";
 }
let restart1 = document.querySelector(".restart1")
restart1.onclick = function (){
  screenOne.style.dispplay="block";
  acceptscreen.style.display="none";
  
}