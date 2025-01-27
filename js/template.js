// Posts array at the top
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

// Immediately restore dark mode before page renders
if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    
    // Then handle template content
    const content = document.getElementById('content');
    const title = document.title;
    
    // Add standard header and navigation
    content.innerHTML = `
        <div class="header-container">
            <h1>${title}</h1>
            <button id="darkModeToggle" class="dark-mode-toggle" aria-label="Toggle dark mode">&#127769;</button>
        </div>
        <button id="home-button">Home</button>
        <button id="prev-button">Previous</button>
        <button id="next-button">Next</button>
        ${content.innerHTML}
    `;

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Function to update the icon based on dark mode state
    const updateIcon = (isDark) => {
        darkModeToggle.innerHTML = isDark ? '&#9728;' : '&#127769;'; // ☀ : 🌙
    };

    // Initialize icon
    const isDarkMode = root.classList.contains('dark-mode');
    updateIcon(isDarkMode);

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        const isDark = root.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        updateIcon(isDark);
    });

    // Navigation code stays the same...
    const currentPage = window.location.pathname.split('/').pop();
    let currentIndex = posts.indexOf(currentPage);

    if (currentIndex === -1) {
        console.error(`Current page ${currentPage} not found in posts array.`);
        currentIndex = 0;
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
}); 