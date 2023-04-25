function myfunctoin() {
  const ellipsisbtn = document.querySelector(".hide-function");
  const Ellipsisbtn = document.querySelector(".showReportSection");
  document.body.classList.add("overflow-hidden");
  ellipsisbtn.classList.add("activeEllipsis");
  Ellipsisbtn.classList.remove("active");
}
function myEllipsisFunction() {
  const ellipsisbtn2 = document.querySelector(".function-ellipsis");
  ellipsisbtn2.classList.add("activeEllipsiss");
}
function hideFunction() {
  const hideDiv = document.querySelector(".hide-function");
  const hideDiv2 = document.querySelector(".function-ellipsis");
  document.body.classList.remove("overflow-hidden");
  hideDiv2.classList.remove("activeEllipsiss");
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
function showMyComments() {
  const showMyCmments = document.querySelector(".hiding-comment-show");
  document.body.classList.add("overflow-hidden");
  showMyCmments.classList.add("activeCommentShow");
}
function hideMyComments() {
  const hideMyComments = document.querySelector(".comment-show");
  const hideMyComments2 = document.querySelector(".hiding-comment-show");
  document.body.classList.remove("overflow-hidden");
  hideMyComments2.classList.remove("activeCommentShow");
  hideMyComments.classList.remove("active3");
}
function bookmark() {
  const toggleBookmarks = document.querySelector(".fa-bookmark");
  toggleBookmarks.classList.toggle("bookmarkActive");
}
function faComment() {
  const faCommentDiv = document.querySelector(".faCommentDiv");
  document.body.classList.add("overflow-hidden");
  faCommentDiv.classList.add("activeComment");
}
function faComment2() {
  const faCommentDiv2 = document.querySelector(".fa-comment-div");
  faCommentDiv2.classList.add("activeComment2");
}
function faCommentHide() {
  const faCommentDiv3 = document.querySelector(".faCommentDiv");
  const faCommentDiv4 = document.querySelector(".fa-comment-div");
  document.body.classList.remove("overflow-hidden");
  faCommentDiv3.classList.remove("activeComment");
  faCommentDiv4.classList.remove("activeComment2");
}

function faPaper() {
  const faPaperFunction2 = document.querySelector(".fapaper-container");
  faPaperFunction2.classList.add("active11");
  const faPaperFunction = document.querySelector(".plane-empty");
  faPaperFunction.classList.add("active10");
  document.body.classList.add("overflow-hidden");
}
function faPaper2() {
  const faPaperFunction3 = document.querySelector(".plane-empty");
  faPaperFunction3.classList.add("active10");
}

function faPaperHide() {
  const faPaperHide = document.querySelector(".plane-empty");
  const faPaperHide2 = document.querySelector(".fapaper-container");
  document.body.classList.remove("overflow-hidden");
  faPaperHide.classList.remove("active10");
  faPaperHide2.classList.remove("active11");
}
function hideMyFaPaperPlane() {
  const hideMyFaPaperPlane = document.querySelector(".fapaper-container");
  const hideMyFaPaperPlane2 = document.querySelector(".plane-empty");
  hideMyFaPaperPlane.classList.remove("active11");
  hideMyFaPaperPlane2.classList.remove("active10");
}
