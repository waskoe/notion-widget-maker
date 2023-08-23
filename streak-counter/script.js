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

// Handle checkbox change
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        defaultNumber++;
        updateStreakNumber();
        updateWarningText(7 - new Date().getDay());
    } else {
        defaultNumber = Math.max(0, defaultNumber - 1);
        updateStreakNumber();
        updateWarningText(7 - new Date().getDay());
    }
});

// Initial setup
updateStreakNumber();
updateWarningText(7 - new Date().getDay());

// Automatic unticking logic
setInterval(() => {
    const currentDay = new Date().getDay();
    if (currentDay === 0 && checkbox.checked) {
        defaultNumber++;
        updateStreakNumber();
        checkbox.checked = false;
        updateWarningText(7);
    }
}, 1000); // Check every second
