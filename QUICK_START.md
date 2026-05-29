# Quick Start Guide

## 5-Minute Setup

### Step 1: Add Your Photos
1. Find 6 special photos from your adventures together
2. Rename them: `photo1.jpg`, `photo2.jpg`, ..., `photo6.jpg`
3. Copy them to: `assets/images/`

### Step 2: Add Your Music
1. Choose a song (3-5 minutes recommended)
2. Convert it to MP3 format if needed
3. Name it: `song.mp3`
4. Place it in: `assets/music/`

### Step 3: Customize the Messages

**Personal Message (appears with typewriter effect):**
- Open `index.html` in a text editor
- Find the section with `id="message-content"`
- Replace the paragraphs with your own message

**Welcome-Home Letter (opens in a modal):**
- Open `index.html`
- Find `id="letter-body"`
- Replace the entire letter with your personal letter
- Keep the markup (paragraphs) but change the text

### Step 4: Run the Website
Choose one method:

**Option A: Python (easiest)**
```bash
cd AlyssaCountdown
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option B: Node.js**
```bash
npm install -g http-server
http-server
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

### Step 5: Test Everything
- [ ] Heart button reveals content smoothly
- [ ] Music plays when you click the heart
- [ ] Photos show in the gallery
- [ ] Countdown timer is working
- [ ] Mobile layout looks good
- [ ] All text is correct

## Customization Checklist

- [ ] Updated personal message
- [ ] Updated welcome-home letter
- [ ] Added 6 photos to `assets/images/`
- [ ] Added music to `assets/music/`
- [ ] Verified dates are correct (June 6, 2026)
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All links work and nothing shows 404 errors

## Important Files

```
index.html           ← Main file (customize messages here)
css/style.css        ← Styling (only edit if you know CSS)
js/script.js         ← Logic (don't touch unless needed)
assets/images/       ← Your 6 photos go here
assets/music/        ← Your song.mp3 goes here
```

## Browser Requirements

Works on:
- Chrome/Chromium (90+)
- Firefox (88+)
- Safari (14+)
- Edge (90+)
- Mobile browsers

## Troubleshooting

**Music not playing?**
- Use http:// not file:// (need a local server)
- Check that song.mp3 exists
- Try a different browser

**Photos not showing?**
- Verify exact filenames: photo1.jpg, photo2.jpg, etc.
- Check they're in assets/images/ folder
- Inspect browser console for errors

**Page looks weird on mobile?**
- Try zooming out in browser
- Clear browser cache
- Test on actual mobile device if possible

## Pro Tips

1. **Testing**: Open browser DevTools (F12) and check the Console for any errors
2. **Music**: Test your song is good length and volume before uploading
3. **Photos**: Use consistent photo style/mood for better aesthetic
4. **Sharing**: Send the folder to her via email, cloud drive, or USB
5. **Backup**: Keep a backup of the folder before sending

## File Structure Overview

```
AlyssaCountdown/
├── index.html              ✨ Customize messages here
├── css/style.css           🎨 All the pretty stuff
├── js/script.js            ⚙️  The logic
├── README.md               📚 Full documentation
├── QUICK_START.md          ← You are here
└── assets/
    ├── images/
    │   ├── photo1.jpg      📷 Add your photos
    │   ├── photo2.jpg
    │   └── ... (up to photo6.jpg)
    └── music/
        └── song.mp3        🎵 Add your music
```

## Next Steps

1. Add your photos to `assets/images/`
2. Add your music to `assets/music/`
3. Edit the messages in `index.html`
4. Run a local server
5. Open in browser and click the heart!
6. Test everything works
7. Share with Eepy 💕

---

Need more help? Check README.md for detailed information.

**Made with ❤️ for someone special.**
