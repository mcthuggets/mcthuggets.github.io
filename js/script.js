/**
 * ALYSSA COUNTDOWN - COMPLETE JAVASCRIPT
 * A Romantic Surprise Page for Eepy
 * 
 * Features:
 * - Heart button reveal interaction
 * - Confetti and floating hearts animation
 * - Background music controls
 * - Days apart calculator
 * - Photo gallery carousel with swipe support
 * - Lightbox image viewer
 * - Typewriter effect for personal message
 * - Live countdown timer
 * - Letter modal
 * - Floating hearts background animation
 * - Intersection Observer for scroll animations
 */

// ========================================
// Configuration & Constants
// ========================================

const CONFIG = {
    START_DATE: new Date(2026, 3, 4, 14, 0, 0), // April 4 2026 14:00
    END_DATE: new Date(2026, 5, 6, 9, 0, 0), // June 6, 2026 09:00
    TIMEZONE: 'Africa/Johannesburg', // SAST
    PHOTOS: ['Photo1.jpeg', 'Photo2.jpeg', 'Photo3.jpeg', 'Photo4.jpeg', 'Photo5.jpeg', 'Photo6.jpeg'],
    MUSIC_PATH: 'assets/music/song.mp3'
};

// ========================================
// DOM Elements Cache
// ========================================

const DOM = {
    // Welcome screen
    welcomeScreen: document.getElementById('welcome-screen'),
    heartButton: document.getElementById('heart-button'),
    
    // Main content
    mainContent: document.getElementById('main-content'),
    confettiContainer: document.getElementById('confetti-container'),
    floatingHeartsContainer: document.querySelector('.floating-hearts-container'),
    
    // Music controls
    musicToggle: document.getElementById('music-toggle'),
    volumeSlider: document.getElementById('volume-slider'),
    volumeSliderContainer: document.querySelector('.volume-slider-container'),
    backgroundMusic: document.getElementById('background-music'),
    
    // Days apart counter
    daysCount: document.getElementById('days-count'),
    hoursCount: document.getElementById('hours-count'),
    minutesCount: document.getElementById('minutes-count'),
    
    // Gallery
    carouselSlides: document.getElementById('carousel-slides'),
    carouselThumbnails: document.getElementById('carousel-thumbnails'),
    prevButton: document.getElementById('prev-button'),
    nextButton: document.getElementById('next-button'),
    currentImageSpan: document.getElementById('current-image'),
    totalImagesSpan: document.getElementById('total-images'),
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImage: document.getElementById('lightbox-image'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxPrev: document.getElementById('lightbox-prev'),
    lightboxNext: document.getElementById('lightbox-next'),
    
    // Message
    messageContent: document.getElementById('message-content'),
    
    // Countdown
    countdownDays: document.getElementById('countdown-days'),
    countdownHours: document.getElementById('countdown-hours'),
    countdownMinutes: document.getElementById('countdown-minutes'),
    countdownSeconds: document.getElementById('countdown-seconds'),
    countdownCards: document.getElementById('countdown-cards'),
    countdownMessage: document.getElementById('countdown-message'),
    
    // Letter
    letterButton: document.getElementById('letter-button'),
    letterModal: document.getElementById('letter-modal'),
    letterClose: document.getElementById('letter-close'),
    letterBody: document.getElementById('letter-body'),
    
    // Sections
    sections: document.querySelectorAll('.section')
};

// ========================================
// State Management
// ========================================

const STATE = {
    heartClicked: false,
    currentImageIndex: 0,
    isPlaying: false,
    countdownFinished: false,
    touchStartX: 0,
    touchStartY: 0
};

// ========================================
// Utility Functions
// ========================================

/**
 * Generate a random number between min and max
 */
function random(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Calculate days between two dates
 */
function calculateDaysBetween(startDate, endDate) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeDifference = endDate - startDate;
    return Math.floor(timeDifference / msPerDay);
}

/**
 * Format number with leading zero
 */
function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========================================
// Background Floating Hearts
// ========================================

/**
 * Create and animate floating hearts in background
 */
function initFloatingHearts() {
    const heartsCount = 8;
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        
        const startX = random(0, window.innerWidth);
        const duration = random(8, 14);
        const delay = random(0, 5);
        
        heart.style.left = startX + 'px';
        heart.style.bottom = '-30px';
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = delay + 's';
        
        DOM.floatingHeartsContainer.appendChild(heart);
        
        // Restart animation after it finishes
        setTimeout(() => {
            heart.addEventListener('animationend', () => {
                heart.style.left = random(0, window.innerWidth) + 'px';
                heart.style.animationDelay = '0s';
            });
        }, (delay + duration) * 1000);
    }
}

