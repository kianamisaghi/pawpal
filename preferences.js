function saveInfo() {


    // Retrieve user inputs
    var traits = document.getElementById('traits').value;
    var activities = document.getElementById('activities').value;
    var treats = document.getElementById('treats').value;
    var likesDislikes = document.getElementById('likesDislikes').value;
    var additionalNote = document.getElementById('additionalNote').value;

    // Save the preferences to localStorage
    localStorage.setItem('traits', traits);
    localStorage.setItem('activities', activities);
    localStorage.setItem('treats', treats);
    localStorage.setItem('likesDislikes', likesDislikes);
    localStorage.setItem('additionalNote', additionalNote);

}

function saveInfo() {
    window.location.href = 'ownerDetails.html';

}

function goBack() {
    //  back to the previous page
    window.location.href = 'healthInfo.html';
}
