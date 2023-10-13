export const hideMenu = () => {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
};

export const showMenu = () => {
  const menu = document.getElementById("menu");
  menu.style.display = "block";
};

export const startExperience = (controls) => {
  controls.lock();
  hideMenu();
};

export const setupPlayButton = (controls) => {
  document.addEventListener("click", () => startExperience(controls));
};