// ========================================
// Welcome Screen & Heart Click
// ========================================

/**
 * Handle heart button click - reveal the page
 */
function handleHeartClick() {
    if (STATE.heartClicked) return;
    STATE.heartClicked = true;
    
    // Animate heart button
    DOM.heartButton.style.transform = 'scale(0.8)';
    
    // Trigger confetti
    triggerConfetti();
    
    // Add floating hearts effect
    createRevealHearts();
    
    // Hide welcome screen
    setTimeout(() => {
        DOM.welcomeScreen.classList.add('hidden');
        DOM.mainContent.classList.remove('hidden');
        
        // Smooth scroll to content
        setTimeout(() => {
            smoothScrollTo(DOM.mainContent);
        }, 200);
    }, 600);
    
    // Start background music
    startBackgroundMusic();
    
    // Initialize observers for scroll animations
    initIntersectionObserver();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Create confetti effect
 */
function triggerConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = Math.random() > 0.5 ? '❤️' : '✨';
        
        const startX = random(0, window.innerWidth);
        const startY = window.innerHeight / 2;
        const duration = random(2, 4);
        const angle = random(0, 360);
        const distance = random(100, 300);
        
        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';
        confetti.style.fontSize = random(1.5, 3) + 'rem';
        
        DOM.confettiContainer.appendChild(confetti);
        
        // Animate confetti
        confetti.animate(
            [
                {
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${distance}px) rotate(${angle}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fill: 'forwards'
            }
        );
        
        // Remove element after animation
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

/**
 * Create floating hearts for reveal effect
 */
function createRevealHearts() {
    const heartsCount = 15;
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        
        const startX = random(0, window.innerWidth);
        const startY = window.innerHeight;
        const duration = random(3, 5);
        
        heart.style.left = startX + 'px';
        heart.style.bottom = '0';
        heart.style.fontSize = random(1, 2.5) + 'rem';
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = random(0, 1) + 's';
        
        DOM.floatingHeartsContainer.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => heart.remove(), (duration + 1) * 1000);
    }
}

// ========================================
// Music Controls
// ========================================

/**
 * Start background music
 */
function startBackgroundMusic() {
    DOM.backgroundMusic.volume = 0.25; // Set to 25%
    DOM.backgroundMusic.play().catch(err => {
        console.log('Audio playback prevented:', err);
    });
    STATE.isPlaying = true;
    DOM.musicToggle.classList.add('playing');
}

/**
 * Toggle music play/pause
 */
function toggleMusic() {
    if (STATE.isPlaying) {
        DOM.backgroundMusic.pause();
        STATE.isPlaying = false;
        DOM.musicToggle.classList.remove('playing');
    } else {
        DOM.backgroundMusic.play().catch(err => {
            console.log('Audio playback prevented:', err);
        });
        STATE.isPlaying = true;
        DOM.musicToggle.classList.add('playing');
    }
}

/**
 * Toggle volume slider visibility
 */
function toggleVolumeSlider() {
    DOM.volumeSliderContainer.classList.toggle('hidden');
}

/**
 * Handle volume change
 */
function handleVolumeChange(e) {
    DOM.backgroundMusic.volume = e.target.value / 100;
}

// ========================================
// Days Apart Counter
// ========================================

/**
 * Calculate and update days apart
 */
function updateDaysApart() {
    const totalDays = calculateDaysBetween(CONFIG.START_DATE, CONFIG.END_DATE);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    
    DOM.daysCount.textContent = totalDays;
    DOM.hoursCount.textContent = totalHours;
    DOM.minutesCount.textContent = totalMinutes;
}

// ========================================
// Photo Gallery - Carousel
// ========================================

/**
 * Initialize photo gallery
 */
