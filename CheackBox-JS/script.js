let Subscribed = document.getElementById(`Subscribed`);
let radioBtn1 = document.getElementById(`radioBtn1`);
let radioBtn2 = document.getElementById(`radioBtn2`);
let radioBtn3 = document.getElementById(`radioBtn3`);
let submitBtn = document.getElementById(`submitBtn`);
let rslt = document.getElementById(`rslt`);
let cardRslt = document.getElementById(`cardRslt`);

submitBtn.onclick = () => {
  if (Subscribed.checked) {
    rslt.textContent = "You Are Subscribed";
  } else {
    rslt.textContent = "You Are Not Subscribed";
  }

  if (radioBtn1.checked) {
    cardRslt.textContent = "You Are Subscribed in Visa";
  } else if (radioBtn2.checked) {
    cardRslt.textContent = "You Are Subscribed in MasterCard";
  } else if (radioBtn3.checked) {
    cardRslt.textContent = "You Are Subscribed in Strip";
  } else {
    cardRslt.textContent = "You Are Not Subscribed to Any Card";
  }
};
