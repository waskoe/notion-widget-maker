// DOM elements
const checkbox = document.getElementById("checkbox");
const streakNumber = document.getElementById("streak-number");
const warningText = document.getElementById("warning-text");

// Initial default number
const baseNumber = 12;
let defaultNumber = baseNumber;

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
function hasWeekPassed(lastDate) {
    const currentDate = new Date();
    const lastChecked = new Date(lastDate);

    return (currentDate - lastChecked) >= 604800000; // 7 days in milliseconds
}

// Handle checkbox change
checkbox.addEventListener("change", () => {
    if (checkbox.checked && defaultNumber < baseNumber + 1) {
        defaultNumber++;
    } else {
        defaultNumber = Math.max(baseNumber, defaultNumber - 1);
    }
    
    saveData();
    updateStreakNumber();
    updateWarningText(7 - new Date().getDay());
});

// Initial setup
let lastCheckedDate = localStorage.getItem("lastCheckedDate");
let storedNumber = parseInt(localStorage.getItem("defaultNumber"));

if (storedNumber && !hasWeekPassed(lastCheckedDate)) {
    defaultNumber = storedNumber;
}

updateStreakNumber();
updateWarningText(7 - new Date().getDay());

// Check for passing a week interval
if (hasWeekPassed(lastCheckedDate)) {
    checkbox.checked = false;
    saveData();
    updateWarningText(7);
}

// Automatic unticking logic
setInterval(() => {
    if (hasWeekPassed(lastCheckedDate)) {
        checkbox.checked = false;
        saveData();
        updateWarningText(7);
    }
}, 1000); // Check every second
