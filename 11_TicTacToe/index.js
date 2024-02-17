const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');

let currentPlayer = "X";

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

ticTac.addEventListener('click', (e) => {
    if(e.target.className !== "ticTac"){
        if(e.target.innerText === ""){
            e.target.textContent = currentPlayer;
            winner();
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
    }
});

function winner(){
    winningCondition.forEach((item) => {
        
    })
}