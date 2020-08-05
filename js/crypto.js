const showButton = [0, 1];
for (i = 0; i < showButton.length; i++) {
  const copyText = document.querySelectorAll(".crypto")[i];
  const copyButton = document.querySelectorAll(".copy")[i];
  const showText = document.querySelector("#pop");

  copyButton.onclick = function (e) {
    e.preventDefault();
    copyText.select();
    copyText.setSelectionRange(0, 99999); // used for mobile phone
    document.execCommand("copy");
    showText.style.background = "rgb(35, 163, 10)";
    showText.innerHTML = `${copyText.value}`;
    setTimeout(() => {
      showText.innerHTML = "";
      showText.style.opacity = 0;
    }, 1000);
    if (copyText.value === "") {
      showText.style.opacity = 0;
    } else {
      showText.style.opacity = 1;
    }

    console.log(showButton.length);
  };
}

// SEARCH SUGGESTION FOR FAQ PAGE END
const search = document.querySelector(".search");
const suggestionPlanel = document.querySelector(".suggestion");
const questionContainer = document.querySelectorAll(".question-container");
const question = document.querySelectorAll(".question");
const questions = Array.from(questionContainer);

search.addEventListener("keyup", function () {
  const input = search.value;
  suggestionPlanel.innerHTML = "";

  const suggestion = questions.filter(function (questionContainer) {
    // for (i = 0; i < questions.length; i++) {
    return questionContainer.innerHTML.toLowerCase().includes(input);
    //   if (question.innerText.toLowerCase().includes(input)) {
    //     return questionContainer[i].innerHTML;
    //   }
  });
});
