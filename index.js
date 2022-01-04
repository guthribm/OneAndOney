let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let saturday = document.getElementById("saturday");
let sunday = document.getElementById("sunday");

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
  sunday.classList.add("highlighted-day");
} else if (currentDay === 1) {
  monday.classList.add("highlighted-day");
} else if (currentDay === 2) {
  tuesday.classList.add("highlighted-day");
} else if (currentDay === 3) {
  wednesday.classList.add("highlighted-day");
} else if (currentDay === 4) {
  thursday.classList.add("highlighted-day");
} else if (currentDay === 5) {
  friday.classList.add("highlighted-day");
} else if (currentDay === 6) {
  saturday.classList.add("highlighted-day");
}

// let exterior = document.getElementById("exterior-img");

// function scrollHandler(e) {
//   console.log(e);
// }

// exterior.addEventListener("click", (e) => console.log(e.target));
