# Hello Eepy ❤️

## 📋 Overview

This is a modern, responsive single-page website built with vanilla HTML, CSS, and JavaScript. It features:

- **Welcome Screen**: Interactive heart button to reveal the surprise
- **Days Apart Counter**: Displays time spent apart during practicals
- **Photo Gallery**: Carousel with lightbox, swipe support, and thumbnail navigation
- **Personal Message**: Typewriter animation effect
- **Live Countdown Timer**: Real-time countdown to return date (June 6, 2026)
- **Letter Modal**: Heartfelt welcome-home letter
- **Background Music**: Integrated audio controls
- **Animations**: Floating hearts, confetti, smooth transitions
- **Responsive Design**: Works beautifully on desktop and mobile

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code recommended)
- Local web server (for music playback and testing)

### Installation

1. **Navigate to the project folder**
   ```
   cd AlyssaCountdown
   ```

2. **Prepare assets**
   
   **For Images:**
   - Add 6 photos to `assets/images/` with these exact names:
     - `photo1.jpg`
     - `photo2.jpg`
     - `photo3.jpg`
     - `photo4.jpg`
     - `photo5.jpg`
     - `photo6.jpg`
   
   - Photos will display as placeholders if these files don't exist
   
   **For Music:**
   - Add your background music file to `assets/music/` as:
     - `song.mp3`
   
   - The music will not autoplay (respects browser policies)
   - Users can play/pause/adjust volume using the music button (🎵)

3. **Run a local web server**
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npm install -g http-server
   http-server
   ```
   
   **Using VS Code Live Server Extension:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

4. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown in your terminal)
   - Click the heart button to reveal the surprise!

## 📁 Project Structure

```
AlyssaCountdown/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling and animations
├── js/
│   └── script.js          # All interactive functionality
├── assets/
│   ├── images/
│   │   ├── photo1.jpg     # Add your photos here
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── photo5.jpg
│   │   └── photo6.jpg
│   └── music/
│       └── song.mp3       # Add your background music here
└── README.md              # This file
```

## 🎨 Customization

### Update the Personal Message

In `index.html`, find the personal message section and update the text:

```html
<div class="message-content" id="message-content">
    <p>Your custom message here...</p>
</div>
```

### Update the Welcome-Home Letter

In `index.html`, find the letter section and replace the placeholder:

```html
<div class="letter-body" id="letter-body">
    <!-- Replace the entire letter content here -->
    <p>Your custom letter...</p>
</div>
```

### Change Dates

In `js/script.js`, modify the configuration:

```javascript
const CONFIG = {
    START_DATE: new Date(2026, 2, 1),        // Month (0-11), so 2 = March
    END_DATE: new Date(2026, 5, 6, 9, 0, 0), // June 6, 2026 at 09:00
    // ...
};
```

### Customize Colors

In `css/style.css`, modify the CSS variables in the `:root` section:

```css
:root {
    --color-primary-pink: #f5e6e8;
    --color-soft-blush: #fce4ec;
    --color-cream-white: #fffbf7;
    --color-rose-gold: #d4949f;
    /* ... etc */
}
```

### Add or Remove Photos

1. In `js/script.js`, update the `PHOTOS` array:
   ```javascript
   PHOTOS: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', ...],
   ```

2. Add the corresponding files to `assets/images/`

## ✨ Features

### Heart Button Interaction
- Click the heart on the welcome screen to reveal the page
- Triggers confetti and floating hearts animation
- Smooth transition to main content
- Automatically starts music

### Photo Gallery
- **Carousel**: Click next/previous arrows or use arrow buttons
- **Swipe Support**: On mobile, swipe left/right to navigate
- **Thumbnails**: Click thumbnails to jump to specific photos
- **Lightbox**: Click any photo to view full-screen with navigation
- **Keyboard**: Use arrow keys to navigate in lightbox, ESC to close

### Music Controls
- Click the music button (🎵) to pause/resume
- Double-click to show volume slider
- Volume persists while on the page
- Respects browser autoplay policies

### Countdown Timer
- Real-time countdown with days, hours, minutes, seconds
- Updates every second
- Shows celebration message and animation when reaching zero
- All times in SAST (South Africa Standard Time)

### Typewriter Effect
- Personal message appears with typewriter animation
- Triggered when the message section comes into view
- Each paragraph appears sequentially

### Responsive Design
- Optimized for mobile (320px and up)
- Optimized for tablet (768px and up)
- Optimized for desktop (1200px and up)
- Accessible color contrasts
- Touch-friendly buttons and controls

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Lazy-loaded animations
- GPU-accelerated transforms
- Debounced scroll events
- Optimized image handling with fallbacks
- Preload configuration for audio

### Accessibility
- Semantic HTML
- ARIA labels on buttons
- Keyboard navigation support
- Focus indicators
- Respects `prefers-reduced-motion`
- Good color contrast ratios

### JavaScript Features Used
- Intersection Observer API (for scroll animations)
- CSS Animations & Transitions
- Touch Events (for swipe support)
- Web Audio API (for music controls)
- LocalStorage (for volume preference - optional)

## 🎵 Audio Setup

The website expects background music at `assets/music/song.mp3`.

### Recommended Tools for Converting/Editing Music:
- **Free Online**: ConvertKit, Online-Convert
- **Desktop**: Audacity, FFmpeg
- **Format**: MP3 for best browser compatibility

### Note on Autoplay:
- Most browsers require user interaction before audio can play
- The music will start when the user clicks the heart button
- This respects browser privacy and user preferences

## 📱 Mobile Considerations

- Tap the heart to reveal (instead of click)
- Swipe left/right in gallery to navigate
- Music button has good touch target size
- All text is readable and properly sized
- Layout adjusts for smaller screens

## 🐛 Troubleshooting

### Music Not Playing
- Ensure `assets/music/song.mp3` exists
- Use a local web server (not file://)
- Check browser console for errors
- Verify MP3 file is not corrupted

### Photos Not Showing
- Ensure image files are in `assets/images/`
- Verify filenames match exactly: `photo1.jpg`, `photo2.jpg`, etc.
- Check browser console for 404 errors
- Placeholders will show if images are missing

### Animations Not Working
- Check if browser supports CSS animations
- Verify CSS file is loaded (no 404 in console)
- Try disabling browser extensions
- Check `prefers-reduced-motion` setting

### Countdown Shows Wrong Time
- Verify dates in `js/script.js` config
- Check system clock is correct
- Ensure timezone is correct (SAST = UTC+2)

## 💝 Tips

- Test the page thoroughly before showing to Eepy
- Download all images to the correct folders
- Test with your chosen background music
- Check on mobile devices before sharing
- Customize the personal messages for maximum impact
- Consider the lighting when choosing photos

## 📄 License

This project is a personal creation for a special someone. Feel free to modify and customize as needed!

For questions or customization help, refer to the code comments throughout the files.
