window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  let key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);

  let pr = document.querySelectorAll(".playing");
  if (pr !== null) {
    pr.forEach((key) => {
      key.classList.remove("playing");
    });
  }
  key.forEach((key) => {
    key.classList.add("playing");
  });
});
