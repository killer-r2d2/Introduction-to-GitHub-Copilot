/**
 * Initializes a simple counter with increment and decrement functionality.
 * 
 * The counter starts at 0 and is displayed in a <span> element. 
 * When the "increment" button is clicked, the counter increases by 1.
 * When the "decrement" button is clicked, the counter decreases by 1.
 * 
 * @file /Users/rki02/dev/webdev/Introduction-to-GitHub-Copilot/example.js
 * 
 * @constant {number} counter - The initial value of the counter.
 * @constant {HTMLElement} span - The <span> element where the counter value is displayed.
 * @constant {HTMLElement} increment - The button element that increments the counter.
 * @constant {HTMLElement} decrement - The button element that decrements the counter.
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