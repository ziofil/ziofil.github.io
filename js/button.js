// This script adds click event listeners to the back, previous, and next buttons

const posts = [
  "post1.html",
  "post2.html",
  "post3.html",
  "post4.html",
  "post5.html",
  "post6.html",
  "post7.html",
  "post8.html",
  "post9.html",
  "post10.html",
];

// Determine the current index based on the current page URL
const currentPage = window.location.pathname.split('/').pop();
let currentIndex = posts.indexOf(currentPage);

// Ensure currentIndex is set correctly
if (currentIndex === -1) {
  console.error(`Current page ${currentPage} not found in posts array.`);
  currentIndex = 0; // Default to the first post if not found
}

document.getElementById('home-button').addEventListener('click', () => {
  window.location.href = '../index.html';
});

document.getElementById('prev-button').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    window.location.href = `../posts/${posts[currentIndex]}`;
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  if (currentIndex < posts.length - 1) {
    currentIndex++;
    window.location.href = `../posts/${posts[currentIndex]}`;
  }
});