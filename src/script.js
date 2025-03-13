// DOMContentLoaded 이벤트 이후 auto-render 실행
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\(", right: "\\)", display: false}
      ]
    });
  alert("Perfect!\n");  
});
  