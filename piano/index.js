const keyList = document.querySelectorAll(".event");
for (let i = 0; i < keyList.length; i++) {
  keyList[i].addEventListener("click", function () {
    console.log(keyList[i]);
    keyList[i].style.background = "red";
    var audio = new Audio("audio/" + i + ".mp3");
    audio.load();
    audio.volume = 1;
    audio.play();
    setTimeout(function () {
      audio.pause();
    }, 300);
  });
}

// 키보드 0123456이 각각 도레미파솔라시에 대응되게
document.addEventListener("keydown", (event) => {
  const Key = event.code;
  const index = Key.charAt(Key.length - 1);
  var audio = new Audio("audio/" + index + ".mp3");
  audio.load();
  audio.volume = 1;
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 300);
});
