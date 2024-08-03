let Increase = document.querySelector(`#Increase`);
let Decrease = document.querySelector(`#Decrease`);
let Reset = document.querySelector(`#Reset`);
let Counter = document.getElementById(`Counter`);
let btn = document.querySelector(`#btn`);
let Count = 0;

Increase.onclick = () => {
  Count += 1;
  Counter.textContent = `Count is : ${Count}`;
};
Reset.onclick = () => {
  Count = 0;
  Counter.textContent = `Count is : ${Count}`;
};
Decrease.onclick = () => {
  Count -= 1;
  Counter.textContent = `Count is : ${Count}`;
};
