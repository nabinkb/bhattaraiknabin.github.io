function enterSite() {
  document.getElementById("intro-popup").style.display = "none";
  const mainContent = document.getElementById("main-content");
  mainContent.classList.remove("hidden");
  mainContent.classList.add("zoom-in");
}