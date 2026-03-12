function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('timestamp').textContent = now.toLocaleDateString(undefined, options);
}

// Initial update
updateClock();

// Update every second
setInterval(updateClock, 1000);

console.log("Hello World App Loaded");
