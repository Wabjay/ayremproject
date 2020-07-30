const showButton = [0, 1];
for (i = 0; i < showButton.length; i++) {
  const copyText = document.querySelectorAll(".crypto")[i];
  const copyButton = document.querySelectorAll(".copy")[i];
  const showText = document.querySelector("#pop");

  copyButton.onclick = function(e) {
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
