function savePreferences() {
    // Retrieve user inputs
    var allergies = document.getElementById('allergiesInput').value;
    var conditions = document.getElementById('conditionsInput').value;
    var medications = document.getElementById('MedicationsInput').value;

    // Save the preferences to localStorage
    localStorage.setItem('allergies', allergies);
    localStorage.setItem('conditions', conditions);
    localStorage.setItem('medications', medications);

    //  to the next page
    window.location.href = 'preferences.html';
}

function goBack() {
    //  back to the previous page
    window.location.href = 'profileInfo.html';
}
