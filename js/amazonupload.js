numberValue = localStorage.getItem("textValue");
//ONCLICK HIDE AND DISPLAY NUMBER OF FILE SELECTED
var cardUpload = document.querySelector("#cardUpload");
var file = document.getElementById("image");
var selectedCard = document.querySelector("#selectedCard");
var selected = document.querySelectorAll(".selected");
var selectedCardWrapper = document.querySelector(".selectedCard-wrapper");
var cardError = document.getElementById("error");
cardError.innerHTML = "Error to many cards selected";
var uploadedFile = 0;

function selectDiv() {
  console.log(uploadedFile);
  file.oninput = function() {
    // GET THE FILE INPUT.
    var newFile = file.files.length;

    if (newFile < numberValue) {
      for (var i = 0; i < newFile; i++) {
        var fileName = file.files.item(i);
        cardDiv(fileName);
      }
      addMorePix.classList.remove("hidecard");
    } else if (newFile > numberValue) {
      for (var i = 0; i < newFile; i++) {
        var fileName = file.files.item(i);
        cardDiv(fileName);
        cardError.classList.remove("hidecard");
      }
    } else {
      for (var i = 0; i < newFile; i++) {
        var fileName = file.files.item(i);
        cardDiv(fileName);
      }
    }
    uploadedFile += file.files.length;
  };

  //ADD MORE IMAGES TO COMPLETE THE NUMBER OF SELECTED CARDS
  var addMore = document.getElementById("addMore");
  addMore.oninput = function() {
    // GET THE FILE INPUT.
    var addMoreFile = document.getElementById("addMore").files;

    var moreFile = addMoreFile.length;
    var totalFile = numberValue - uploadedFile;

    console.log("more " + moreFile);

    if (moreFile <= totalFile) {
      // THE TOTAL FILE COUNT.

      for (var i = 0; i < moreFile; i++) {
        var fileName = addMoreFile.item(i);
        // DISPLAY THE IMAGE DETAILS
        cardDiv(fileName);
        console.log("total " + totalFile);
      }
      // ALSO DISPLAY THE ADD MORE IMAGE BUTTON
      addMorePix.classList.remove("hidecard");
    } else if (moreFile > totalFile) {
      for (var i = 0; i < moreFile; i++) {
        var fileName = addMoreFile.item(i);

        //DISPLAY DATA
        cardDiv(fileName);
        cardError.classList.remove("hidecard");
        //DISPLAY TOO MUCH FILE
      }
      //IF NUMBER OF UPLOADED IMAGE IS EQUALL TO NUMBER OF SELECTED CARDS
    }

    uploadedFile += addMoreFile.length;
    document.getElementById("addMore").value = "";
    console.log(moreFile);
    if (moreFile >= totalFile) {
      addMorePix.classList.add("hidecard");
    }
    if (moreFile === totalFile) {
    }
  };

  //FUNCTION TO SHOW UPLOAD RECIEPT

  var selectedCard = document.getElementById("selectedCard");
  var addMorePix = document.getElementById("addMorePix");
  var form = document.createElement("form");
  // form.style.display = "none";
  form.setAttribute("id", "myForm");
  selectedCard.insertBefore(form, addMorePix);

  //FUNCTION TO DISPLAY UPLOADED CARD
  function cardDiv(i) {
    document.getElementById("cardUpload").classList.add("hidecard");
    var selectedCard = document.getElementById("selectedCard");

    var selected = document.createElement("div");
    selected.className = "selected";

    var selectedCardWrapper = document.createElement("div");
    selectedCardWrapper.className = "selectedCard-wrapper";

    var imgUpload = document.createElement("div");
    imgUpload.className = "upload-img";

    var img = document.createElement("img");
    img.src = "../../images/upload.png";

    var deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "../../images/delete.png");
    deleteImg.className = "delete";

    var details = document.createElement("div");
    details.className = "details";

    var filename = document.createElement("p");
    var fname = i.name; // THE NAME OF THE FILE.
    var fnamePath = i.fullPath;
    var fname1 = document.createTextNode(fname);
    filename.className = "filename";
    filename.appendChild(fname1);

    var filesize = document.createElement("p");
    var fsize = i.size; // THE SIZE OF THE FILE.
    fsize.toFixed(2);

    var fsize1 = document.createTextNode(fsize + " kb");
    filesize.className = "filesize";
    filesize.appendChild(fsize1);

    details.appendChild(filename);
    details.appendChild(filesize);
    imgUpload.appendChild(img);
    imgUpload.appendChild(details);

    selectedCardWrapper.appendChild(imgUpload);
    selectedCardWrapper.appendChild(deleteImg);

    selected.appendChild(selectedCardWrapper);
    selectedCard.insertBefore(selected, addMorePix);

    // FORM DATA FETCH FROM THE UPLOADED PICTURES DIV

    var formDetails = document.createElement("div");
    formDetails.className = "formDetails";
    formDetails.style.display = "none";

    var cardFilename = document.createElement("input");
    cardFilename.setAttribute("type", "text");

    cardFilename.setAttribute("value", filename.innerHTML);

    var cardFilesize = document.createElement("input");
    cardFilesize.setAttribute("type", "text");

    cardFilesize.setAttribute("value", filesize.innerHTML);

    formDetails.appendChild(cardFilename);
    formDetails.appendChild(cardFilesize);
    form.appendChild(formDetails);

    // selectedCard.insertBefore(selected, form);
    // selectedCard.appendChild(formDetails);

    // FUNCTION TO DELETE SELECTED FILE
    deleteImg.onclick = function() {
      selected.remove();
      formDetails.remove();
      uploadedFile--;

      if (uploadedFile < numberValue) {
        addMorePix.classList.remove("hidecard");
        cardError.classList.add("hidecard");
      } else if (uploadedFile > numberValue) {
        cardError.classList.remove("hidecard");
      } else {
        cardError.classList.add("hidecard");
        console.log("uploadFile =" + uploadedFile);
      }
      if (uploadedFile === 0) {
        cardUpload.classList.remove("hidecard");
        addMorePix.classList.add("hidecard");
      }
    };
    // NAME OF THE FORM INPUT DATA
    var detailsLen = document.querySelectorAll(".formDetails");
    for (i = 1; i <= detailsLen.length; i++) {
      cardFilename.setAttribute("name", "cardFilename-" + i);
      cardFilesize.setAttribute("name", "cardFilesize-" + i);
    }
    console.log(detailsLen.length);
  }
}
selectDiv();

