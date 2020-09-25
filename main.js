window.addEventListener("load", () => {
  //   document.getElementsByClassName("preloader")[0].style.display = "none";
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".content").style.display = "block";
});

document.body.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = event.target.tagName;

  //   or

  document.getElementById("demo").innerHTML = event.target.nodeName;
});
