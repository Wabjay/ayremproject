// SCRIPT FOR THE SECOND PAGE

//MAIN PAE SCRIPTS TO BE USED
var cardType = document.getElementById("cardType");
var cardRange = document.getElementById("cardRange");
var cardCountry = document.getElementById("cardCountry");
var cardDetails = document.querySelector(".card-details-wrapper");
var numberOfCard = document.getElementById("numberOfCard");
var hidecard = document.querySelector(".hidecard");

// where the card inform will APPEAR

var card = document.querySelector(".card-type");
var cardValue = document.querySelector(".card-value");
var country = document.querySelector(".country");

//DISPLAY THE CARD IMAGE WITH THE INFORMATIONS ON IT

// DISPLAY CARD TYPE
if (cardType) {
  cardType.oninput = function() {
    //ASSIGN THE VAUES OF THE INPUT TO DISPLAY ON THE CARD

    card.innerHTML = cardType.value;
    cardValue.innerHTML = cardRange.value;
    country.innerHTML = cardCountry.value;

    // DISPLAY THE CARD
    hidecard.style.display = "block";
  };
}
//DISPLAY CARD RANGE
if (cardRange) {
  cardRange.oninput = function() {
    //ASSIGN THE VALUES OF THE INPUT TO DISPLAY ON THE CARD

    card.innerHTML = cardType.value;
    cardValue.innerHTML = cardRange.value;
    country.innerHTML = cardCountry.value;

    // DISPLAY THE CARD
    hidecard.style.display = "block";
  };
}

//DISPLAY CARD COUNTRY
if (cardCountry) {
  cardCountry.oninput = function() {
    // VALUE OF THE CARD EQUIVALENT TO NAIRA

    //CARD PRICE DIV
    var cardPriceDiv = document.querySelector(".card-price-wrapper");
    cardPriceDiv.style.display = "block";

    var cardPrice = document.querySelector(".card-price");
    if (cardCountry.value == "GERMANY") {
      cardPrice.innerHTML = "N" + 320;
    } else if (cardCountry.value == "USA") {
      cardPrice.innerHTML = "N" + 380;
    } else if (cardCountry.value == "U.K") {
      cardPrice.innerHTML = "N" + 400;
    } else {
      cardPrice.innerHTML = "";
    }

    //ASSIGN THE VALUES OF THE INPUT TO DISPLAY ON THE CARD

    card.innerHTML = cardType.value;
    cardValue.innerHTML = cardRange.value;
    country.innerHTML = cardCountry.value;

    // DISPLAY THE CARD
    hidecard.style.display = "block";
  };
}

// SELECT THE NUMBER OF CARDS TO SELL
var getInput;
//TOTAL SUM OF CARD
var calc = 0;

// APPEND THE SELECTION BOXES HERE
var cardAmount = document.createElement("div");
cardAmount.className = "cardAmount";
var append = document.querySelector("#append");
append.appendChild(cardAmount);

var totalPrice = document.querySelector(".totalPrice");
var sum = document.querySelector(".sum");

numberOfCard.onchange = function() {
  // CLEAR CARDAMOUNT DIV FIRST
  cardAmount.innerHTML = "";

  // SUM UP OF THE TOTAL PRICE
  totalPrice.style.display = "block";
  sum.style.display = "block";

  // DEFINE TO SAFE TO LocalStorage
  getInput = numberOfCard.value;
  console.log(getInput + " getinput");

  for (let i = 0; i < numberOfCard.value; i++) {
    cardNumber(i);

    var selectedPrice = document.querySelectorAll(".cardAmount1");

    //FOR EACH SELECTED CARD PRICE
    for (let input = 0; input < selectedPrice.length; input++) {
      selectedPrice[input].oninput = function() {
        selectedPrice.innerHTML = selectedPrice[input].value;
        console.log(selectedPrice[input].value);

        //CALCULATE THE SUM OF THE CARDS
        calc = calc + parseInt(selectedPrice[input].value);
        console.log(calc);
        totalPrice.innerHTML = "$" + calc;
      };
    }
  }
};

/*USE LocalStorage to transfer value from one page
  to another page and use the value to createElement
   on the page*/
function result() {
  localStorage.setItem("textValue", getInput);
}
//CARD VALUE
function cardNumber(i) {
  //To be appended to CardAmount
  var label = document.createElement("label");
  label.className = "label";
  label.innerHTML = "Card " + (parseInt([i]) + 1);
  cardAmount.appendChild(label);
  var array = ["", 50, 100, 200, 500, 1000];
  var arrayText = ["--Select--", "$50", "$100", "$200", "$500", "$1000"];
  var selectList = document.createElement("select");
  selectList.className = "cardAmount1";
  cardAmount.appendChild(selectList);
  cardAmount.style.display = "block";
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = arrayText[i];
    selectList.appendChild(option);
  }
}
