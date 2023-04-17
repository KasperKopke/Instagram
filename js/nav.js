function navSearch() {
  const magnifyingGlass = document.querySelector(".fa-magnifying-glass");
  magnifyingGlass.classList.toggle("showSearch");

  const activeLogo = document.querySelector(".nav-insta-logo");
  activeLogo.classList.toggle("active");
  const activetext = document.querySelector(".nav-insta-text");
  activetext.classList.toggle("active2");
  const searchbar = document.querySelector(".searchbar");
  searchbar.classList.toggle("active3");

  const meElements = document.querySelectorAll("#hideText");
  for (let index = 0; index < meElements.length; index++) {
    meElements[index].classList.toggle("hide");
  }

  if (magnifyingGlass.classList.contains("showSearch")) {
    document.querySelector(".main-navigation").style.maxWidth = "100px";
    document.querySelector(".main-navigation").style.transition =
      "all 0.3s ease-in-out";
  } else {
    document.querySelector(".main-navigation").style.maxWidth = "320px";
    document.querySelector(".main-navigation").style.transition =
      "all 0.3s ease-in-out";
  }
}

function notifikationer() {
  const magnifyingGlass = document.querySelector(".fa-heart");
  magnifyingGlass.classList.toggle("Noti");

  const activeLogo = document.querySelector(".nav-insta-logo");
  activeLogo.classList.toggle("active");
  const activetext = document.querySelector(".nav-insta-text");
  activetext.classList.toggle("active2");
  const notiBar = document.querySelector(".notifikationer");
  notiBar.classList.toggle("active4");

  const meElements = document.querySelectorAll("#hideText");
  for (let index = 0; index < meElements.length; index++) {
    meElements[index].classList.toggle("hide");
  }

  if (magnifyingGlass.classList.contains("Noti")) {
    document.querySelector(".main-navigation").style.maxWidth = "100px";
    document.querySelector(".main-navigation").style.transition =
      "all 0.3s ease-in-out";
  } else {
    document.querySelector(".main-navigation").style.maxWidth = "320px";
    document.querySelector(".main-navigation").style.transition =
      "all 0.3s ease-in-out";
  }
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

/*
denne kode gør så man kan lave dark mode den ser efter om searchbtn 
indeholder classen showSearch hvis den gør skal den ændre baggrunds
farven til sort hvis ikke så skal den være hvid

if (magnifyingGlass.classList.contains("showSearch")) {
    document.querySelector("body").style.backgroundColor = "#000";
  } else {
    document.querySelector("body").style.backgroundColor = "#fff";
  }
  console.log("magnifyingGlass");

*/
