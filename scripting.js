function generateRandom() {
    return 1 + Math.floor(Math.random()*100);
}

let count=document.getElementById("countGuess");
let guesses=5;


let random = generateRandom();

const para = document.createElement('p');

function showRandomForTesting() {
    para.textContent = `${random}`;
    document.body.appendChild(para);
}

showRandomForTesting();
para.textContent = "Testing: " + para.textContent;
let guessInput = document.getElementById('quantity');
let diff = Math.abs(random-guessInput.value);

function add1() {
    document.getElementById("quantity").stepUp(1);
}

function add5() {
    document.getElementById("quantity").stepUp(5);
}

function add10() {
    document.getElementById("quantity").stepUp(10);
}

function add25() {
    document.getElementById("quantity").stepUp(25);
    
}

function sub1() {
    document.getElementById("quantity").stepDown(1);
}

function sub5() {
    document.getElementById("quantity").stepDown(5);
}

function sub10() {
    document.getElementById("quantity").stepDown(10);
}

function sub25() {
    document.getElementById("quantity").stepDown(25);
}



function determine() {
    diff = Math.abs(random-guessInput.value);

    if (diff > 55) {
        return "Very Cold"; 
    } else if (diff <= 55 && diff >= 41) {
        return "Cold";
    } else if (diff <= 40 && diff >= 31) {
        return "Very Cool";
    } else if (diff <= 30 && diff >= 21) {
        return "Cool";
    } else if (diff <= 20 && diff >= 16) {
        return "Warm";
    } else if (diff <= 15 && diff >= 9) {
        return "Very Warm";
    } else if (diff <= 8 && diff >= 6) {
        return "Hot";
    } else if (diff <= 5) {
        return "Very Hot";
    }else if(guessInput.value==random){
        return "Correct";
    }
}

let commit = document.getElementById('commitbutton');
let guesslog = document.getElementById('guesslog');

commit.addEventListener('click', () => {
    guesses-=1;
    let num = guessInput.value;
    let status = determine();
    if(status="Correct"){
        gameWon();
    }
    if(guesses==0){
        gameOver();
        return 0;
    }
    count.textContent=`${(guesses)+" guesses"}`;


    let template = `
                <tr>
                    <td>${num}</td>
                    <td>${status}</td>
                </tr>
                    `;

    guesslog.innerHTML += template;
})

const resetBtn = document.getElementById("resetbutton");

function handleClick() {
    window.location.reload();
}
function gameOver(){
    let over=document.getElementById("gameOver");
    over.textContent=`${"Game Over. The correct guess is "+random}`;


}
function gameWon(){
    let over=document.getElementById("gameOver");
    over.textContent=`${"You've WON"}`;


}

resetBtn.addEventListener('click', handleClick);






