const gridContainer = document.getElementById('grid-container');
const divs = [];

for (let i = 0; i < 16; i++) {
    divs.push(document.createElement('div'));   
}

let counter = 1;
divs.forEach(e => {
    gridContainer.appendChild(e);
    e.textContent = counter++;
});