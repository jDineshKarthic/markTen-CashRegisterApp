const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function error(msg) {
  message.style.display = 'block';
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = 'none';
}
hideMessage();

checkButton.addEventListener('click', () => {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      var balanceAmount = cashGiven.value - billAmount.value;
      notesToGive(balanceAmount);
    } else {
      error('Cash given should be greater or equal to Bill Amount');
    }
  } else {
    error('Enter a valid Bill Amount');
  }
});
function notesToGive(Amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(Amount / availableNotes[i]);
    noOfNotes[i].innerText = numberOfNotes;

    Amount = Amount % availableNotes[i];
  }
}
