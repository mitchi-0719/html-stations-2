function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const pTags = document.querySelectorAll("p");
  if (e.target.checked) {
    pTags.forEach((p) => {
      p.style.backgroundColor = "#ff0000";
    });
  } else {
    pTags.forEach((p) => {
      p.style.backgroundColor = "#fff";
    });
  }
}
