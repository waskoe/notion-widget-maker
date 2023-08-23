// DOM elements
const checkbox = document.getElementById("checkbox");
const streakNumber = document.getElementById("streak-number");
const warningText = document.getElementById("warning-text");

// Initial default number
let defaultNumber = 12;

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

// Function to save current date in local storage
function saveDate() {
    localStorage.setItem("lastCheckedDate", new Date().toString());
}

// Function to check if a week has passed
function hasWeekPassed() {
    const lastCheckedDate = new Date(localStorage.getItem("lastCheckedDate"));
    const currentDate = new Date();
    
    return (currentDate - lastCheckedDate) >= 604800000; // 7 days in milliseconds
}

// Handle checkbox change
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        defaultNumber++;
        updateStreakNumber();
        updateWarningText(7 - new Date().getDay());
        saveDate();
    } else {
        defaultNumber = Math.max(0, defaultNumber - 1);
        updateStreakNumber();
        updateWarningText(7 - new Date().getDay());
    }
});

// Initial setup
updateStreakNumber();
updateWarningText(7 - new Date().getDay());

// Check for passing a week interval
if (hasWeekPassed() && checkbox.checked) {
    defaultNumber++;
    updateStreakNumber();
    checkbox.checked = false;
    saveDate();
}

// Automatic unticking logic
setInterval(() => {
    if (hasWeekPassed() && checkbox.checked) {
        defaultNumber++;
        updateStreakNumber();
        checkbox.checked = false;
        saveDate();
    }
}, 1000); // Check every second
