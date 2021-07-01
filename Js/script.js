const trigger = document.querySelector(".trigger");
const body = document.querySelector("body");
const close = document.querySelector(".close");
trigger.addEventListener("click", addClass);
close.addEventListener("click", removeClass);
function addClass() {
  body.classList.toggle("is-menu-visible");
}
function removeClass() {
  body.classList.remove("is-menu-visible");
}
