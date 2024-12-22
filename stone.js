let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".msg-container");
const compS = document.querySelector("#comp-score")
const userS = document.querySelector("#user-score")

const getCompChoice = () => {
    const option = ["stone","paper","scissor"];
    const randomNo = Math.floor(Math.random()*3);
    return option[randomNo];
}

const draw = () => {
    message.innerText = " IT'S A DRAW ! PLAY AGAIN";
    console.log("draw");
    message.style.backgroundColor = "grey";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true) {
        message.innerText = ` YOU WON ! ${userChoice} beats ${compChoice} `;
        userScore++;
        userS.innerText = userScore;
        console.log(" YOU WON !");
        message.style.backgroundColor = "green";
    } else {
        message.innerText = `YOU LOST ! ${compChoice} beats ${userChoice}`;
        console.log(" YOU LOST !")
        compScore++;
        compS.innerText = compScore;
        message.style.backgroundColor = "#FF0000";
    }
}

const playgame = (userChoice) => {
    console.log("userChoice = ",userChoice)
    const compChoice = getCompChoice();
    console.log("compChoice = ",compChoice)
    if(userChoice === compChoice){
        draw();
    } else {
        let userWin = true;
        if((userChoice == "stone" && compChoice == "paper") || (userChoice == "paper" && compChoice == "scissor") || (userChoice == "scissor" && compChoice == "stone")) {
            userWin = false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        console.log("button was clicked", userChoice)
        playgame(userChoice)
    })
})