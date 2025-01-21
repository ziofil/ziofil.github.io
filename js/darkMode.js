// Immediately restore dark mode before page renders
if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
}

// Setup dark mode toggle once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const root = document.documentElement;
    
    // Function to update the icon based on dark mode state
    const updateIcon = (isDark) => {
        darkModeToggle.innerHTML = isDark ? '&#9728;' : '&#127769;'; // ☀ : 🌙
    };

    // Initialize icon
    const isDarkMode = root.classList.contains('dark-mode');
    updateIcon(isDarkMode);

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        console.log('Dark mode toggle clicked'); // Debug log
        const isDark = root.classList.toggle('dark-mode');
        console.log('Dark mode is now:', isDark); // Debug log
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        updateIcon(isDark);
    });
});

// Debug log to confirm script is running
console.log('Dark mode script loaded'); 