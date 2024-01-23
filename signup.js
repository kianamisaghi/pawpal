function saveDogName() {
    // Retrieve user input
    var dogName = document.getElementById('dogNameInput').value;

    // Check if the dog name is empty
    if (!dogName.trim()) {
        // Display an alert if the dog name is empty
        alert('Please enter a valid input!');
        return; // Exit the function if the dog name is empty
    }

    // Save the dog name to localStorage
    localStorage.setItem('dogName', dogName);

    //  to the next page
    window.location.href = 'profileInfo.html';
}
