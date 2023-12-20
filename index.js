// Wait for the HTML to fully load before running the code
document.addEventListener('DOMContentLoaded', function () {
    // Variables to store calculator data
    let displayValue = "";
    let inputField = document.querySelector('.input');
    let buttons = document.querySelectorAll('.itemchild1');

    // Add click event listeners to all calculator buttons
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            const buttonText = e.target.textContent;

            // Check the clicked button and perform corresponding action
            if (buttonText === '=') {
                calculateResult();
            } else if (buttonText === 'c') {
                clearDisplay();
            } else if (buttonText === 'b') {
                removeLastDigit();
            } else if (buttonText === '%') {
                calculatePercentage();
            } else {
                updateDisplay(buttonText);
            }
        });
    });

    // Function to calculate and display the result
    function calculateResult() {
        try {
            // Use eval to calculate the result, replace 'x' with '*' for multiplication
            const result = eval(displayValue.replace(/x/g, '*'));
            inputField.value = result;
            displayValue = result.toString();
        } catch (error) {
            inputField.value = 'Error';
            displayValue = '';
        }
    }

    // Function to clear the display
    function clearDisplay() {
        inputField.value = '';
        displayValue = '';
    }

    // Function to update the display based on the clicked button
    function updateDisplay(value) {
        displayValue += value;
        inputField.value = displayValue;
    }

    // Function to remove the last digit from the display
    function removeLastDigit() {
        displayValue = displayValue.slice(0, -1);
        inputField.value = displayValue;
    }

    // Function to calculate the percentage of two digits
    function calculatePercentage() {
        try {
            // Use eval to calculate the percentage
            const result = eval(displayValue.replace(/%/g, '/100'));
            inputField.value = result;
            displayValue = result.toString();
        } catch (error) {
            inputField.value = 'Error';
            displayValue = '';
        }
    }
});
