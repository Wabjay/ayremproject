// FORM VALIDATION FOR ALL PAGES

const form = document.getElementById("form");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const refer = document.getElementById("refer");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the input
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const referValue = refer.value.trim();

  if (fullNameValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(fullName, " Name cannot be blank");
  } else {
    // ADD VALID CLASS
    setSuccessFor(fullName);
  }
  if (userNameValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(username, " Username cannot be empty");
  } else {
    // ADD VALID CLASS
    setSuccessFor(userName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a correct email");
  } else {
    setSuccessFor(email);
  }
  if (phoneValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(phone, "Please enter your phone number");
  } else if (!allnumeric(phoneValue)) {
    setErrorFor(phone, "Enter your correct phone number");
  } else if (phoneValue.length < 10 || phoneValue.length >= 15) {
    setErrorFor(phone, "Phone number is not correct.");
  } else {
    // ADD VALID CLASS
    setSuccessFor(phone);
  }
  if (phoneValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(phone, "Please enter your phone number");
  } else if (!allnumeric(phoneValue)) {
    setErrorFor(phone, "Enter your correct phone number");
  } else if (phoneValue.length < 10 || phoneValue.length >= 16) {
    setErrorFor(phone, "Phone number is not correct.");
  } else {
    // ADD VALID CLASS
    setSuccessFor(phone);
  }
  if (passwordValue === "") {
    // SHOW ERROR AND ADD INVALID CLASS
    setErrorFor(password, "Please enter your Password");
  } else if (passwordValue.length < 10) {
    setErrorFor(password, "Password must be upto 10 digits");
  } else {
    // ADD VALID CLASS
    setSuccessFor(password);
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

//MAIL FORMAT
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// PHONE NUMBER VALIDATION
function allnumeric(phone) {
  //   return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
  return /^\(\d{3})\s*\d{3}(?:-|\s*)\d{4}$/.test(phone);
}

// TOGGLE PASSWORD
const showPass = document.getElementById("show");

showPass.onclick = function() {
  if (password.type === "password") {
    showPass.src = "../../images/hide_pass.png";
    password.type = "text";
  } else {
    showPass.src = "../../images/show.png";
    password.type = "password";
  }
};
