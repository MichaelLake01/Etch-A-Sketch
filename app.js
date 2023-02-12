const gridContainer = document.getElementById('grid-container');
createGrid();
const grids = document.querySelectorAll(".grid-box");
let height;
let width;
window.addEventListener("resize", updateSize);
window.addEventListener("load", updateSize);


function updateSize()
{
    height = gridContainer.clientHeight / 16;
    width = gridContainer.clientWidth / 16;
    
    grids.forEach(e => {
        e.style.width = `${width}px`;
        e.style.height = `${height}px`;
    });
 
}

function createGrid(){
    
    for (let i = 0; i < 16*16; i++) {
        let grid = document.createElement('div');
        grid.className = "grid-box";
        grid.style.backgroundColor = getRandomColor();
        gridContainer.appendChild(grid);
    }
}

function getRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    randColor = randomNumber.padStart(6, 0);  
    return `#${randColor}`;
}