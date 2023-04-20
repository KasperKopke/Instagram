const alleProfiler = document.querySelectorAll(".profile-tags");
console.log(alleProfiler);

const profilting1 = document.querySelector(".profile-picture-container-1");
const profilting2 = document.querySelector(".profile-picture-container-2");
const profilting3 = document.querySelector(".profile-picture-container-3");

const box1 = document.querySelector(".test-1");
const box2 = document.querySelector(".test-2");
const box3 = document.querySelector(".test-3");

for (let index = 0; index < alleProfiler.length; index++) {
  console.log(alleProfiler[index]);
  alleProfiler[index].addEventListener("click", (data) => {
    console.log(data.target);

    if (data.target === box1) {
      console.log("ja");
      profilting1.classList.add("active");
    } else {
      console.log("nej");
      profilting1.classList.remove("active");
    }
    if (data.target === box2) {
      console.log("ja");
      profilting2.classList.add("active");
    } else {
      console.log("nej");
      profilting2.classList.remove("active");
    }
    if (data.target === box3) {
      console.log("ja");
      profilting3.classList.add("active");
    } else {
      console.log("nej");
      profilting3.classList.remove("active");
    }
  });
}
