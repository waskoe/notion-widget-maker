// DOM elements
const checkbox = document.getElementById("checkbox");
const streakNumber = document.getElementById("streak-number");
const warningText = document.getElementById("warning-text");

// Initial default number
let defaultNumber = parseInt(localStorage.getItem("defaultNumber")) || 12;
let lastCheckedDate = localStorage.getItem("lastCheckedDate");

// Update streak number display
function updateStreakNumber() {
    streakNumber.textContent = defaultNumber;
}

// Update warning text
function updateWarningText(daysLeft) {
    if (daysLeft === 2) {
        warningText.style.display = "block";
        warningText.textContent = "Save your dating streak";
    } else {
        warningText.style.display = "none";
        warningText.textContent = "";
    }
}

// Function to save current date and defaultNumber in local storage
function saveData() {
    localStorage.setItem("lastCheckedDate", new Date().toString());
    localStorage.setItem("defaultNumber", defaultNumber.toString());
}

// Function to check if a week has passed
function hasWeekPassed() {
    if (!lastCheckedDate) {
        return false;
    }
    
    const lastChecked = new Date(lastCheckedDate);
    const currentDate = new Date();
    
    return (currentDate - lastChecked) >= 604800000; // 7 days in milliseconds
}

// Handle checkbox change
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        defaultNumber++;
        saveData();
    } else {
        defaultNumber = Math.max(0, defaultNumber - 1);
        saveData();
    }
    
    updateStreakNumber();
    updateWarningText(7 - new Date().getDay());
});

// Initial setup
updateStreakNumber();
updateWarningText(7 - new Date().getDay());

// Check for passing a week interval
if (hasWeekPassed()) {
    defaultNumber += checkbox.checked ? 1 : 0;
    checkbox.checked = false;
    saveData();
    updateStreakNumber();
    updateWarningText(7);
}

// Automatic unticking logic
setInterval(() => {
    if (hasWeekPassed()) {
        defaultNumber += checkbox.checked ? 1 : 0;
        checkbox.checked = false;
        saveData();
        updateStreakNumber();
        updateWarningText(7);
    }
}, 1000); // Check every second
