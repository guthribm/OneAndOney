let year = document.getElementById("year");

let today = new Date();
let currentDay = today.getDay();
year.textContent = today.getFullYear();

function clearDays() {
  let days = document.querySelectorAll("tr");
  for (let day of days) {
    day.classList.remove("highlighted-day");
  }
}

clearDays();
if (currentDay === 0) {
  $("#sunday").addClass("highlighted-day");
} else if (currentDay === 1) {
  $("#monday").addClass("highlighted-day");
} else if (currentDay === 2) {
  $("#tuesday").addClass("highlighted-day");
} else if (currentDay === 3) {
  $("#wednesday").addClass("highlighted-day");
} else if (currentDay === 4) {
  $("#thursday").addClass("highlighted-day");
} else if (currentDay === 5) {
  $("#friday").addClass("highlighted-day");
} else if (currentDay === 6) {
  $("#saturday").addClass("highlighted-day");
}

$("#hamburger").click(() => {
  $(".menu").toggleClass("menu-open");
});

$("#close-menu").click(() => {
  $(".menu").toggleClass("menu-open");
});

$(".menu-link").click(() => {
  $(".menu").toggleClass("menu-open");
});

let header = $("#nav");
let sticky = header[0].offsetTop;

console.log(sticky);
