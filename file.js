document.addEventListener("DOMContentLoaded", function () {
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.getElementsByClassName('plusMoins')[0].getElementsByTagName('img')[0].src='./assets/Plus.png'
    } else {
      panel.style.display = "block";
      this.getElementsByClassName('plusMoins')[0].getElementsByTagName('img')[0].src='./assets/Minus.png'
    }
  });
}})