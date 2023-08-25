const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let result = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            result = null;
        } else if (value === '=') {
            try {
                result = eval(currentInput);
                currentInput = result;
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});
