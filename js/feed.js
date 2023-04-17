function myfunctoin() {
  const ellipsisbtn = document.querySelector(".hide-function");
  const Ellipsisbtn = document.querySelector(".showReportSection");
  ellipsisbtn.classList.add("activeEllipsis");
  Ellipsisbtn.classList.remove("active");
}

function hideFunction() {
  const hideDiv = document.querySelector(".hide-function");
  hideDiv.classList.remove("activeEllipsis");
}

function showHover() {
  const showMeDiv = document.querySelector(".username123Hover");
  showMeDiv.classList.add("active2");
}
function hideHover() {
  const hideMeDiv = document.querySelector(".username123Hover");
  hideMeDiv.classList.remove("active2");
}
