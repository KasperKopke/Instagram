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
function showComment() {
  const showMyComments = document.querySelector(".comment-show");
  showMyComments.classList.add("active3");
}
function hideMyComments() {
  const hideMyComments = document.querySelector(".comment-show");
  hideMyComments.classList.remove("active3");
}
function bookmark() {
  const toggleBookmarks = document.querySelector(".fa-bookmark");
  toggleBookmarks.classList.toggle("bookmarkActive");
}
function faComment() {
  const faCommentDiv = document.querySelector(".faCommentDiv");
  faCommentDiv.classList.add("activeComment");
}
function faCommentHide() {
  const faCommentDiv3 = document.querySelector(".faCommentDiv");
  const faCommentDiv4 = document.querySelector(".fa-comment-div");
  faCommentDiv3.classList.remove("activeComment");
  faCommentDiv4.classList.remove("activeComment2");
}
function faComment2() {
  const faCommentDiv2 = document.querySelector(".fa-comment-div");
  faCommentDiv2.classList.add("activeComment2");
}
