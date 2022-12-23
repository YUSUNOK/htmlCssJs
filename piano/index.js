const keyList = document.querySelectorAll(".event");
for (let i = 0; i < keyList.length; i++) {
  keyList[i].addEventListener("click", function () {
    const list = document.getElementsByClassName(i);
    for (let j = 0; j < list.length; j++) {
      list[j].style.background = "red";
    }
    var audio = new Audio("audio/" + i + ".mp3");
    audio.load();
    audio.volume = 1;
    audio.play();
    setTimeout(function () {
      audio.pause();
      for (let j = 0; j < list.length; j++) {
        list[j].style.background = "white";
      }
    }, 300);
  });
}

// 키보드 0123456이 각각 도레미파솔라시에 대응되게
document.addEventListener("keydown", (event) => {
  const Key = event.code;

  const index = Key.charAt(Key.length - 1);
  const list = document.getElementsByClassName(index);
  for (let i = 0; i < list.length; i++) {
    list[i].style.background = "red";
  }

  var audio = new Audio("audio/" + index + ".mp3");
  audio.load();
  audio.volume = 1;
  audio.play();
  setTimeout(function () {
    audio.pause();
    for (let i = 0; i < list.length; i++) {
      list[i].style.background = "white";
    }
  }, 300);
});
