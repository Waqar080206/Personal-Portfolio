/* filepath: c:\Users\Administrator\OneDrive\Desktop\PORTFOLIO\personal-portfolio\src\js\blog.js */
// Blog functionality - Cards link to external sites

// Blog data with external links
const blogData = {
  1: {
    title: "Getting Started with Machine Learning in 2024",
    category: "AI",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    link: "https://medium.com/@waqarakhtar/machine-learning-2024" // Replace with actual blog link
  },
  2: {
    title: "Building Scalable Cloud Architecture with AWS",
    category: "Cloud", 
    date: "Dec 10, 2024",
    readTime: "8 min read",
    link: "https://dev.to/waqarakhtar/aws-cloud-architecture" // Replace with actual blog link
  },
  3: {
    title: "Modern Frontend Development with React & TypeScript",
    category: "Web Dev",
    date: "Dec 5, 2024", 
    readTime: "6 min read",
    link: "https://hashnode.com/@waqarakhtar/react-typescript" // Replace with actual blog link
  },
  4: {
    title: "Developer Productivity Tools That Actually Work",
    category: "Productivity",
    date: "Nov 28, 2024",
    readTime: "4 min read", 
    link: "https://medium.com/@waqarakhtar/developer-productivity-tools" // Replace with actual blog link
  },
  5: {
    title: "My Journey Contributing to Open Source Projects",
    category: "Open Source",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    link: "https://dev.to/waqarakhtar/open-source-journey" // Replace with actual blog link
  },
  6: {
    title: "From Student to Tech Professional: Key Lessons Learned", 
    category: "Career",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    link: "https://hashnode.com/@waqarakhtar/student-to-professional" // Replace with actual blog link
  }
};

// Initialize blog functionality
document.addEventListener('DOMContentLoaded', function() {
  const blogCards = document.querySelectorAll('.blog-card');
  
  // Add click event listeners to blog cards
  blogCards.forEach(card => {
    const blogId = card.getAttribute('data-blog');
    const blog = blogData[blogId];
    
    if (blog && blog.link) {
      // Make card clickable with proper cursor
      card.style.cursor = 'pointer';
      
      // Add click event to open external link
      card.addEventListener('click', function(e) {
        // Prevent event if clicking on nested interactive elements
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
          return;
        }
        
        // Open blog post in new tab
        window.open(blog.link, '_blank', 'noopener,noreferrer');
      });
      
      // Add keyboard navigation support
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'link');
      card.setAttribute('aria-label', `Read blog post: ${blog.title}`);
      
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(blog.link, '_blank', 'noopener,noreferrer');
        }
      });
      
      // Update the "Read More" button to show external link icon
      const readMoreBtn = card.querySelector('.read-more-btn');
      if (readMoreBtn) {
        readMoreBtn.innerHTML = 'Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px; vertical-align: middle;"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>';
      }
    }
  });
  
  // Add hover effect for external link indication
  const style = document.createElement('style');
  style.textContent = `
    .blog-card::after {
      content: '';
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17l9.2-9.2M17 17V7H7'/%3E%3C/svg%3E");
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
    
    .blog-card:hover::after {
      opacity: 0.7;
    }
    
    .blog-card:focus {
      outline: 2px solid #2976ff;
      outline-offset: 2px;
    }
    
    .blog-card .read-more-btn svg {
      transition: transform 0.3s ease;
    }
    
    .blog-card:hover .read-more-btn svg {
      transform: translate(2px, -2px);
    }
  `;
  document.head.appendChild(style);
  
  // Optional: Add analytics tracking for blog clicks
  function trackBlogClick(blogTitle, blogLink) {
    // Add your analytics tracking code here
    console.log(`Blog clicked: ${blogTitle} - ${blogLink}`);
    
    // Example Google Analytics 4 event (if you have GA4 set up)
    // gtag('event', 'blog_click', {
    //   'blog_title': blogTitle,
    //   'blog_url': blogLink,
    //   'event_category': 'engagement',
    //   'event_label': 'external_blog_link'
    // });
  }
  
  // Add click tracking to cards
  blogCards.forEach(card => {
    card.addEventListener('click', function() {
      const blogId = this.getAttribute('data-blog');
      const blog = blogData[blogId];
      if (blog) {
        trackBlogClick(blog.title, blog.link);
      }
    });
  });
  
  // Smooth scrolling for any internal links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Utility function to update blog links (for easy maintenance)
function updateBlogLink(blogId, newLink) {
  if (blogData[blogId]) {
    blogData[blogId].link = newLink;
    console.log(`Updated blog ${blogId} link to: ${newLink}`);
  }
}

// Function to get all blog links (useful for maintenance)
function getAllBlogLinks() {
  return Object.entries(blogData).map(([id, blog]) => ({
    id: id,
    title: blog.title,
    link: blog.link
  }));
}