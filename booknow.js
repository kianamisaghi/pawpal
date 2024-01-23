function submitBooking() {
    var date = document.getElementById('date').value;
    var hour = document.getElementById('hour').value;
    var minute = document.getElementById('minute').value;
    var period = document.getElementById('period').value;
    var duration = document.getElementById('duration').value;
    var location = document.getElementById('location').value;

    if (date === "" || hour === "" || minute === "" || period === "" || duration === "" || location === "") {
        alert("Please fill in all the required fields.");
        return;
    }
    
    var preferredTime = hour + ':' + minute + ' ' + period;

    console.log("Booking Details:");
    console.log("Date: " + date);
    console.log("Preferred Time: " + preferredTime);
    console.log("Duration: " + duration + " minutes");
    console.log("Preferred Location: " + location);
}

function goBack() {
    window.location.href = 'project.html';
}


function submitBooking() {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var duration = document.getElementById('duration').value;
    var location = document.getElementById('location').value;

    // Validate duration
    if (duration < 20 || duration > 150) {
        alert("Duration must be between 20 and 150 minutes.");
        return;
    }

    // Validate hour
    if (time < 0 || time > 12) {
        alert("Hour must be between 0 and 12.");
        return;
    }

    if (minute < 0 || minute > 59) {
        alert("Minute must be between 0 and 59.");
        return;
    } 
}
