const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("show-dates") === "true") {
  document.querySelector(".mission-dates").style.display = "flex";
}
