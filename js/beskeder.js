const alleProfiler = document.querySelectorAll(".profile-boxes");
console.log(alleProfiler);
const startSide = document.querySelector(".start-besked-side");

const profilting1 = document.querySelector(".anders");
const profilting2 = document.querySelector(".soren");
const profilting3 = document.querySelector(".kasper");

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

for (let index = 0; index < alleProfiler.length; index++) {
  console.log(alleProfiler[index]);
  alleProfiler[index].addEventListener("click", (data) => {
    console.log(data.target);
    if (data.target === box1) {
      console.log("ja");
      profilting1.classList.add("active");
      startSide.classList.add("hide");
    } else {
      console.log("nej");
      profilting1.classList.remove("active");
    }

    if (data.target === box2) {
      console.log("ja");
      profilting2.classList.add("active");
      startSide.classList.add("hide");
    } else {
      console.log("nej");
      profilting2.classList.remove("active");
    }

    if (data.target === box3) {
      console.log("ja");
      profilting3.classList.add("active");
      startSide.classList.add("hide");
    } else {
      console.log("nej");
      profilting3.classList.remove("active");
    }
  });
}
