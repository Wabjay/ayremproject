//where the notifications will show
var notifications = 10;
if (notifications) {
  for (i = 0; i < notifications; i++) {
    notice(i);
  }
}

function notice(i) {
  var transactions = document.querySelector(".transaction-border");
  var transactionStatus = document.createElement("div");
  transactionStatus.className = "transaction-status";
  transactions.appendChild(transactionStatus);

  // ITEM DIV AND CONTENT
  var item = document.createElement("div");
  item.className = " items";
  transactionStatus.appendChild(item);
  var productImg = document.createElement("img");
  productImg.src = "../../images/bitcoin.png";
  //    + pixName;
  var pDiv = document.createElement("div");
  var quantity = document.createElement("p");
  quantity.className = "quantity";
  quantity.innerHTML = "1gb Mtn";
  var destination = document.createElement("p");
  destination.className = "destination";
  destination.innerHTML = "08188026726";
  pDiv.appendChild(quantity);
  pDiv.appendChild(destination);
  item.appendChild(productImg);
  item.appendChild(pDiv);

  // SELECTION OPTION
  var paymentStatus = document.createElement("select");
  paymentStatus.className = "paymentStatus";

  var array = ["Verifying", "Sent", "Recieved", "Failed"];

  for (i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.text = array[i];
    option.value = array[i];
    paymentStatus.appendChild(option);
  }

  transactionStatus.appendChild(paymentStatus);

  //  COMMENT SECTION

  var comment = document.createElement("div");
  comment.className = "comment";

  var text = document.createElement("textarea");
  text.placeholder = "Wrong number";
  var button = document.createElement("button");
  button.value = "Submit";
  button.innerHTML = "Send Text";

  comment.appendChild(text);
  comment.appendChild(button);
  transactionStatus.appendChild(comment);
}
