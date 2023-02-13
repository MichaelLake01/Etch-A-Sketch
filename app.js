const gridContainer = document.querySelector('#grid-container');
const trail = document.createElement("div");
const button = document.querySelector("#grid-btn");
const fullViewportWidth = window.innerWidth;

let gridX = 16;
let gridY = 16;
let grids;

button.addEventListener("click", function() {
    const regex = /^([1-9]|[1-9][0-9]|100)x([1-9]|[1 -9][0-9]|100)$/;

    let userInput = prompt("Enter a value in the format of 'XxY', where X and Y are numbers in the range of 1 to 100");

    if (regex.test(userInput)) {
        let numbers = userInput.split("x");
        gridX = parseInt(numbers[0]);
        gridY = parseInt(numbers[1]);
        removeGrids();
        innitGrid(gridX, gridY);  
        
    }
    else 
    {
        if(userInput !== null)
        {
            alert("Invalid input. The value must be in the format of 'XxY', where X and Y are numbers in the range of 1 to 100.");
        }
    }

});



   
innitGrid(gridX,gridY);



//addTrail();

window.addEventListener("resize", function(){
    updateGridContainerSize();
    setGridBoxSize(updateGridBoxSize(gridX,gridY));

});


function innitGrid(x,y)
{
    for (let i = 0; i < x*y; i++) {
        let grid = document.createElement('div');
        grid.className = "grid-box";
        gridContainer.appendChild(grid);
    }

    updateGridContainerSize();
    grids = document.querySelectorAll(".grid-box");
    setGridBoxSize(updateGridBoxSize(x,y));

}

function updateGridContainerSize()
{
    //const currentViewPort = window.innerWidth;
    const maxValue = 800;
    let size = maxValue;

    /*if(currentViewPort === fullViewportWidth)
    { 
        size = maxValue;
    }
    else
    {
        size = maxValue - (currentViewPort- maxValue);
    }*/
  
    gridContainer.style.width = `${size}px`;
    gridContainer.style.height = `${size}px`;
  
}

function setGridBoxSize(bW,bH)
{
    grids.forEach(e => {
        e.style.width = `${bW}px`;
        e.style.height = `${bH}px`;
    });
}

function updateGridBoxSize(x,y)
{
    
    const boxWidth = gridContainer.clientWidth / x;
    const boxHeight = gridContainer.clientHeight / y;
    return boxWidth, boxHeight;

}


function removeGrids()
{
    grids.forEach(e => {
        e.remove();
    });
}

function addTrail()
{
    trail.className = "trail";
    document.body.appendChild(trail);
}


let currentGridElement = null;
document.addEventListener("mousemove", function(event) {

    if(event.target !== button)
    {
        let dot = document.createElement("div");   
    
        dot.className = "dot";
        dot.style.left = event.clientX + "px";
        dot.style.top = event.clientY + "px";
        trail.appendChild(dot);
    
        changeBoxColor(event);
    
    }

});


function changeBoxColor(event)
{
    grids.forEach(e => {
        const rect = e.getBoundingClientRect();
        if (event.clientX >= rect.left && event.clientX <= rect.right &&
            event.clientY >= rect.top && event.clientY <= rect.bottom) {
            
            if (e !== currentGridElement) {
                e.style.backgroundColor = "grey";
                currentGridElement = e;
            }
        }
    });
}
