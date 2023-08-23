const checkbox = document.getElementById('checkbox');
const numberElement = document.getElementById('number');
const warningElement = document.getElementById('warning');

let streakNumber = 12; // Starting point

function updateStreakNumber() {
  numberElement.textContent = streakNumber;

  if (streakNumber === 0) {
    warningElement.style.display = 'none';
  } else if (streakNumber > 0 && streakNumber <= 2) {
    warningElement.style.display = 'block';
  }
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    streakNumber++;
    updateStreakNumber();
  } else {
    streakNumber = Math.max(0, streakNumber - 1);
    updateStreakNumber();
  }
});

function checkForNewWeek() {
  const now = new Date();
  const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  if (day === 0 && time >= 23 * 3600 + 59 * 60) {
    // Reset the streak number if one calendar week has passed
    streakNumber = 0;
    updateStreakNumber();
  }
}

updateStreakNumber();
setInterval(checkForNewWeek, 60000); // Check every minute
