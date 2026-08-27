const gridContainer = document.getElementById("grid-container");
const resizeButton = document.getElementById("resize-btn");
const colorPicker = document.getElementById("color-picker");
const rainbowButton = document.getElementById("rainbow-btn");
const normalButton = document.getElementById("normal-btn");

let rainbowMode = false;

function createGrid(size) {
    gridContainer.innerHTML = "";

    const squareSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseenter", () => {
            drawSquare(square);
        });

        gridContainer.appendChild(square);
    }
}

function drawSquare(square) {
    let newColor;

    // Use random color in rainbow mode
    if (rainbowMode) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        newColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        newColor = colorPicker.value;
    }

    // If the square already has a color, mix the colors
    if (square.dataset.color) {
        newColor = mixColors(square.dataset.color, newColor);
    }

    square.style.backgroundColor = newColor;
    square.dataset.color = newColor;
}

function mixColors(color1, color2) {
    const rgb1 = color1.match(/\d+/g).map(Number);
    const rgb2 = color2.match(/\d+/g).map(Number);

    const red = Math.floor((rgb1[0] + rgb2[0]) / 2);
    const green = Math.floor((rgb1[1] + rgb2[1]) / 2);
    const blue = Math.floor((rgb1[2] + rgb2[2]) / 2);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Normal color mode
normalButton.addEventListener("click", () => {
    rainbowMode = false;
});

// Rainbow color mode
rainbowButton.addEventListener("click", () => {
    rainbowMode = true;
});

// Change grid size
resizeButton.addEventListener("click", () => {
    let size = prompt(
        "Enter the number of squares per side (1-100):"
    );

    size = Number(size);

    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Default 16x16 grid
createGrid(16);