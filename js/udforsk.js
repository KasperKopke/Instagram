const videogrid = document.querySelectorAll(".video-grid");

for (let i = 0; i < videogrid.length; i++) {
  videogrid[i].addEventListener("mouseenter", function (e) {
    videogrid[i].play();
  });
  videogrid[i].addEventListener("mouseleave", function (e) {
    videogrid[i].pause();
  });
}
