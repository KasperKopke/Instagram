const sogAndNoti = document.querySelectorAll(".navli");
console.log(sogAndNoti);

const profilting1 = document.querySelector(".search");
const profilting2 = document.querySelector(".noti");

const box1 = document.querySelector("#btns1");
const box2 = document.querySelector("#btns2");

const searchbar = document.querySelector(".searchbar");
const notiBar = document.querySelector(".notifikationer");

const alleKnapper = document.querySelectorAll("#hideText");

const activeLogo = document.querySelector(".nav-insta-logo");
const activetext = document.querySelector(".nav-insta-text");

for (let index = 0; index < sogAndNoti.length; index++) {
  console.log(sogAndNoti[index]);
  sogAndNoti[index].addEventListener("click", (data) => {
    console.log(data.target);
    if (box1.contains(data.target)) {
      console.log("ja");
      profilting1.classList.toggle("active");

      searchbar.classList.toggle("active");
    } else {
      console.log("nej");
      profilting1.classList.remove("active");

      searchbar.classList.remove("active");
    }

    if (box2.contains(data.target)) {
      console.log("ja");
      profilting2.classList.toggle("active");

      notiBar.classList.toggle("active");
    } else {
      console.log("nej");
      profilting2.classList.remove("active");

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
        profilting1.classList.contains("active") ||
        profilting2.classList.contains("active")
      ) {
        alleKnapper[index2].classList.add("hide");
      } else {
        alleKnapper[index2].classList.remove("hide");
      }
    }

    if (
      profilting1.classList.contains("active") ||
      profilting2.classList.contains("active")
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
