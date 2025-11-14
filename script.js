/* ========================================
   RAGAM NASI GORENG INDONESIA - MAIN SCRIPT
   Version: 2.1 (Fixed & Optimized)
   ======================================== */

/* ========================================
   1. THEME TOGGLE FUNCTIONALITY
   ======================================== */

// Get theme toggle button element
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference in localStorage, default to 'light' if none
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
document.documentElement.setAttribute('data-theme', savedTheme);

/**
 * Toggle between light and dark themes
 * Saves preference to localStorage for persistence
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Add rotation animation to toggle button
    themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
    
    console.log(`Theme switched to: ${newTheme}`);
}

// Add click event listener to theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

/* ========================================
   2. IMAGE SLIDER FUNCTIONALITY
   ======================================== */

// Slider configuration
const SLIDER_CONFIG = {
    autoPlayInterval: 3000,  // Change slide every 3 seconds
    transitionDuration: 1000 // Fade transition duration in ms
};

// Get all slider elements
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Track current slide index
let currentSlide = 0;
let autoPlayTimer = null;
let isTransitioning = false;

/**
 * Show a specific slide by index
 * @param {number} index - The slide index to show
 */
function showSlide(index) {
    // Prevent multiple transitions at once
    if (isTransitioning) return;
    isTransitioning = true;
    
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Update current slide index (wrap around if needed)
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset transition lock after animation completes
    setTimeout(() => {
        isTransitioning = false;
    }, SLIDER_CONFIG.transitionDuration);
    
    console.log(`Slide changed to: ${currentSlide + 1}/${slides.length}`);
}

/**
 * Move to the next slide
 */
function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoPlay(); // Reset auto-play timer when manually navigating
}

/**
 * Move to the previous slide
 */
function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoPlay(); // Reset auto-play timer when manually navigating
}

/**
 * Start automatic slide progression
 */
function startAutoPlay() {
    // Clear any existing timer first
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    
    // Set new auto-play timer
    autoPlayTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, SLIDER_CONFIG.autoPlayInterval);
    
    console.log('Auto-play started');
}

/**
 * Stop automatic slide progression
 */
function stopAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
        console.log('Auto-play stopped');
    }
}

/**
 * Reset auto-play timer (restart from beginning)
 */
function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Add event listeners to navigation buttons
if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

// Add event listeners to indicator dots
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        resetAutoPlay();
    });
});

// Pause auto-play when user hovers over slider (better UX)
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
}

// Keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Start auto-play when page loads
if (slides.length > 0) {
    startAutoPlay();
    console.log(`Slider initialized with ${slides.length} slides`);
}

/* ========================================
   3. PAGE TRANSITION EFFECTS
   ======================================== */

/**
 * Fade in page content on load
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

/**
 * Fade out page before navigation
 */
document.querySelectorAll('a:not([href^="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only apply to internal links (same hostname)
        if (this.hostname === window.location.hostname) {
            e.preventDefault();
            const href = this.href;
            
            // Fade out
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            
            // Navigate after fade
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

/* ========================================
   4. SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */

/**
 * Enable smooth scrolling for internal anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   5. MOBILE TOUCH INTERACTIONS
   ======================================== */

// Detect if user is on mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    console.log('Mobile device detected - optimizing interactions');
    
    // Add touch feedback to buttons
    document.querySelectorAll('.nasi-goreng-button').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Touch swipe support for slider
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance for swipe to register
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    /**
     * Handle swipe gesture for mobile slider navigation
     */
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe right - go to previous slide
                prevSlide();
            } else {
                // Swipe left - go to next slide
                nextSlide();
            }
        }
    }
}

/* ========================================
   6. KEYBOARD NAVIGATION
   ======================================== */

/**
 * Enable Enter key to activate buttons
 */
document.querySelectorAll('.nasi-goreng-button').forEach(button => {
    button.setAttribute('tabindex', '0');
    button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});

/* ========================================
   7. PERFORMANCE OPTIMIZATION
   ======================================== */

/**
 * Debounce function to limit how often a function can run
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize events (debounced)
 */
const handleResize = debounce(() => {
    console.log('Window resized - layout adjusted');
    // Add any resize-specific logic here if needed
}, 250);

window.addEventListener('resize', handleResize);

/* ========================================
   8. INTERSECTION OBSERVER FOR ANIMATIONS
   ======================================== */

/**
 * Observe elements for scroll-triggered animations
 */
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

// Observe detail page sections for animation
document.querySelectorAll('.detail-section, .detail-card').forEach(el => {
    observer.observe(el);
});

/* ========================================
   9. CONSOLE WELCOME MESSAGE
   ======================================== */

console.log('%c🍚 Ragam Nasi Goreng Indonesia 🍚', 
    'font-size: 20px; font-weight: bold; color: #FF8B5A; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cWebsite Version 2.1 - Fixed & Optimized', 
    'font-size: 14px; color: #636E72; font-weight: 600;');
console.log('%c✅ Slider: Working | ✅ Dark Mode: Working | ✅ Responsive: Working', 
    'font-size: 12px; color: #00B894; font-weight: bold;');

/* ========================================
   10. CLEANUP ON PAGE UNLOAD
   ======================================== */

/**
 * Clean up timers and event listeners when leaving page
 */
window.addEventListener('beforeunload', () => {
    stopAutoPlay();
    console.log('Cleaning up resources...');
});