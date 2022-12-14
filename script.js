const nav = document.querySelector(".nav");
const popup = document.querySelector(".pop-up");
const close = document.querySelector(".close");
const link1 = document.querySelector(".link-1");
const link2 = document.querySelector(".link-2");
const link3 = document.querySelector(".link-3");
const link4 = document.querySelector(".link-4");
const link5 = document.querySelector(".link-5");

nav.addEventListener("click", function () {
  popup.classList.remove("hidden");
});

const closeFunction = function () {
  popup.classList.add("hidden");
};

close.addEventListener("click", closeFunction);
link1.addEventListener("click", closeFunction);
link2.addEventListener("click", closeFunction);
link3.addEventListener("click", closeFunction);
link4.addEventListener("click", closeFunction);
link5.addEventListener("click", closeFunction);