function initGallery() {
    // Generate slides
    CONFIG.PHOTOS.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = `assets/images/${photo}`;
        img.alt = `Photo ${index + 1}`;
        img.onerror = function() {
            // Show placeholder if image doesn't exist
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'carousel-slide-placeholder';
            placeholder.textContent = '📷';
            slide.appendChild(placeholder);
        };
        
        img.onclick = () => openLightbox(index);
        slide.appendChild(img);
        
        DOM.carouselSlides.appendChild(slide);
    });
    
    // Generate thumbnails
    CONFIG.PHOTOS.forEach((photo, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'carousel-thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = `assets/images/${photo}`;
        img.alt = `Thumbnail ${index + 1}`;
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => goToSlide(index));
        
        DOM.carouselThumbnails.appendChild(thumbnail);
    });
    
    DOM.totalImagesSpan.textContent = CONFIG.PHOTOS.length;
    updateCarouselPosition();
}

/**
 * Update carousel position
 */
function updateCarouselPosition() {
    const offset = -STATE.currentImageIndex * 100;
    DOM.carouselSlides.style.transform = `translateX(${offset}%)`;
    
    // Update current image count
    DOM.currentImageSpan.textContent = STATE.currentImageIndex + 1;
    
    // Update active thumbnail
    document.querySelectorAll('.carousel-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === STATE.currentImageIndex);
    });
}

/**
 * Go to specific slide
 */
function goToSlide(index) {
    STATE.currentImageIndex = index;
    if (STATE.currentImageIndex >= CONFIG.PHOTOS.length) {
        STATE.currentImageIndex = 0;
    }
    if (STATE.currentImageIndex < 0) {
        STATE.currentImageIndex = CONFIG.PHOTOS.length - 1;
    }
    updateCarouselPosition();
}

/**
 * Next slide
 */
function nextSlide() {
    goToSlide(STATE.currentImageIndex + 1);
}

/**
 * Previous slide
 */
function prevSlide() {
    goToSlide(STATE.currentImageIndex - 1);
}

/**
 * Handle swipe gestures
 */
function handleTouchStart(e) {
    STATE.touchStartX = e.touches[0].clientX;
    STATE.touchStartY = e.touches[0].clientY;
}

/**
 * Handle swipe end
 */
function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = STATE.touchStartX - touchEndX;
    const deltaY = STATE.touchStartY - touchEndY;
    
    // Minimum swipe distance
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// ========================================
// Lightbox Gallery
// ========================================

/**
 * Open lightbox with image
 */
