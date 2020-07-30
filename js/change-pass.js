// FORM VALIDATION FOR ALL PAGES

const form = document.getElementById("form");
const password = document.getElementById("f_pass");
const confirm = document.getElementById("n_pass");
const showPass = document.querySelectorAll(".show");

showPass[0].onclick = function() {
  if (password.type === "password") {
    showPass[0].src = "../../images/hide_pass.png";
    password.type = "text";
  } else {
    showPass[0].src = "../../images/show.png";
    password.type = "password";
  }
};

showPass[1].onclick = function() {
  if (confirm.type === "password") {
    showPass[1].src = "../../images/hide_pass.png";
    confirm.type = "text";
  } else {
    showPass[1].src = "../../images/show.png";
    confirm.type = "password";
  }
};

//TOGGLE PASSWORD SHOW OR HIDE

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the input
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();

  if (passwordValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(password, "Please enter your Password");
  } else if (passwordValue.length < 10) {
    setErrorFor(password, "Password must be upto 10 digits");
  } else {
    // ADD VALID CLASS
    setSuccessFor(password);
  }
  if (confirmValue !== passwordValue) {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(confirm, "Password does not match");
  } else {
    // ADD VALID CLASS
    setSuccessFor(confirm);
  }
}

//functions to be used

function setErrorFor(input, message) {
  const formControl = input.parentElement; //the input parent element form-control class.
  const small = formControl.querySelector("small");

  // add error message inside the paragraph for error
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
