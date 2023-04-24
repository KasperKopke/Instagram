const alleProfiler2 = document.querySelectorAll(".profile-tags");
console.log(alleProfiler2);

const profilting4 = document.querySelector(".profile-picture-container-1");
const profilting5 = document.querySelector(".profile-picture-container-2");
const profilting6 = document.querySelector(".profile-picture-container-3");

const box4 = document.querySelector(".test-1");
const box5 = document.querySelector(".test-2");
const box6 = document.querySelector(".test-3");

for (let index = 0; index < alleProfiler2.length; index++) {
  console.log(alleProfiler2[index]);
  alleProfiler2[index].addEventListener("click", (data) => {
    console.log(data.target);

    if (data.target === box4) {
      console.log("ja");
      profilting4.classList.add("active");
    } else {
      console.log("nej");
      profilting4.classList.remove("active");
    }
    if (data.target === box5) {
      console.log("ja");
      profilting5.classList.add("active");
    } else {
      console.log("nej");
      profilting5.classList.remove("active");
    }
    if (data.target === box6) {
      console.log("ja");
      profilting6.classList.add("active");
    } else {
      console.log("nej");
      profilting6.classList.remove("active");
    }
  });
}
