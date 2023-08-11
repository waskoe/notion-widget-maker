// script.js
var checkbox = document.getElementById('checkbox');
var streakCountElement = document.getElementById('streak-count');
var streakElement = document.getElementById('streak');
var daysLeftElement = document.getElementById('days-left');
var streakCount = 10;

// Function to update the streak and related elements
function updateStreak() {
    if (checkbox.checked) {
        checkbox.disabled = true; // Disable checkbox once it's checked
        streakCount++;
    } else {
        checkbox.disabled = false; // Re-enable checkbox if unchecked
        streakCount = 0;
    }

    streakCountElement.textContent = streakCount;
    streakElement.classList.remove('red');

    // Add the red class if streak is inactive for the last two days
    var today = new Date();
    var dayOfWeek = today.getDay();
    if (!checkbox.checked && (dayOfWeek === 0 || dayOfWeek === 1)) {
        streakElement.classList.add('red');
        showDaysLeft(today);
    } else {
        hideDaysLeft();
    }
}

// Function to show days left until end of the week
function showDaysLeft(today) {
    var daysLeft = 7 - today.getDay();
    daysLeftElement.textContent = 'Days left: ' + daysLeft;
}

// Function to hide days left
function hideDaysLeft() {
    daysLeftElement.textContent = '';
}

// Add event listener to checkbox for updates
checkbox.addEventListener('change', updateStreak);

// Load initial streak state on page load
updateStreak();
