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
  $("#close-menu").toggleClass("spin");
});

$("#close-menu").click(() => {
  $(".menu").toggleClass("menu-open");
  $("#close-menu").toggleClass("spin");
});

$(".menu-link").click(() => {
  $(".menu").toggleClass("menu-open");
  $("#close-menu").toggleClass("spin");
});

const sections = document.querySelectorAll(".invisible");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -125px 0px",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in");
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

const options2 = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const awardTexts = document.querySelectorAll(".strain");

const flashObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("flash");
  });
}, options2);

awardTexts.forEach((section) => {
  flashObserver.observe(section);
});
