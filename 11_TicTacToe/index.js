const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');
const h1 = document.getElementsByTagName('h1');
const rstbtn = document.getElementById('rstbtn');

let currentPlayer = "X";
let count = 0;

let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function startGame(e){
    if(e.target.className !== "ticTac"){
        if(e.target.innerText === ""){
            e.target.textContent = currentPlayer;
            count++;
            winner();
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }

        if(count === 9){
            h1[0].innerText = `DRAW GAME`;
        }
    }
}

ticTac.addEventListener('click', startGame);
  
function winner(){
    winningCondition.forEach((item) => {
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];

        let val0 = boxes[index0].innerText;
        let val1 = boxes[index1].innerText;
        let val2 = boxes[index2].innerText;

        if(val0 !== '' && val1 !== '' && val2 !== ''){
            if(val0 === val1 && val0 === val2){
                boxes[index0].classList.add("winnerClass");
                boxes[index1].classList.add("winnerClass");
                boxes[index2].classList.add("winnerClass");
                count = 0;
                h1[0].innerText = `Winner is ${val0}`;
                ticTac.removeEventListener('click', startGame);
            }
        }
    })
}

rstbtn.addEventListener('click', () => {
    currentPlayer = "X";
    h1[0].innerText = "TIC TAC TOE";
    boxes.forEach((item) => {
        item.classList.remove("winnerClass");
        item.innerText = '';
    })
    ticTac.addEventListener('click', startGame);
});