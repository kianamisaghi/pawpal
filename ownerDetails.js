function saveInfo() {
    // Retrieve user inputs
    var allergies = document.getElementById('firstN').value;
    var conditions = document.getElementById('LastN').value;
    var medications = document.getElementById('phone').value;
    var medications = document.getElementById('home').value;
    var medications = document.getElementById('email').value;

      // Check if empty
      if (!firstN.trim() ||!lastN.trim() || !phone.trim() || !home.trim() || !email.trim() ) {
        // Display an alert if empty
        alert('Please enter a valid input!');
        return; 
    }


    // Save the preferences to localStorage
    localStorage.setItem('firstN', firstN);
    localStorage.setItem('lastN', lastN);
    localStorage.setItem('phone', phone);
    localStorage.setItem('home', home);
    localStorage.setItem('email', email);

    // Redirect to the next page
    
}

function saveInfo() {
    window.location.href = 'success.html';
}


function goBack() {
    window.location.href ="preferences.html" ;
}