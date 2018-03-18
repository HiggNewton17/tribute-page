

window.addEventListener("resize", function adjustStyle(innerWidth) {
  if (this.innerWidth < 751) {
    document.getElementById("size-stylesheet").setAttribute("href", "narrow.css");
  } else if (this.innerWidth < 1001) {
    document.getElementById("size-stylesheet").setAttribute("href", "medium.css");
  } else {
    document.getElementById("size-stylesheet").setAttribute("href", "wide.css");
  }
  console.log(this.innerWidth < 751);

});
