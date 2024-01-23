function validateNumberInput(input, minValue, maxValue) {
    var value = parseInt(input.value);

    if (isNaN(value) || value < minValue || value > maxValue) {
        alert('Please enter a valid number.');
        input.value = ''; 
    }
}


function saveDogInfo() {
    // Retrieve user inputs
    var dogAge = document.getElementById('Year').value;
    var dogAge = document.getElementById('Month').value;
    var dogBreed = document.getElementById('dogBreedInput').value;
    var dogGender = document.querySelector('input[name="gender"]:checked');
    var dogSize = document.querySelector('input[name="size"]:checked');

    // Check if any input is not answered
    if (!dogAge.trim() || !dogBreed.trim() || !dogGender || !dogSize) {
        // Display an alert if any input is not answered
        alert('Please enter valid inputs for all required fields!');
        return; // Exit the function if any input is not answered
    }

    // Save the dog information to localStorage
    localStorage.setItem('dogAge', dogAge);
    localStorage.setItem('dogBreed', dogBreed);
    localStorage.setItem('dogGender', dogGender.value);
    localStorage.setItem('dogSize', dogSize.value);

    //  to the next page
    window.location.href = 'healthInfo.html';
}


function goBack() {
    //  back to the previous page
    window.location.href = 'signup.html';
}
