/**
 * Initializes a simple counter with increment and decrement functionality.
 * 
 * - When the "increment" button is clicked, the number in the span increases by 1.
 * - When the "decrement" button is clicked, the number in the span decreases by 1.
 * 
 * @file /Users/rki02/dev/webdev/Introduction-to-GitHub-Copilot/main.js
 * @version 1.0.0
 * 
 * @constant {number} counter - The current value of the counter.
 * @constant {HTMLElement} span - The span element displaying the counter value.
 * @constant {HTMLElement} increment - The button element to increment the counter.
 * @constant {HTMLElement} decrement - The button element to decrement the counter.
 */
console.log('Hello World from main.js');


 // Create a simple counter: 
// - When the "increment" button is clicked, the number in the span should increase by 1.
// - When the "decrement" button is clicked, the number in the span should decrease by 1.

let counter = 0;
let span = document.querySelector('span');
let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');

increment.addEventListener('click', () => {
    counter++;
    span.textContent = counter;
}
);

decrement.addEventListener('click', () => {
    counter--;
    span.textContent = counter;
}
);








