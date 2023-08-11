// script.js
var checkbox = document.getElementById('checkbox');
var streakCountElement = document.getElementById('streak-count');
var streakElement = document.getElementById('streak');
var streakCount = 11;

function updateStreak() {
    if (checkbox.checked) {
        streakCount++;
    } else {
        streakCount = 0;
    }

    streakCountElement.textContent = streakCount;
    streakElement.classList.remove('red');

    // Add the red class if streak is inactive for the last two days
    var today = new Date();
    var dayOfWeek = today.getDay();
    if (!checkbox.checked && (dayOfWeek === 0 || dayOfWeek === 1)) {
        streakElement.classList.add('red');
    }
}

checkbox.addEventListener('change', updateStreak);
updateStreak();
