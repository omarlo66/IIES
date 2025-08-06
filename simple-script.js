// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Initialize all features
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeModal();
    initializeForm();
    animateStats();
    //initializeHelicopterFlights();
});

// Realistic Helicopter Flight System
function initializeHelicopterFlights() {
    const helicopter = document.getElementById('helicopter');
    let interactionTimeout;
    let isGentlyInteracting = false;
    
    if (!helicopter) return;
    
    // Very subtle trail effect that doesn't interfere with user experience
    function createSubtleTrail() {
        if (Math.random() > 0.85) { // Create trails very rarely
            const trail = document.createElement('div');
            trail.className = 'helicopter-trail';
            trail.innerHTML = '<i class="fas fa-helicopter"></i>';
            
            const rect = helicopter.getBoundingClientRect();
            // Keep trails at the bottom of the screen
            trail.style.right = (window.innerWidth - rect.right + Math.random() * 20 - 10) + 'px';
            trail.style.bottom = Math.max(10, window.innerHeight - rect.bottom + Math.random() * 15 - 5) + 'px';
            
            document.body.appendChild(trail);
            
            // Remove trail after animation
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 3000);
        }
    }

    // Very subtle scroll interaction - barely noticeable
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrollVelocity = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;
        
        // Only react to fast scrolling to avoid interference
        if (scrollVelocity > 10 && !isGentlyInteracting) {
            isGentlyInteracting = true;
            helicopter.classList.add('gentle-scroll');
            
            // Very rare trail creation during scroll
            if (Math.random() > 0.9) {
                createSubtleTrail();
            }
        }
        
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
            isGentlyInteracting = false;
            helicopter.classList.remove('gentle-scroll');
        }, 800); // Shorter interaction time
    });

    // Minimal hover interactions - only for important elements
    const interactiveElements = document.querySelectorAll('.btn-primary, .service-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (!isGentlyInteracting) {
                helicopter.classList.add('gentle-hover');
            }
        });
        
        element.addEventListener('mouseleave', () => {
            helicopter.classList.remove('gentle-hover');
        });
    });

    // Very subtle click response - only for main buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-primary')) {
            helicopter.classList.add('interactive');
            
            // Rare trail on important clicks
            if (Math.random() > 0.8) {
                createSubtleTrail();
            }
            
            setTimeout(() => {
                helicopter.classList.remove('interactive');
            }, 1500);
        }
    });

    // Form submission - very gentle celebration
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Minimal celebration that doesn't distract
            helicopter.style.animation = 'gentleFloat 1s ease-in-out 2';
            
            // Single celebration trail
            setTimeout(() => {
                createSubtleTrail();
            }, 500);
            
            setTimeout(() => {
                helicopter.style.animation = '';
            }, 2000);
        });
    }

    // Video modal interaction - keep it minimal
    window.playVideo = function() {
        const modal = document.getElementById('video-modal');
        modal.style.display = 'block';
        
        // Very gentle reaction to video
        helicopter.classList.add('interactive');
        
        setTimeout(() => {
            helicopter.classList.remove('interactive');
        }, 2000);
        
        const video = modal.querySelector('video');
        video.play();
    };

    // Page visibility - subtle speed adjustment
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            helicopter.style.opacity = '0.7';
            helicopter.style.animationDuration = '40s'; // Much slower when page is hidden
        } else {
            helicopter.style.opacity = '1';
            helicopter.style.animationDuration = '30s'; // Normal speed
        }
    });

    // Very rare automatic trail creation - doesn't interfere with user
    setInterval(() => {
        if (!isGentlyInteracting && Math.random() > 0.95) {
            createSubtleTrail();
        }
    }, 15000); // Every 15 seconds, very rarely
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .contact-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        const video = modal.querySelector('video');
        video.pause();
        video.currentTime = 0;
        
        // Reset helicopter animation
        const helicopter = document.getElementById('helicopter');
        helicopter.className = 'fixed-scroll flying';
        helicopter.style.animation = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            const video = modal.querySelector('video');
            video.pause();
            video.currentTime = 0;
            
            // Reset helicopter animation
            const helicopter = document.getElementById('helicopter');
            helicopter.className = 'fixed-scroll flying';
            helicopter.style.animation = '';
        }
    });
}

// Form handling with helicopter celebration
function initializeForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Trigger helicopter celebration (handled in helicopter system)
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
    });
}

// Stats animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function playVideo() {
    const modal = document.getElementById('video-modal');
    modal.style.display = 'block';
    
    // Auto-play video when modal opens
    const video = modal.querySelector('video');
    video.play();
}

function animateNumber(element, target) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.type === 'submit') {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
lazyLoadImages();

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Preload critical images
function preloadImages() {
    const imagesToPreload = [
        'src/assets/BhGWXZb6B3oJ.jpg',
        'src/assets/EV8uiiiiWsx0.jpg',
        'src/assets/GhHlDdiZaCGg.jpg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images when page loads
preloadImages();
