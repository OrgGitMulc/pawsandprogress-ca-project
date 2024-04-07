/**
 * Global Variables
 */

let start_btn = document.getElementById('start_btn');
let ans_area = document.getElementById('ans_area');

//Imgs
let pug = document.getElementById('pug');
let dasc = document.getElementById('dasc');
let jack = document.getElementById('jack');

var guess = 0;

/**
 * Event Listeners
 */

start_btn.addEventListener('click', function () {
    console.log('Start Game!!!');
    // start_btn.classList.add('hidden');
    var question = start_game();
    console.log(question);
    ans_area.classList.remove('hidden');

});

function start_game(){
    var q = Math.floor(Math.random() * 3);
    if (q == 0){
        pug.classList.remove('hidden');
        console.log('Pug Question', q);
    } else if (q == 1){
        dasc.classList.remove('hidden');
        console.log('Daschund Question', q);
    } else if (q == 2){
        jack.classList.remove('hidden');
        console.log('Jack Russell Question', q);
    } else {
        console.log('Error!')
    }

    return q;
}

function game_logic(q_num,guess_num){
    q_num = question;
    guess_num = guess;
}

//About Us page
function setNewImageDogs()
      {document.getElementById("happydogs").src="../media/images/happydogs_speech.jpg";}
      
function setOldImageDogs()
      {document.getElementById("happydogs").src="../media/images/happydogs.jpg";}

//Calendar page - play
function setNewImagePlay()
      {document.getElementById("play").src="../media/images/play_new.jpg";}
      
function setOldImagePlay()
      {document.getElementById("play").src="../media/images/play_old.jpg";}

      //Calendar page - training
function setNewImageTrain()
      {document.getElementById("train").src="../media/images/training_new.jpg";}
      
function setOldImageTrain()
      {document.getElementById("train").src="../media/images/training_old.jpg";}

//Calendar page -eating
function setNewImageEat()
      {document.getElementById("eat").src="../media/images/eat_new.jpg";}
      
function setOldImageEat()
      {document.getElementById("eat").src="../media/images/eat_old.jpg";}

//Calendar page - sleeping
      function setNewImageSleep()
      {document.getElementById("sleep").src="../media/images/sleep_new.jpg";}
      
function setOldImageSleep()
      {document.getElementById("sleep").src="../media/images/sleep_old.jpg";}