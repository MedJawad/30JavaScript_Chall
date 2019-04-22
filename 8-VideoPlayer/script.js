//Getting all elements !
var video = document.querySelector("video");
var progress_container = document.getElementById("progress");
var progress = document.getElementById("progress-bar");
var play = document.getElementById("togglePP");
var forward = document.getElementById("forw");
var backward = document.getElementById("back");
var volume = document.getElementById("vol");

// doing things with elements

function toggleplay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updatebtn() {
  if (video.paused) {
    play.textContent = "▶";
    play.style.backgroundColor = "chocolate";
  } else {
    play.textContent = "❚ ❚";
    play.style.backgroundColor = "transparent";
  }
}

function updateprogress() {
  progress.style.width = (video.currentTime / video.duration) * 100 + "%";
}
function updatetime(e) {
  //onsole.log(e.offsetX);
  //console.log(progress_container.clientWidth);
  video.currentTime =
    parseFloat(e.offsetX / progress_container.clientWidth) * video.duration;
}
function ftime() {
  video.currentTime += 25;
}
function btime() {
  video.currentTime -= 10;
}
function updateVolume() {
  video.volume = this.value / 100;
}

//Event Listeners

play.addEventListener("click", toggleplay);
video.addEventListener("click", toggleplay);
video.addEventListener("play", updatebtn);
video.addEventListener("pause", updatebtn);

video.addEventListener("timeupdate", updateprogress);
progress_container.addEventListener("click", updatetime);
forward.addEventListener("click", ftime);
backward.addEventListener("click", btime);

volume.addEventListener("change", updateVolume);
