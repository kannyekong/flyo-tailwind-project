// Dark switch button
const darkIcon = document.getElementById("dark");
// light switch
const lightIcon = document.getElementById("light");
// logo for light mode
const lightModeLogo = document.getElementById("lightModeLogo");
// logo for dark mode
const darkModeLogo = document.getElementById("darkModeLogo");
// background targeting change
const backgroundImg = document.getElementById("bg");

function handlerFxnDark() {
  // Tweaking the darkmode class
  document.documentElement.classList.add("dark");
  // Tweaking the Icons
  darkIcon.classList.add("hidden");
  lightIcon.classList.remove("hidden");
  // Tweaking the backgrounds
  darkModeLogo.classList.remove("hidden");
  lightModeLogo.classList.add("hidden");
  // Tweaking a background Image
  backgroundImg.classList.remove("bg-bgLightMode");
  backgroundImg.classList.add("bg-bgDarkMode");
}
function handlerFxnLight() {
  //Tweaking the darkmode class
  document.documentElement.classList.remove("dark");
  // Tweaking the icons
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
  // Tweaking the logos
  lightModeLogo.classList.remove("hidden");
  darkModeLogo.classList.add("hidden");
  // Tweaking a background Image
  backgroundImg.classList.remove("bg-bgDarkMode");
  backgroundImg.classList.add("bg-bgLightMode");
}

// Event Listeners for light and darkmode buttons
lightIcon.addEventListener("click", handlerFxnLight);
darkIcon.addEventListener("click", handlerFxnDark);
