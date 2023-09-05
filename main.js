const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', '/', '-', '+', '='];
let output = '';

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    if (btnValue === '=' && output !== '') {
        // if output '%', replace with '/100'
        output = eval(output.replace('%', '/100'));
    } else if (btnValue === 'AC') {
        output = '';
    } else if (btnValue === 'DEL') {
        // if DEL button clicked, remove the last char from the output
        output = output.toString().slice(0, -1);
    } else {
        //if output is empty and button is specialChars then return
        if (output === '' && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Add event listener to buttons, to call calculate() on click
buttons.forEach((button) => {
    // button click listener calls calculate() with dataset value as argument
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});