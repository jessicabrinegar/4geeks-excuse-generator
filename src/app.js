/* eslint-disable */
import "bootstrap";
import "./style.css";

//chose random # between 0 and maxValue
function randInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}
//choose random instance from array
function chooseRandom(arr) {
  let randomIndex = randInt(arr.length);
  var choice = arr[randomIndex];
  return choice;
}

let who = [
  "My roommate ",
  "My beloved grandmother ",
  "My boss ",
  "The neighborhood trash panda "
];
let action = ["ate ", "peed on ", "hid ", "stole "];
let what = ["my homework ", "the keys to my car ", "my car ", "my sanity "];
let when = [
  "before I came to class!",
  "right before I left for school!",
  "while I was watching Ted Lasso!",
  "so quickly I couldn't stop it!"
];

window.onload = function() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML =
    chooseRandom(who) +
    chooseRandom(action) +
    chooseRandom(what) +
    chooseRandom(when);
};
