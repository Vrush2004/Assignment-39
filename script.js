const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";

function renderBoard(){
    const allBoxes = document.querySelectorAll('.box');
    
    allBoxes.forEach((boxElement, i) => {
        if(board[i] === 'O'){
            boxElement.innerHTML = '<img src="./images/o.png" class="img">';
        }else if(board[i] === 'X'){
            boxElement.innerHTML = '<img src="./images/x.png" class="img">';
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

function isPlayerPresent(places, player){
    let result = true;
    places.forEach((place) => {
        if(board[place] != player){
            result = false;
        }
    })
    return result;
}

function checkForWinner(){
    if(isPlayerPresent([0,1,2], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([3,4,5], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([6,7,8], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([0,3,6], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([1,4,7], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([2,5,6], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([0,4,8], "O")){
        alert("Player O wins");
    }else if(isPlayerPresent([2,4,6], "O")){
        alert("Player O wins");
    }

    if(isPlayerPresent([0,1,2], "X")){
        alert("Player x wins");
    }else if(isPlayerPresent([3,4,5], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([6,7,8], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([0,3,6], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([1,4,7], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([2,5,6], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([0,4,8], "X")){
        alert("Player X wins");
    }else if(isPlayerPresent([2,4,6], "X")){
        alert("Player X wins");
    }
}