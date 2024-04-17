/**
 * Global Variables
 */

let start_btn = document.getElementById('start_btn');
let ans_area = document.getElementById('ans_area');

//imgs
let pug = document.getElementById('pug');
let dasc = document.getElementById('dasc');
let jack = document.getElementById('jack');

//btns
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

//results
let right = document.getElementById('right_blurb');
let wrong = document.getElementById('wrong_blurb');

var guess = 0;
var question = Math.floor(Math.random() * 3);

/**
 * Event Listeners
 */

//event listener to start coupon game
start_btn.addEventListener('click', function () {
    console.log('Start Game!!!');
    start_game(question);
    if (question == 0){
        document.getElementById('img-row-1').classList.toggle('fade');
    } else if (question == 1){
        document.getElementById('img-row-2').classList.toggle('fade');
    } else if (question == 2){
        document.getElementById('img-row-3').classList.toggle('fade');
    }
    console.log(question);
});


//Guess btn event listners for the coupon game
ans1.addEventListener('click', function () {
    guess = 0;
    console.log('Guess # '+guess);
    console.log('Question # '+question);
    game_logic(question, guess);
});

ans2.addEventListener('click', function () {
    guess = 1;
    console.log('Guess # '+guess);
    console.log('Question # '+question);
    game_logic(question, guess);
});

ans3.addEventListener('click', function () {
    guess = 2;
    console.log('Guess # '+guess);
    console.log('Question # '+question);
    game_logic(question, guess);
    
});

/** 
 * This function starts the game by revealing relvant elements.
 * Using boostrap classes d-none & d-block for img hidding as hidden css class disrupts positioning
*/ 
function start_game(question){
    start_btn.classList.add('hidden');
    if (question == 0){
        pug.classList.remove('d-none');
        pug.classList.add('d-block');
    } else if (question == 1){
        dasc.classList.remove('d-none');
        dasc.classList.add('d-block');
    } else if (question == 2){
        jack.classList.remove('d-none');
        jack.classList.add('d-block');
    } else {
        console.log('Error!')
    }
    ans_area.classList.remove('hidden');
}

//core func of the game compares guess var to question var to see if user answered correctly
function game_logic(q_num,guess_num){
    if (q_num == 0){
        if (guess_num == 0){
            console.log('Correct!!!');
            right.classList.remove('hidden');
        } else {
            console.log('Incorrect!!!');
            wrong.classList.remove('hidden');
        }
    } else if (q_num == 1){
        if (guess_num == 1){
            console.log('Correct!!!');
            right.classList.remove('hidden');
        } else {
            console.log('Incorrect!!!');
            wrong.classList.remove('hidden');
        }
    } else if (q_num == 2){
        if (guess_num == 2){
            console.log('Correct!!!');
            right.classList.remove('hidden');
        } else {
            console.log('Incorrect!!!');
            wrong.classList.remove('hidden');
        }
    } else {
        console.log("There's been a terrible error!!!");
    }
    ans_area.classList.add('hidden');
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

//Home page
function setNewImageGSD()
{document.getElementById("gsd").src="../media/images/gsd_new.jpg";}

function setOldImageGSD()
{document.getElementById("gsd").src="../media/images/gsd_old.jpg";}

//Contact page
function setNewImageOurTrainers()
{document.getElementById("gsd").src="../media/images/trainer_new";}

function setOldImageOurTrainers()
{document.getElementById("gsd").src="../media/images/trainer_old.jpg";}