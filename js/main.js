/*
document.addEventListener("DOMContentLoaded", function() {
    var postHeadings = document.querySelectorAll(".post h2");

    for (var i = 0; i < postHeadings.length; i++) {
      postHeadings[i].addEventListener("click", function() {
        this.classList.toggle("expanded");
      });
    }
});
*/
// main.js
window.addEventListener("DOMContentLoaded", function() {
  var postTitlesContainer = document.getElementById("post-titles");

  for (var i = 1; i <= 2; i++) {
    // Fetch the content of the post file
    fetch(`posts/post${i}.html`)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        // Extract the title and link from the post file
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var title = doc.querySelector("h2").textContent;
        var link = doc.querySelector("h2 a").getAttribute("href");

        // Insert the title and link into the page
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = title;
        a.setAttribute("href", link);
        li.appendChild(a);
        postTitlesContainer.appendChild(li);
      });
  }
});
