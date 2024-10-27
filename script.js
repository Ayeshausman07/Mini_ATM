let correctPin;
let userBalance = 5000;

function setPin() {
    correctPin = document.getElementById("pin-input").value;
    if (correctPin) {
        updateMessage("PIN set! Enter your PIN to access the ATM."); // Display success message
        document.getElementById("pin-input").value = ""; // Clear input after setting the PIN

        // Change button to validate PIN
        document.getElementById("atm-actions").innerHTML = `
            <button onclick="validatePin()" class="btn btn-primary atm-btn btn-block">
                <i class="fas fa-key"></i> Enter PIN
            </button>
        `;
    } else {
        updateMessage("Please enter a valid PIN.");
    }
}
function validatePin() {
    let pin = document.getElementById("pin-input").value;
    if (pin === correctPin) {
        showATMOptions("Welcome! Choose an option.");
    } else {
        updateMessage("Incorrect PIN. Please try again.");
    }
}

function showATMOptions(message) {
    document.querySelector(".card-body").innerHTML = `
        <img class="atm-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLLpi36JZXj9brCaTONslIgo1fttWwX01I45oGwrhhsZrxHZfgy4II1O-zRWRgbqQvT8&usqp=CAU" class="rounded-circle mb-3" alt="ATM Logo">
        <p id="atm-message" class="font-weight-bold">${message}</p>
        <div class="btn-group-vertical btn-block">
            <button onclick="checkBalance()" class="btn btn-info atm-btn">
                <i class="fas fa-wallet"></i> Check Balance
            </button>
            <button onclick="deposit()" class="btn btn-success atm-btn">
                <i class="fas fa-coins"></i> Deposit
            </button>
            <button onclick="withdraw()" class="btn btn-warning atm-btn">
                <i class="fas fa-money-bill-wave"></i> Withdraw
            </button>
            <button onclick="exitAtm()" class="btn btn-danger atm-btn">
                <i class="fas fa-sign-out-alt"></i> Exit
            </button>
        </div>
    `;
}

function updateMessage(message) {
    document.getElementById("atm-message").textContent = message;
}

function checkBalance() {
    updateMessage("Your current balance is: $" + userBalance);
}

function deposit() {
    let amount = prompt("Enter the amount to deposit:");
    let depositAmount = parseFloat(amount);
    if (depositAmount && depositAmount > 0) {
        userBalance += depositAmount;
        updateMessage("You have deposited: $" + depositAmount + ". New balance is: $" + userBalance);
    } else {
        updateMessage("Invalid amount. Please enter a valid number.");
    }
}

function withdraw() {
    let amount = prompt("Enter the amount to withdraw:");
    let withdrawAmount = parseFloat(amount);
    if (withdrawAmount && withdrawAmount > 0) {
        if (withdrawAmount <= userBalance) {
            userBalance -= withdrawAmount;
            updateMessage("You have withdrawn: $" + withdrawAmount + ". Remaining balance is: $" + userBalance);
        } else {
            updateMessage("Insufficient balance!");
        }
    } else {
        updateMessage("Invalid amount. Please enter a valid number.");
    }
}

function exitAtm() {
    document.querySelector(".card-body").innerHTML = `
        <img class=".atm-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQwOwyXTisf5Vngfb82TuntSisbenRr2fyQ&s" class="rounded-circle mb-3" alt="ATM Logo">
        <h5 class="font-weight-bold">Thank You!</h5>
        <p>Thank you for using the ATM. Goodbye!</p>
    `;
}