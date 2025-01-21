// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Initialize dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        localStorage.setItem(
            'darkMode', 
            document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
        );
    });
}); 