var menu = document.querySelector("#menu-open");
var nav = document.querySelector(".sidebar");

menu.addEventListener("click", function(e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");

  e.preventDefault();
});

exit.addEventListener("click", function(e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");
  e.preventDefault();
});

// POFILE AND LOGOUT LINKS REVIEWS
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show-drop-content");

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".down-arrow")) {
      var dropdowns = document.getElementById("myDropdown");

      if (dropdowns.classList.contains("show-drop-content")) {
        dropdowns.classList.remove("show-drop-content");
      }
    }
  };
}

/******TRANSACTION DETAILS POP UP*********/
function detailPop() {
  const details = document.querySelector(".details-popup");
  const closeBtn = document.querySelector(".close-btn");
  const popBtn = document.querySelectorAll(".pop");

  for (i = 0; i < popBtn.length; i++) {
    popBtn[i].addEventListener("click", function() {
      details.style.display = "block";
    });
  }
  closeBtn.onclick = function() {
    details.style.display = "none";
  };
}
detailPop();

// INBETWEEN THE TRANSACTION STATUS WITH THE POPUP

//BACK TO PREVIOUS PAGE
function goBack() {
  window.history.back();
}
/***************************** */

//TRANSACTION STATUS

var verify = document.querySelectorAll("p");

for (let i = 0; i < verify.length; i++) {
  if (verify[i].textContent === "Verify") {
    verify[i].classList.add("verify");
  } else if (verify[i].textContent === "Sent") {
    verify[i].classList.add("sent");
  } else if (verify[i].textContent === "Recieved") {
    verify[i].classList.add("recieve");
  }
}
