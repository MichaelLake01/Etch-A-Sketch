const gridContainer = document.getElementById('grid-container');
createGrid();

const grids = document.querySelectorAll(".grid-box");

const trail = document.createElement("div");
defineTrail();

let height;
let width;

window.addEventListener("resize", updateSize);
window.addEventListener("load", updateSize);

function defineTrail()
{
    trail.className = "trail";
    document.body.appendChild(trail);
}

let currentGridElement = null;

document.addEventListener("mousemove", function(event) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = event.clientX + "px";
    dot.style.top = event.clientY + "px";
    trail.appendChild(dot);
    
    
    grids.forEach(e => {
        const rect = e.getBoundingClientRect();
        if (event.clientX >= rect.left && event.clientX <= rect.right &&
            event.clientY >= rect.top && event.clientY <= rect.bottom) {
            
            if (e !== currentGridElement) {
                e.style.backgroundColor = getRandomColor();
                currentGridElement = e;
            }
        }
    });
});


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