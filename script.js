var navbarLI = document.getElementsByTagName("li");
var rcMenu = document.getElementsByClassName("rcMenu")[0];
var close = document.getElementsByClassName("fa-power-off")[0];
let input = document.getElementsByTagName("input")[0];
var winIcon = document.getElementById("winIcon");
var box = document.getElementsByClassName("box")[0];
var dateTime = document.getElementsByClassName("date")[0];
var hours = document.getElementById("time");

function searchGoogle(event) {
 event.preventDefault(); // Prevents the form from being submitted normally

 const searchInput = document.querySelector(".search-input");
 const searchQuery = input.value.trim();

 if (searchQuery) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
   searchQuery
  )}`;
  window.open(searchUrl, "_blank");
 }
}

setInterval(function () {
 var time = new Date();
 var date = time.getDate();
 var month = time.getMonth() + 1;
 var year = time.getFullYear();
 var hrs = time.getHours();
 var mins = time.getMinutes();
 var period;

 if (hrs > 12 || mins < 10) {
  hrs = hrs - 12;
  period = "PM";
 } else {
  period = "AM";
 }

 dateTime.innerText = date + "/" + month + "/" + year;
 hours.innerText = hrs + ":" + (mins < 10 ? "0" + mins : mins) + " " + period;
}, 1000);

winIcon.addEventListener("click", function () {
 if (box.classList.contains("slide-in")) {
  box.classList.remove("slide-in");
  box.classList.add("slide-out");
  setTimeout(function () {
   box.style.width = "0px";
   winIcon.style.background = "none";
  }, 300);
 } else {
  box.style.width = "500px";
  box.classList.add("slide-in");
  box.classList.remove("slide-out");
  winIcon.style.background = "rgba(255, 255, 255, 0.5)";
 }
});

close.addEventListener("click", () => {
 location.reload();
});
var navbarImages = document.querySelectorAll("li.navbar img");

for (let i = 0; i < navbarImages.length; i++) {
 const image = navbarImages[i];
 const parentLI = image.parentNode;

 image.addEventListener("click", function () {
  if (parentLI.classList.contains("bg")) {
   parentLI.classList.remove("bg");
  } else {
   // Remove the background from previously clicked icons
   for (let j = 0; j < navbarImages.length; j++) {
    const parent = navbarImages[j].parentNode;
    parent.classList.remove("bg");
   }
   // Add background to the clicked icon's parent LI
   parentLI.classList.add("bg");
  }
  // Perform other actions related to the clicked icon
  // ...
 });
}

window.addEventListener("contextmenu", (event) => {
 event.preventDefault();

 const {clientX, clientY} = event;
 const menuWidth = rcMenu.offsetWidth;
 const menuHeight = rcMenu.offsetHeight;
 const windowWidth = window.innerWidth;
 const windowHeight = window.innerHeight;

 let left =
  clientX + menuWidth > windowWidth ? windowWidth - menuWidth : clientX;
 let top =
  clientY + menuHeight > windowHeight ? windowHeight - menuHeight : clientY;

 rcMenu.style.display = "flex";
 rcMenu.style.transform = `translate(${left}px, ${top}px)`;
});

window.addEventListener("click", () => {
 rcMenu.style.display = "none";
});
