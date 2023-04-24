const beggeKnapper = document.querySelectorAll(".navli");
console.log(beggeKnapper);

const searchh = document.querySelector(".search");
const notif = document.querySelector(".noti");

const sog = document.querySelector("#btns1");
const notfifik = document.querySelector("#btns2");

const searchbar = document.querySelector(".searchbar");
const notiBar = document.querySelector(".notifikationer");

const alleKnapper = document.querySelectorAll("#hideText");

const activeLogo = document.querySelector(".nav-insta-logo");
const activetext = document.querySelector(".nav-insta-text");

for (let index = 0; index < beggeKnapper.length; index++) {
  console.log(beggeKnapper[index]);
  beggeKnapper[index].addEventListener("click", (data) => {
    console.log(data.target);
    if (sog.contains(data.target)) {
      console.log("ja");
      searchh.classList.toggle("active");

      searchbar.classList.toggle("active");
    } else {
      console.log("nej");
      searchh.classList.remove("active");

      searchbar.classList.remove("active");
    }

    if (notfifik.contains(data.target)) {
      console.log("ja");
      notif.classList.toggle("active");

      notiBar.classList.toggle("active");
    } else {
      console.log("nej");
      notif.classList.remove("active");

      notiBar.classList.remove("active");
    }

    if (
      searchbar.classList.contains("active") ||
      notiBar.classList.contains("active")
    ) {
      activeLogo.classList.add("active");
      activetext.classList.add("active");
    } else {
      activeLogo.classList.remove("active");
      activetext.classList.remove("active");
    }

    for (let index2 = 0; index2 < alleKnapper.length; index2++) {
      console.log(alleKnapper[index2]);
      if (
        searchh.classList.contains("active") ||
        notif.classList.contains("active")
      ) {
        alleKnapper[index2].classList.add("hide");
      } else {
        alleKnapper[index2].classList.remove("hide");
      }
    }

    if (
      searchh.classList.contains("active") ||
      notif.classList.contains("active")
    ) {
      document.querySelector(".main-navigation").style.maxWidth = "100px";
      document.querySelector(".main-navigation").style.transition =
        "all 0.3s ease-in-out";
    } else {
      document.querySelector(".main-navigation").style.maxWidth = "320px";
      document.querySelector(".main-navigation").style.transition =
        "all 0.3s ease-in-out";
    }
  });
}

function opret() {
  const opretKnap = document.querySelector(".opret-nyt-opslag");
  opretKnap.classList.add("opretBoxShow");

  const kryds = document.querySelector(".fa-x");

  kryds.addEventListener("click", (data) => {
    opretKnap.classList.remove("opretBoxShow");
  });

  opretKnap.addEventListener("click", (data) => {
    console.log(data.target);
    if (data.target.classList.contains("opretBoxShow")) {
      opretKnap.classList.remove("opretBoxShow");
    }
  });
}

function showMenuBox() {
  const menubox = document.querySelector(".menu-btn-box");
  menubox.classList.toggle("showMenu");
}
