const videogrid = document.querySelectorAll(".video-grid-reel");

for (let i = 0; i < videogrid.length; i++) {
  videogrid[i].addEventListener("click", function (e) {
    videogrid[i].play();
  });
  videogrid[i].addEventListener("dblclick", function (e) {
    videogrid[i].pause();
  });
}
