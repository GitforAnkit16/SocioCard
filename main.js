function redirectToDetailsPage() {
  window.location.href = 'details.html';
}
function redirectToCardPage() {
  window.location.href = 'card.html';
}
function verifySocialMediaHandle() {
  var socialMediaHandle = document.getElementById("social-media-handle").value;
  document.getElementById("verification-status").innerText = "Your social media handle '" + socialMediaHandle + "' is verified.";
  document.getElementById("verify-button").style.opacity = "0";
}

var bankBalance = 0;
var productPrice = 0;

function addMoney() {
    var moneyInput = parseInt(document.getElementById("money-input").value);
    bankBalance += moneyInput;
    document.getElementById("bank-balance").innerText = "Your current bank balance is ₹" + bankBalance.toFixed(2);
}

function buyProduct() {
    var productInfo = document.getElementById("product").value.split("-");
    var product = productInfo[0];
    productPrice = parseInt(productInfo[1]);
    if (bankBalance >= productPrice) {
        bankBalance -= productPrice;
        document.getElementById("bank-balance").innerText = "Your current bank balance is ₹" + bankBalance.toFixed(2);
        alert(product + " bought. Your current bank balance has been updated.");
    } else {
        alert("Insufficient funds. Please add money to your card.");
    }
}

function verifyPost() {
    var socialMediaHandle = document.getElementById("social-media-handle").value;
    var post = document.getElementById("post").value;
    document.getElementById("claim-button").style.display = "block";
    alert("Post verified.");
}

function claimCashback() {
    if (productPrice === 0) {
        alert("Please buy a product first to claim cashback.");
        return;
    }
    var cashbackPercentage = Math.floor(Math.random() * 11) + 10;
    var claimedAmount = (cashbackPercentage / 100) * productPrice;
    bankBalance += claimedAmount;
    document.getElementById("bank-balance").innerText = "Your current bank balance is ₹" + bankBalance.toFixed(2);
    alert("Cashback claimed: ₹" + claimedAmount.toFixed(2) + ". Your bank balance has been updated.");
    productPrice = 0; 
}
