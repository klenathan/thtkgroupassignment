window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header_txt").style.fontSize = "30px";
    document.getElementById("header").style.padding = "10px";
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)";

  } else {
    document.getElementById("header_txt").style.fontSize = "80px";
    document.getElementById("header").style.paddingTop = "30vh";
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}