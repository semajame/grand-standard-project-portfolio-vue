// scrollUtils.js
export const toggleKnow = () => {
  const section = document.getElementById("about__section");

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
};
