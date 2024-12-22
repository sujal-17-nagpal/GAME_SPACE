const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#but");

let turnO = true;
let winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = 'X';
            turnO = false;
        } else {
            box.innerText = 'O';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


const checkWinner = () =>{
    for(let pattern of winArr) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
    // console.log(pos1val);
    // console.log(pos2val);
    // console.log(pos3val);
    if(pos1val != "" && pos2val != "" && pos3val!="") {
        if(pos1val === pos2val && pos2val === pos3val) {
            console.log("winner = ",pos1val);
            alert(`winner = ${pos1val}`);
        }
    }}
}

resetbtn.addEventListener("click",()=> {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
})


