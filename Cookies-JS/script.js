const firstText = document.getElementById('firstText');
const lastText = document.getElementById('lastText');
const submitBtn = document.getElementById('submitBtn');
const cookieBtn = document.getElementById('cookieBtn');

submitBtn.addEventListener('click',()=>{
  setCookie("firstName",firstText.value,365)
  setCookie("lastName",lastText.value,365)
})
cookieBtn.addEventListener('click',()=>{
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
})

// document.cookie =
//   "firstName=SpongeBop; expires=Sun ,1 January 2030 12:00:00 UTC; path=/";
// document.cookie =
//   "lastName=SquarePants; expires=Sun ,1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);

setCookie("email", "yosefelsersy@gmail.com", 356);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
// console.log(document.cookie);

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
  setCookie(name,null,null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let result = null;
    console.log(cArray);
    cArray.forEach(e => {
      if(e.indexOf(name) == 0){
        result = e.substring(name.length + 1)
      }
    })
    return result;
}