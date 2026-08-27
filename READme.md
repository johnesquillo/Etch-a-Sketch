# Etch-a-Sketch

This is my **Etch-a-Sketch** project created as part of **The Odin Project Foundations course**.

The main purpose of this project is to practice the HTML, CSS, and JavaScript fundamentals that I have learned so far.

## About the Project

This project is a simple drawing application where the user can move the mouse over a grid and color the squares.

The default grid is **16x16**, but the user can change the grid size using the button. The maximum grid size is **100x100**.

I also added a color picker so the user can choose the color they want to draw with.

## Features

* 16x16 default grid
* Change the grid size from 1 to 100
* Mouse hover drawing effect
* Color picker
* Normal color mode
* Rainbow mode with random colors
* Simple color mixing when coloring the same square
* Uses Flexbox for the grid layout

## Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub

## What I Learned

While making this project, I practiced several JavaScript fundamentals, including:

* Creating HTML elements using JavaScript
* Using `for` loops
* Creating and using functions
* Adding event listeners
* Working with DOM elements
* Getting values from an input
* Changing CSS styles using JavaScript
* Using variables
* Using `if` statements
* Working with strings and RGB colors

I also practiced using **Flexbox** in CSS to create the grid instead of using CSS Grid.

## How It Works

The grid squares are created using JavaScript. Instead of manually writing hundreds of `<div>` elements in HTML, JavaScript creates them based on the grid size selected by the user.

When the mouse enters a square, the square changes its color.

The color picker allows the user to select a specific color. There is also a **Rainbow Mode** that generates random RGB colors.

If a square already has a color and I draw over it again, the program mixes the existing color with the new color.

## Challenges I Encountered

One of the challenging parts of this project was understanding how to create many elements using JavaScript and how to add event listeners to each square.

I also had some difficulty with the color mixing feature because I needed to get the RGB values of the colors and calculate a new color from them.

Another challenge was making sure that the old grid was removed before creating a new grid when the user changes the grid size.

## Getting Help

While working on this project, I also asked for help from other people in my Discord community when I got stuck.

They gave me suggestions and helped me understand some of the problems I encountered, especially with the JavaScript logic and some of the features.

Their help allowed me to understand the problems better and continue working on the project.

I used their suggestions as a way to learn, but I also went through the code myself so I could understand how the features worked.

## What I Would Improve

If I continue working on this project, I would like to add more features such as:

* Eraser mode
* Clear button
* Better color mixing
* Click-and-drag drawing
* Better responsive design for smaller screens
* More drawing options

## Conclusion

This project helped me understand how HTML, CSS, and JavaScript can work together to create an interactive webpage.

It also gave me more practice with DOM manipulation, functions, loops, and event listeners.

Although I needed some help while working on the project, I learned a lot from solving the problems and understanding how the different parts of the code work together.
