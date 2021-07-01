const trigger = document.querySelector(".trigger");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const search = document.getElementById("search");
const searchDiv = document.querySelector(".search-div");
search.addEventListener("click", addSearch);
trigger.addEventListener("click", addClass);
close.addEventListener("click", removeClass);
function addClass() {
  body.classList.toggle("is-menu-visible");
}
function removeClass() {
  body.classList.remove("is-menu-visible");
}
function addSearch() {
  searchDiv.classList.toggle("visible");
}
