const gridContainer = document.getElementById("grid-container");
const resizeButton = document.getElementById("resize-btn");

function createGrid(size) {
    // Remove the old grid
    gridContainer.innerHTML = "";

    const squareSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        gridContainer.appendChild(square);
    }
}

// Create the default 16x16 grid
createGrid(16);

// Change the grid size
resizeButton.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side (1-100):");

    size = Number(size);

    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});