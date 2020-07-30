// PRODUCTS IN PRODUCT PAGE

function products() {
  var add = document.getElementById("add");
  var show = document.getElementById("show");
  var product = document.getElementById("product");
  product.classList.add("hide-card");
  var dataBtn = document.getElementById("dataBtn");
  var giftBtn = document.getElementById("giftBtn");
  var cryptoBtn = document.getElementById("cryptoBtn");
  var data = document.getElementById("data-container");
  data.classList.add("hide-card");
  var gift = document.getElementById("giftcard-container");
  gift.classList.add("hide-card");
  var what = document.getElementById("coin-container");
  what.classList.add("hide-card");
  var country = document.getElementById("country");

  dataBtn.onclick = function() {
    country.classList.add("hide-card");
    add.classList.add("hide-card");
    show.classList.add("hide-card");
    product.classList.remove("hide-card");
    data.classList.remove("hide-card");
    gift.classList.add("hide-card");
    what.classList.add("hide-card");
  };
  giftBtn.onclick = function() {
    country.classList.add("hide-card");
    add.classList.add("hide-card");
    show.classList.add("hide-card");
    product.classList.remove("hide-card");
    gift.classList.remove("hide-card");
    data.classList.add("hide-card");
    what.classList.add("hide-card");
  };
  cryptoBtn.onclick = function() {
    country.classList.add("hide-card");
    add.classList.add("hide-card");
    show.classList.add("hide-card");
    product.classList.remove("hide-card");
    what.classList.remove("hide-card");
    data.classList.add("hide-card");
    gift.classList.add("hide-card");
  };
}

products();

// DISPLAY THE ADD PRODUCT PART BELOW

function add() {
  var add = document.getElementById("add");
  var addData = document.getElementById("addData");
  var addGift = document.getElementById("addGift");
  var addCrypto = document.getElementById("addCrypto");
  var addDataBtn = document.getElementById("addDataBtn");
  var addGiftBtn = document.getElementById("addGiftBtn");
  var addCryptoBtn = document.getElementById("addCryptoBtn");

  addDataBtn.onclick = function() {
    add.classList.remove("hide-card");
    addData.classList.toggle("hide-card");
    addGift.classList.add("hide-card");
    addCrypto.classList.add("hide-card");
  };
  addGiftBtn.onclick = function() {
    add.classList.remove("hide-card");
    addData.classList.add("hide-card");
    addGift.classList.toggle("hide-card");
    addCrypto.classList.add("hide-card");
  };

  addCryptoBtn.onclick = function() {
    add.classList.remove("hide-card");
    addData.classList.add("hide-card");
    addGift.classList.add("hide-card");
    addCrypto.classList.toggle("hide-card");
  };
}
add();

// DISPLAY SHOW PRODUCTS
function showProduct() {
  var show = document.getElementById("show");
  var showData = document.getElementById("showData");
  var showGift = document.getElementById("showGift");
  var showCrypto = document.getElementById("showCrypto");
  var viewData = document.getElementById("viewData");
  var viewGift = document.getElementById("viewGift");
  var viewCrypto = document.getElementById("viewCrypto");

  viewData.onclick = function() {
    show.classList.remove("hide-card");
    showData.classList.remove("hide-card");
    showGift.classList.add("hide-card");
    showCrypto.classList.add("hide-card");
  };
  viewGift.onclick = function() {
    show.classList.remove("hide-card");
    showData.classList.add("hide-card");
    showGift.classList.remove("hide-card");
    showCrypto.classList.add("hide-card");
  };
  viewCrypto.onclick = function() {
    show.classList.remove("hide-card");
    showData.classList.add("hide-card");
    showGift.classList.add("hide-card");
    showCrypto.classList.remove("hide-card");
  };
}

showProduct();

function country() {
  var viewCountry = document.getElementById("viewCountry");
  var country = document.getElementById("country");
  viewCountry.onclick = function() {
    country.classList.remove("hide-card");
  };
}
country();
