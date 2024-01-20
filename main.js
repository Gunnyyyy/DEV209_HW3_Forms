document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('newUserSection').classList.add('disabled');
    document.getElementById('existingUserSection').classList.add('disabled');

    // Button for "Click for New User"
    document.getElementById('newUserButton').addEventListener("click", function() {
        document.getElementById('newUserSection').classList.remove('disabled');
        document.getElementById('existingUserSection').classList.add('disabled');
    });

    // Button for "Click for Existing User"
    document.getElementById('existingUserButton').addEventListener("click", function() {
        document.getElementById('existingUserSection').classList.remove('disabled');
        document.getElementById('newUserSection').classList.add('disabled');
    });

    function newUserLogin() {
        let newUsername = document.getElementById('newUsername').value;
        localStorage.setItem('username', newUsername);

        let newPassword = document.getElementById('newPassword').value;
        localStorage.setItem('password', newPassword);

        let newCity = document.getElementById('newCity').value;
        localStorage.setItem('city', newCity);

        let newState = document.getElementById('newState').value;
        localStorage.setItem('state', newState);

        alert('Welcome ' + newUsername);
    }

    function existingUserLogin() {
        let existingUsername = document.getElementById('existingUsername').value;
        let existingPassword = document.getElementById('existingPassword').value;

        let storedUsername = localStorage.getItem('username');
        let storedPassword = localStorage.getItem('password');

        if (existingUsername === storedUsername && existingPassword === storedPassword) {
            alert('Welcome back ' + existingUsername);
        } else {
            alert('Invalid');
        }
    }
});
