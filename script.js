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
