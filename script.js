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

start_btn.addEventListener('click', function () {
    console.log('Start Game!!!');
    start_game(question);
    console.log(question);
});

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

//using boostrap classes d-none & d-block for img hidding as hidden css class disrupts positioning
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
