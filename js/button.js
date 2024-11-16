// This script adds click event listeners to the back, previous, and next buttons

const posts = [
  "posts/post1.html",
  "posts/post2.html",
  "posts/post3.html",
  "posts/post5.html",
  "posts/post6.html",
  "posts/post7.html",
  "posts/post8.html",
  "posts/post9.html"
];

// Get the current post index
const currentPost = window.location.pathname.split("/").pop();
const currentIndex = posts.indexOf(currentPost);

document.getElementById("back-button").addEventListener("click", function() {
  window.history.back();
});

document.getElementById("prev-button").addEventListener("click", function() {
  if (currentIndex > 0) {
    window.location.href = posts[currentIndex - 1];
  }
});

document.getElementById("next-button").addEventListener("click", function() {
  if (currentIndex < posts.length - 1) {
    window.location.href = posts[currentIndex + 1];
  }
});