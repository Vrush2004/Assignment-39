const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";

function renderBoard(){
    const allBoxes = document.querySelectorAll('.box');
    
    allBoxes.forEach((boxElement, i) => {
        if(board[i] === 'O'){
            boxElement.innerHTML = '<img src="./images/o.png" height="50px">';
        }else if(board[i] === 'X'){
            boxElement.innerHTML = '<img src="./images/x.png" height="50px">';
        }else{
            boxElement.innerHTML = '';
        }
    })
}
renderBoard()

function selectBox(boxNumber){
    if(board[boxNumber] !== -1){
        alert("Invalid Move...")
        return;
    }
    board[boxNumber] = currentPlayer;
    renderBoard();

    if(currentPlayer === "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }

    const currentPlayerEle = document.getElementById("currentPlayer");
    currentPlayerEle.innerText = currentPlayer;

    checkForWinner()
}

function resetBoard(){
    board.fill(-1);
    renderBoard();

    currentPlayer = 'X';
    const currentPlayerEle = document.getElementById("currentPlayer");
    currentPlayerEle.innerText = currentPlayer;
}

function checkForWinner(){
    
}