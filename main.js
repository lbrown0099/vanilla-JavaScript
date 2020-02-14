
window.addEventListener('load', init);

//globals
let time = 6;
let score =0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  //Initialize Game
  function init() {      
    //load word from array
    showWord(words);
    //start matching word input to word displayed from array
    wordInput.addEventListener('input', startMatch);

    //call countdown every second
    setInterval(countdown, 1000);
    //send parameter of 50 miliseconds to the checkStatus function
    setInterval(checkStatus, 50);      
  }

//start match
function startMatch() {
    if(matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score++;
    }

    if (score === -1) {
    scoreDisplay.innerHTML = 0;
    } else {
    scoreDisplay.innerHTML = score;
    }
    
  }

  //getting input from DOM elements wordInput and currentWord
  function matchWords() {
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
  }

  //pick and show ransdom word
  function showWord(words) {
      //generate an array index
      const randIndex = Math.floor(Math.random() * words.length);
      //output random word
      currentWord.innerHTML = words[randIndex];

  }

  //countdown timer
  function countdown() {
      //Make sure time has not run out
      if(time > 0){
          time--;
      } else if(time === 0) {
          isPlaying = false;
      }
     timeDisplay.innerHTML = time;
  }

  //chack game status
  function checkStatus() {
      if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
      }
  }