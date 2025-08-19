document.addEventListener('DOMContentLoaded', function() {
    // Get current page name from URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Get the href attribute and extract filename
        const href = link.getAttribute('href');
        const linkPage = href ? href.split('/').pop() : '';
        
        // Add active class to current page link
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Add click handlers for smooth navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Add loading state
            const clickedLink = this.getAttribute('href');
            console.log('Navigating to:', clickedLink);
        });
    });
});