const checkbox = document.getElementById('checkbox');
const streakNumber = document.getElementById('streakNumber');
const warningText = document.getElementById('warningText');

let currentStreak = 12; // Starting point
let lastCheckedTime = new Date();

checkbox.addEventListener('change', function () {
  if (this.checked) {
    currentStreak += 1;
    lastCheckedTime = new Date();
    warningText.style.display = 'none';
  } else {
    currentStreak -= 1;
  }
  updateStreak();
});

function updateStreak() {
  streakNumber.textContent = currentStreak;
}

function checkStreak() {
  const currentTime = new Date();
  const daysPassed = Math.floor((currentTime - lastCheckedTime) / (1000 * 60 * 60 * 24));
  
  if (daysPassed >= 7) {
    currentStreak = 0;
    lastCheckedTime = currentTime;
    updateStreak();
  }

  if (daysPassed >= 5 && daysPassed < 7) {
    warningText.style.display = 'block';
  } else {
    warningText.style.display = 'none';
  }
}

checkStreak();
setInterval(checkStreak, 1000 * 60 * 60); // Check every hour
