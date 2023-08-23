const checkbox = document.getElementById("checkbox");
const streakNumber = document.getElementById("streak-number");
const warning = document.getElementById("warning");

// Initialize streak counter
let streakCount = 12;

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        streakCount++;
    } else {
        streakCount--;
    }
    updateStreak();
});

function updateStreak() {
    streakNumber.textContent = streakCount;
    warning.style.display = "none";
}

// Update streak on page load
updateStreak();
