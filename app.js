const gridContainer = document.getElementById('grid-container');
createGrid();

const grids = document.querySelectorAll(".grid-box");

const trail = document.createElement("div");
addTrail();

const trailColors = [
    "#676F9F",
    "#2E3131",
    "#E8E8E8",
    "#E8ECF1",
    "#F3F1EF",
    "#BFBFBF",
    "#F2F1EF",
    "#ABB7B7",
    "#DADFE1",
    "#9585A6",
    "#ECF0F1",
    "#BDC3C7",
    "#EEE",
    "#D2D7D3",
    "#6C7A89",
    "#ECECEC",
];


window.addEventListener("resize", updateSize);
window.addEventListener("load", updateSize);

function addTrail()
{
    trail.className = "trail";
    document.body.appendChild(trail);
}


function cleanTrail() {

    const trailArr = Array.from(trail.children);
    console.log(trailArr.length);
    const maxAmount = 250;
    while (trailArr.length > maxAmount)
    {

        let removedNode = trailArr.shift(); 
        trail.removeChild(removedNode);
    }

}




let currentGridElement = null;
document.addEventListener("mousemove", function(event) {
    const dot = document.createElement("div");

    const posX = event.clientX + (Math.random() * 20 - 10);
    const posY = event.clientY + (Math.random() * 20 - 10);

    dot.className = "dot";
    dot.style.left = posX + "px";
    dot.style.top = posY + "px";
    trail.appendChild(dot);

    const range = (0.8 - 0.2) + 1;
    const opacity = (0.2 + (Math.random() * range).toFixed(1));
    dot.style.opacity = opacity;

    trailColors.forEach(color => {
        dot.style.backgroundColor = color;
    });
    
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

    cleanTrail();

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



/*
Hoki : – rgba(103, 128, 159, 1)
Outer Space : – rgba(46, 49, 49, 1)
Mercury : – rgba(232, 232, 232, 1)
Mystic : – rgba(232, 236, 241, 1)
Pampas : – rgba(243, 241, 239, 1)
Silver : – rgba(191, 191, 191, 1)
Cararra : – rgba(242, 241, 239, 1)
Edward : – rgba(171, 183, 183, 1)
Iron : – rgba(218, 223, 225, 1)
Cascade : – rgba(149, 165, 166, 1)
Porcelain : – rgba(236, 240, 241, 1)
Silver Sand : – rgba(189, 195, 199, 1)
Gallery : – rgba(238, 238, 238, 1)
Pumice : – rgba(210, 215, 211, 1)
Lynch : – rgba(108, 122, 137, 1)
White Smoke : – rgba(236, 236, 236, 1)
*/
