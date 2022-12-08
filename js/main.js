document.addEventListener("DOMContentLoaded", function() {
  var postHeadings = document.querySelectorAll(".post h2");

  for (var i = 0; i < postHeadings.length; i++) {
    postHeadings[i].addEventListener("click", function() {
      this.classList.toggle("expanded");
    });
  }
});

