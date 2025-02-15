function showCryptoForm() {
    document.getElementById("crypto-form").classList.remove("hidden");
    document.getElementById("bank-form").classList.add("hidden");
    document.getElementById("credit-card-form").classList.add("hidden");
    document.getElementById("paypal-form").classList.add("hidden");
}

function showBankForm() {
    document.getElementById("crypto-form").classList.add("hidden");
    document.getElementById("bank-form").classList.remove("hidden");
    document.getElementById("credit-card-form").classList.add("hidden");
    document.getElementById("paypal-form").classList.add("hidden");
}

function showCreditCardForm() {
    document.getElementById("crypto-form").classList.add("hidden");
    document.getElementById("bank-form").classList.add("hidden");
    document.getElementById("credit-card-form").classList.remove("hidden");
    document.getElementById("paypal-form").classList.add("hidden");
}

function showPayPalForm() {
    document.getElementById("crypto-form").classList.add("hidden");
    document.getElementById("bank-form").classList.add("hidden");
    document.getElementById("credit-card-form").classList.add("hidden");
    document.getElementById("paypal-form").classList.remove("hidden");
}
