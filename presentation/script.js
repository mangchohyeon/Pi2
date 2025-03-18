// DOMContentLoaded 이벤트 이후 auto-render 실행
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},       // 디스플레이 모드
      {left: "\\(", right: "\\)", display: false},      // 인라인 모드
      {left: "$", right: "$", display: false}           // 인라인 모드 (필요시)
    ]
  });
});

const img2 = document.getElementById("img2");
img2.addEventListener("click", () => {
  const footer_item1 = document.getElementById('footer_item1');
  if (footer_item1) {
    footer_item1.scrollIntoView({ behavior: "instant" });
  }
});