function openLightbox(index) {
    STATE.currentImageIndex = index;
    const photo = CONFIG.PHOTOS[index];
    DOM.lightboxImage.src = `assets/images/${photo}`;
    DOM.lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Close lightbox
 */
function closeLightbox() {
    DOM.lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Next image in lightbox
 */
function nextLightboxImage() {
    goToSlide(STATE.currentImageIndex + 1);
    const photo = CONFIG.PHOTOS[STATE.currentImageIndex];
    DOM.lightboxImage.src = `assets/images/${photo}`;
}

/**
 * Previous image in lightbox
 */
function prevLightboxImage() {
    goToSlide(STATE.currentImageIndex - 1);
    const photo = CONFIG.PHOTOS[STATE.currentImageIndex];
    DOM.lightboxImage.src = `assets/images/${photo}`;
}

// ========================================
// Typewriter Animation for Message
// ========================================

/**
 * Typewriter effect for message
 */
function initTypewriterEffect() {
    const paragraphs = DOM.messageContent.querySelectorAll('p');
    let delay = 0;
    
    paragraphs.forEach((p, index) => {
        const duration = (0.05 * (index + 1)) * 1000;
        p.style.animationDelay = delay + 'ms';
        delay += duration + 200; // Add extra delay between paragraphs
    });
}

// ========================================
// Countdown Timer
// ========================================

/**
 * Update countdown timer
 */
function updateCountdown() {
    const now = new Date();
    const endDate = CONFIG.END_DATE;
    const timeDifference = endDate - now;
    
    if (timeDifference <= 0 && !STATE.countdownFinished) {
        // Countdown finished
        STATE.countdownFinished = true;
        DOM.countdownDays.textContent = '0';
        DOM.countdownHours.textContent = '0';
        DOM.countdownMinutes.textContent = '0';
        DOM.countdownSeconds.textContent = '0';
        
        DOM.countdownMessage.textContent = "She's home ❤️";
        DOM.countdownCards.classList.add('celebration');
        
        triggerCelebrationAnimation();
        return;
    }
    
    if (timeDifference <= 0) {
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    DOM.countdownDays.textContent = formatNumber(days);
    DOM.countdownHours.textContent = formatNumber(hours);
    DOM.countdownMinutes.textContent = formatNumber(minutes);
    DOM.countdownSeconds.textContent = formatNumber(seconds);
}

/**
 * Trigger celebration animation
 */
function triggerCelebrationAnimation() {
    const celebrationCount = 30;
    
    for (let i = 0; i < celebrationCount; i++) {
        const celebration = document.createElement('div');
        celebration.textContent = Math.random() > 0.5 ? '🎉' : '✨';
        celebration.style.position = 'absolute';
        celebration.style.left = random(0, 100) + '%';
        celebration.style.top = '50%';
        celebration.style.fontSize = random(1.5, 3) + 'rem';
        celebration.style.pointerEvents = 'none';
        
        DOM.countdownCards.appendChild(celebration);
        
        celebration.animate(
            [
                {
                    transform: 'translateY(0) scale(1)',
                    opacity: 1
                },
                {
                    transform: 'translateY(-100px) scale(0)',
                    opacity: 0
                }
            ],
            {
                duration: random(1500, 2500),
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                fill: 'forwards'
            }
        );
        
        setTimeout(() => celebration.remove(), 2500);
    }
}

// ========================================
// Letter Modal
// ========================================

/**
 * Open letter modal
 */
function openLetter() {
    DOM.letterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Close letter modal
 */
function closeLetter() {
    DOM.letterModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ========================================
// Intersection Observer for Animations
// ========================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger typewriter on message section
                if (entry.target.id === 'message-section') {
                    initTypewriterEffect();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    DOM.sections.forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// Event Listeners
// ========================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Heart button
    DOM.heartButton.addEventListener('click', handleHeartClick);
    
    // Music controls
    DOM.musicToggle.addEventListener('click', toggleMusic);
    DOM.musicToggle.addEventListener('dblclick', toggleVolumeSlider);
    DOM.volumeSlider.addEventListener('input', handleVolumeChange);
    
    // Gallery navigation
    DOM.prevButton.addEventListener('click', prevSlide);
    DOM.nextButton.addEventListener('click', nextSlide);
    DOM.lightboxPrev.addEventListener('click', prevLightboxImage);
    DOM.lightboxNext.addEventListener('click', nextLightboxImage);
    DOM.lightboxClose.addEventListener('click', closeLightbox);
    
    // Lightbox click to close
    DOM.lightboxModal.addEventListener('click', (e) => {
        if (e.target === DOM.lightboxModal) {
            closeLightbox();
        }
    });
    
    // Touch/Swipe support for carousel
    DOM.carouselSlides.addEventListener('touchstart', handleTouchStart, false);
    DOM.carouselSlides.addEventListener('touchend', handleTouchEnd, false);
    
    // Letter modal
    DOM.letterButton.addEventListener('click', openLetter);
    DOM.letterClose.addEventListener('click', closeLetter);
    
    // Letter modal click to close
    DOM.letterModal.addEventListener('click', (e) => {
        if (e.target === DOM.letterModal) {
            closeLetter();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (DOM.lightboxModal.classList.contains('hidden')) return;
        
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'ArrowRight') nextLightboxImage();
        if (e.key === 'Escape') closeLightbox();
    });
}

// ========================================
// Initialization
// ========================================

/**
 * Initialize the entire application
 */
function initApp() {
    // Initialize floating hearts background
    initFloatingHearts();
    
    // Update days apart counter
    updateDaysApart();
    
    // Initialize gallery
    initGallery();
    
    // Initialize event listeners
    initEventListeners();
    
    // Add heart button focus indicator for accessibility
    DOM.heartButton.setAttribute('aria-label', 'Click to reveal the surprise');
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initApp);

// Handle page visibility for music
document.addEventListener('visibilitychange', () => {
    if (document.hidden && STATE.isPlaying) {
        DOM.backgroundMusic.pause();
    } else if (!document.hidden && STATE.isPlaying && STATE.heartClicked) {
        DOM.backgroundMusic.play().catch(err => {
            console.log('Audio playback prevented:', err);
        });
    }
});

// ========================================
// Debugging Helpers (remove in production)
// ========================================

// Uncomment for debugging
/*
console.log('Days between dates:', calculateDaysBetween(CONFIG.START_DATE, CONFIG.END_DATE));
console.log('Config:', CONFIG);
console.log('Music path:', CONFIG.MUSIC_PATH);
*/
