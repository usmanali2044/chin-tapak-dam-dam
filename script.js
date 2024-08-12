

let questions = document.querySelector(".questions");



let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score =0;
}

let scorediv = document.querySelector(".score");



const input = document.querySelector(".input");

const form = document.querySelector("#form");


let subhaanwow = document.querySelector(".dam-dam");

let userAns;
let correctAns;
generatequestions();

form.addEventListener("submit",function(event){
    event.preventDefault();
   
     userAns = +input.value;
    if(userAns===correctAns){

        score+=10;
        checkans();
        
    }

    else{
        score-=10;
        checkans();
    }
    updateLocalStorage();
    scorediv.innerText = `score : ${score}`;

    generatequestions();
   
})

function checkans(){
    if(userAns===correctAns){
        subhaanwow.innerText = `Yeh le tahlka omelet`;
        let audio  =  new Audio("audio1.mp3");
        audio.play();
    }
    else{
        subhaanwow.innerText= `Ye kya bawaseer hai`;
        let audio2 = new Audio("audio2.mp3");
        audio2.play();
    }
    
}




function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

updateLocalStorage();






function generatequestions(){
    const num1 = Math.ceil(Math.random()*10);
    const num2 = Math.ceil(Math.random()*10);
     correctAns = num1*num2;
    questions.innerText = `What is ${num1} multiply by ${num2}? `;
}
