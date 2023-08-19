
const signupForm = document.getElementById('signupForm');


signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    window.location.href = 'index.html';
});
