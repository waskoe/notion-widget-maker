// Initial setup
window.addEventListener('DOMContentLoaded', () => {
    updateStreakNumber();
    updateWarningText(7 - new Date().getDay());
    
    // Set a flag to indicate that the initial setup is complete
    let initialSetupComplete = false;
    
    // Check if the widget was just loaded and it's not Sunday yet
    if (new Date().getDay() !== 0 && checkbox.checked) {
        // Disable the checkbox until it's Sunday
        checkbox.disabled = true;
        
        // Calculate the time until Sunday at 11:59 PM
        const now = new Date();
        const daysUntilSunday = 7 - now.getDay();
        const hoursUntilSunday = 23 - now.getHours();
        const minutesUntilSunday = 59 - now.getMinutes();
        const millisecondsUntilSunday = daysUntilSunday * 24 * 60 * 60 * 1000 +
            hoursUntilSunday * 60 * 60 * 1000 +
            minutesUntilSunday * 60 * 1000;
        
        // Enable the checkbox and update the warning text when it's Sunday
        setTimeout(() => {
            checkbox.disabled = false;
            updateWarningText(2);
        }, millisecondsUntilSunday);
        
        // Indicate that the initial setup is complete
        initialSetupComplete = true;
    }
    
    // Automatic unticking logic
    setInterval(() => {
        const currentDay = new Date().getDay();
        
        if (currentDay === 0 && checkbox.checked && initialSetupComplete) {
            defaultNumber++;
            updateStreakNumber();
            checkbox.checked = false;
            updateWarningText(7);
            initialSetupComplete = false;
            
            // Calculate the time until the next Sunday
            const now = new Date();
            const daysUntilSunday = 7;
            const hoursUntilSunday = 23 - now.getHours();
            const minutesUntilSunday = 59 - now.getMinutes();
            const millisecondsUntilSunday = daysUntilSunday * 24 * 60 * 60 * 1000 +
                hoursUntilSunday * 60 * 60 * 1000 +
                minutesUntilSunday * 60 * 1000;
            
            // Enable the checkbox and update the warning text when it's the next Sunday
            setTimeout(() => {
                checkbox.disabled = false;
                updateWarningText(2);
                initialSetupComplete = true;
            }, millisecondsUntilSunday);
        }
    }, 1000); // Check every second
});
