const board = ['O', -1, -1, -1, -1, -1, -1, -1, -1];

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