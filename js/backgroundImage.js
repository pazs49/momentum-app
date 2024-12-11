export const setBackground = () => {
  const backgroundImages = ["day", "night"];
  const backgroundImageEl = document.querySelector(".image-background");

  backgroundImageEl.style.backgroundImage = `url(
    "/public/images/backgrounds/${
      new Date().getHours() <= 16 ? backgroundImages[0] : backgroundImages[1]
    }.jpg"
  )`;
};
