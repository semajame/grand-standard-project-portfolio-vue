// headerUtils.js

export const headerNavClose = () => {
  const ul = document.querySelector("ul");
  const scrollPos = window.scrollY;
  ul.classList.remove("active");

  const logo = document.querySelector(".logo__img");

  if (scrollPos > 20) {
    logo.style.filter = "invert(1)";
  } else {
    logo.style.filter = "invert(0)";
  }
};
