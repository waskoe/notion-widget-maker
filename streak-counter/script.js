// script.js
let lastChecked = false;
let streak = 10;

function updateStreak() {
    const checkbox = document.getElementById("checkbox");
    const streakCount = document.getElementById("streak-count");
    const daysLeft = document.getElementById("days-left");

    if (lastChecked !== checkbox.checked) {
        lastChecked = checkbox.checked;

        if (checkbox.checked) {
            streak++;
            daysLeft.textContent = "";
        } else {
            daysLeft.textContent = `Days left: ${7 - new Date().getDay()} days`;
        }

        streakCount.textContent = streak;
        streakCount.className = (streak <= 2 && !checkbox.checked) ? "red" : "";
    }
}
