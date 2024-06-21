function togglePass() {
  var password = document.getElementById("pass");
  if (password.type ==="password") {
    password.type ="text";
  } else {
    password.type ="password";
  }
}

function togglePasswords() {
            var pass = document.getElementsByName('pwsd');
            for (var i = 0; i < pass.length; i++) {
                if (pass[i].type === "password") {
                    pass[i].type = "text";
                } else {
                    pass[i].type = "password";
                }
            }
        }

const wrapper = document.querySelector('.wrapper');
const signupLink = document.querySelector('.signup_link');
const loginLink = document.querySelector('.signin_link');


function signUp(){
    wrapper.classList.add('active');
}

function signIn(){
    wrapper.classList.remove('active');
}


document.getElementById("back").addEventListener("click", () => {
  history.back();
});


function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get username and password input values
  let username = document.getElementById('username').value;
  let password = document.getElementById('pass').value;

  // Check if username and password are correct (dummy check)
  if (username === 'user@gmail.com' && password === 'password') {
      // Redirect to homepage
      window.location.href = '../index.html';
  }
      else if (username === 'admin@gmail.com' && password === 'admin') {
      // Redirect to homepage
      window.location.href = "../admin/sales-report.html" ; 
   
    } else {
      alert('Invalid username or password. Please try again.');
      // Optionally, clear input fields
      document.getElementById('username').value = '';
      document.getElementById('pass').value = '';
  }
}

document.getElementById("back").addEventListener("click", () => {
    history.back();
  });
  