const container = document.getElementById(`container`);

let numSquares = 16;
let squareSize = 640 / numSquares;

document.addEventListener('DOMContentLoaded', createGrid(16));

var btn = document.querySelector('#btn');
btn.addEventListener('click', resetGrid);

function createGrid(numSquares) {
    let squareSize = 640 / numSquares;
    container.style.display = `grid`;
    container.style.gridTemplateColumns = 'repeat(' + numSquares + ',' + squareSize + 'px)';

    for (i = 0; i < Math.pow(numSquares, 2); i++) {
        const sq = document.createElement(`div`);
        sq.classList.add(`square`);
        sq.style.height = squareSize + 'px';
        sq.style.width = squareSize + 'px';
        container.appendChild(sq);
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach (square => square.addEventListener('mouseenter', changeColor));
}

function changeColor() {
    this.classList.add('colorChange');
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach (square => square.classList.remove('colorChange'));

    let numSquares = window.prompt('Make a new grid! Enter number of squares per side', '16');
    deleteGrid();
    createGrid(numSquares);
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}