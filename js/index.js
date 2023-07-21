window.onload = function () {
  const menue_button = document.querySelector(".right-bar");
  const mobile_nav = document.querySelector(".mobile-nav");

  menue_button.addEventListener("click", function () {
    menue_button.classList.toggle("is-active");
    mobile_nav.classList.toggle("is-active");
  });
};
