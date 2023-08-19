const signupForm = document.getElementById('signupForm');
const usrnm= "22145083";
const pass= "1234";
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //Prevent the default form submission behavior

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username===usrnm && pass===password){
    window.location.href = 'index.html';
    }
    else{
        alert("WRONG PASSWORD OR USERNAME!!");
    }
});
