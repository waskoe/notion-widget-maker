// DOM elements
const checkbox = document.getElementById('checkbox');
const numberElement = document.getElementById('number');
const warningText = document.getElementById('warning-text');

// Initial values
let streakNumber = 12; // Default starting point
let lastTickedDay = new Date().getDay(); // Initialize with current day

// Update checkbox and number based on streakNumber
function updateDisplay() {
    checkbox.checked = streakNumber > 0;
    numberElement.textContent = streakNumber;
}

// Update the warning text
function updateWarningText(daysLeft) {
    if (daysLeft === 2) {
        warningText.style.display = 'block';
    } else {
        warningText.style.display = 'none';
    }
}

// Check if a week has passed
function hasWeekPassed() {
    const currentDay = new Date().getDay();
    return currentDay < lastTickedDay;
}

// Update streakNumber when checkbox is clicked
checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        streakNumber += 1;
    } else {
        streakNumber -= 1;
    }
    updateDisplay();
});

// Update display and warning text
updateDisplay();
updateWarningText();

// Check if a week has passed every minute
setInterval(() => {
    if (hasWeekPassed()) {
        streakNumber += 1;
        lastTickedDay = new Date().getDay();
        updateDisplay();
        updateWarningText();
    }
}, 60000); // Check every minute
