var timerNumber = document.querySelector("#timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var blankWord = document.querySelector("#blank-word");
var startBtn = document.querySelector("#start-button");

var winCounter = 0;
var lossCounter = 0;
var timer;

var lettersInWord = [];
var blankLetters = [];

var possibleWords = ["Bigfoot", "Tower", "Jefferson", "Alpha", "Hydroponic"];