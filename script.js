let lightMode = localStorage.getItem("lightMode");
const switchButton = document.querySelector("#themeToggle");

const addLightMode = () => {
  document.body.classList.add("lightMode");
  localStorage.setItem("lightMode", "active");
};

const removeLightMode = () => {
  document.body.classList.remove("lightMode");
  localStorage.setItem("lightMode", null);
};
if (lightMode === "active") addLightMode();

switchButton.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  lightMode !== "active" ? addLightMode() : removeLightMode();
});
