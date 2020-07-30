//FAQ ACCORDIONS

var acc = document.getElementsByClassName("question");
var acc1 = document.querySelectorAll(".suggestion > .question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
for (i = 0; i < acc1.length; i++) {
  acc1[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// SEARCH SUGGESTION FOR FAQ PAGE START
// const search = document.querySelector(".search");
// const suggestionPlanel = document.querySelector(".suggestion");
// const question = document.querySelectorAll(".question");
// const questions = Array.from(question);

// search.addEventListener("keyup", function() {
//   const input = search.value;
//   suggestionPlanel.innerHTML = "";
//   const suggestion = questions.filter(function(question) {
//     return question.innerText.toLowerCase().includes(input);
//   });
//   suggestion.forEach(function(suggested) {
//     const div = document.createElement("div");
//     div.innerHTML = suggested.innerText;
//     suggestionPlanel.appendChild(div);
//   });
//   if (input === "") {
//     suggestionPlanel.innerHTML = "";
//   }
// });

// SEARCH SUGGESTION FOR FAQ PAGE END
const search = document.querySelector(".search");
const suggestionPlanel = document.querySelector(".suggestion");
const questionContainer = document.querySelectorAll(".question-container");
const question = document.querySelectorAll(".question");
const questions = Array.from(questionContainer);

search.addEventListener("keyup", function() {
  const input = search.value;
  suggestionPlanel.innerHTML = "";

  const suggestion = questions.filter(function(questionContainer) {
    // for (i = 0; i < questions.length; i++) {
    return questionContainer.innerHTML.toLowerCase().includes(input);
    //   if (question.innerText.toLowerCase().includes(input)) {
    //     return questionContainer[i].innerHTML;
    //   }
  });
  suggestion.forEach(function(suggested) {
    const div = document.createElement("div");
    const view = document.querySelector(".question");
    view.classList.add("active");
    // suggested.innerHTML = questionContainer.innerHTML;
    div.innerHTML = suggested.innerHTML;
    div.className = "question-container";
    suggestionPlanel.appendChild(div);
  });
  if (input === "") {
    suggestionPlanel.innerHTML = "";
  }
});
