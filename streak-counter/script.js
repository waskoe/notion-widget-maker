const checkbox = document.getElementById('streakCheckbox');
const streakNumber = document.getElementById('streakNumber');
const streakMessage = document.getElementById('streakMessage');

checkbox.addEventListener('change', updateStreak);

function updateStreak() {
    if (checkbox.checked) {
        streakNumber.textContent = parseInt(streakNumber.textContent) + 1;
        streakMessage.style.display = 'none';
    } else {
        streakNumber.textContent = parseInt(streakNumber.textContent) - 1;
        streakMessage.style.display = 'none';
    }
}

// Simulate automatic unticking after a week (7 seconds for demonstration)
setTimeout(() => {
    checkbox.checked = false;
    updateStreak();
    streakMessage.style.display = 'block';
}, 7000); // Change this to 7 days (7 * 24 * 60 * 60 * 1000) for a week

// Reset streak on click and remove the message
streakMessage.addEventListener('click', () => {
    streakNumber.textContent = 0;
    checkbox.checked = true;
    streakMessage.style.display = 'none';
});