/****************UPLOAD ECODE THE BCODE OF THE CARDS**************************/

var ecodeContainer = document.querySelector("#uploadEcode");
ecodeContainer.classList.add("hidecard");

var ecode = document.getElementById("cardCode");

ecode.onchange = function() {
  if (ecode.checked) {
    for (let i = 0; i < numberValue; i++) {
      ecode1(i);
    }
  } else {
    ecodeContainer.innerHTML = "";
  }
  ecodeContainer.classList.toggle("hidecard");
};

function ecode1(i) {
  var uploadEcode = document.createElement("div");
  uploadEcode.className = "upload-ecode";

  var cardNumber = document.createElement("p");
  var codeNumber = document.createTextNode("card code " + (1 + parseInt([i])));
  cardNumber.className = "cardNumber";
  cardNumber.appendChild(codeNumber);

  var cardEcode = document.createElement("input");
  cardEcode.setAttribute("type", "text");
  cardEcode.setAttribute("name", "cardEcode");
  cardEcode.setAttribute("placeholder", "Enter your code");

  uploadEcode.appendChild(cardNumber);
  uploadEcode.appendChild(cardEcode);
  ecodeContainer.appendChild(uploadEcode);
}
//

/********SCRIPT FOR UPLOAD RECIEPT**************************/

function showReceipt() {
  var receipt = document.getElementById("cardReceipt");
  if (receipt.checked) {
    document.getElementById("uploadReceipt").style.display = "block";
  } else {
    document.getElementById("uploadReceipt").style.display = "none";
  }
}

var receipt = document.getElementById("receipt");

receipt.oninput = function() {
  var fileName = receipt.files.item(0);
  recieptDiv();
};
function recieptDiv() {
  document.querySelector(".hideP").classList.add("hidecard");
  document.querySelector(".upload-receipt").classList.add("hidecard");

  var selectedCard = document.getElementById("selectedReceipt");

  var selected = document.createElement("div");
  selected.className = "selected";

  var selectedCardWrapper = document.createElement("div");
  selectedCardWrapper.className = "selectedCard-wrapper";

  var imgUpload = document.createElement("div");
  imgUpload.className = "upload-img";

  var img = document.createElement("img");
  img.src = "../../images/upload.png";

  var deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "../../images/delete.png");
  deleteImg.className = "delete";

  var details = document.createElement("div");
  details.className = "details";

  var filename = document.createElement("p");
  var fname = receipt.files[0].name; // THE NAME OF THE FILE.
  var fname1 = document.createTextNode(fname);
  filename.className = "filename";
  filename.appendChild(fname1);
  console.log(filename);

  var filesize = document.createElement("p");
  var fsize = receipt.files[0].size; // THE SIZE OF THE FILE.

  var fsize1 = document.createTextNode(fsize + " kb");
  filesize.className = "filesize";
  filesize.appendChild(fsize1);

  details.appendChild(filename);
  details.appendChild(filesize);
  imgUpload.appendChild(img);
  imgUpload.appendChild(details);

  selectedCardWrapper.appendChild(imgUpload);
  selectedCardWrapper.appendChild(deleteImg);

  selected.appendChild(selectedCardWrapper);

  selectedCard.appendChild(selected);

  deleteImg.onclick = function() {
    selected.remove();
    document.querySelector(".hideP").classList.remove("hidecard");
    document.querySelector(".upload-receipt").classList.remove("hidecard");
    //DISPLAY CARD BACK
  };
}
