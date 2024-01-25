document.getElementById("card").addEventListener("click", function () {
  this.style.transform =
    "rotateY(" +
    (this.style.transform === "rotateY(180deg)" ? "0deg" : "180deg") +
    ")";
});
