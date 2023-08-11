const checkbox = document.getElementById('checkbox');
const streak = document.getElementById('streak');
const fire = document.getElementById('fire');
const daysLeft = document.getElementById('days-left');

// Load streak count from local storage
let currentStreak = parseInt(localStorage.getItem('streak')) || 10;
streak.textContent = currentStreak;

// Set initial checkbox state
checkbox.checked = localStorage.getItem('checkbox') === 'true';

// Update streak count and checkbox state
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        currentStreak++;
    } else {
        currentStreak--;
        if (currentStreak < 0) {
            currentStreak = 0;
        }
    }
    streak.textContent = currentStreak;
    localStorage.setItem('streak', currentStreak);
    localStorage.setItem('checkbox', checkbox.checked);
    updateDaysLeft();
});

// Display days left in the current week
function updateDaysLeft() {
    if (!checkbox.checked) {
        const daysUntilSunday = 7 - new Date().getDay();
        if (daysUntilSunday > 2) {
            daysLeft.textContent = `Days left: ${daysUntilSunday} days`;
        } else {
            daysLeft.textContent = `Calls for a date this week`;
        }
    } else {
        daysLeft.textContent = '';
    }
}

updateDaysLeft();
setInterval(updateDaysLeft, 1000 * 60 * 60); // Update every hour
