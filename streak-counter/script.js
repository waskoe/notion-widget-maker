// script.js
let lastChecked = false;
let streak = 10;
let lastStreak = streak;

function updateStreak() {
    const checkbox = document.getElementById("checkbox");
    const streakCount = document.getElementById("streak-count");
    const daysLeft = document.getElementById("days-left");

    if (lastChecked !== checkbox.checked) {
        lastChecked = checkbox.checked;

        if (checkbox.checked) {
            const currentDate = new Date();
            if (currentDate.getDay() === 0 && streak !== lastStreak) {
                streak++;
                lastStreak = streak;
            }
            daysLeft.textContent = "";
        } else {
            daysLeft.textContent = `Days left: ${7 - new Date().getDay()} days`;
        }

        streakCount.textContent = streak;
        streakCount.className = (streak <= 2 && !checkbox.checked) ? "red" : "";
    }
}
