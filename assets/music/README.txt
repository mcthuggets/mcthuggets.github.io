<!-- MUSIC PLACEHOLDER -->

This folder should contain your background music file:

Filename: song.mp3

The website will automatically load and play this file when the user clicks the heart button on the welcome screen.

Recommended:
- Format: MP3 (best browser compatibility)
- Duration: 3-5 minutes (for a nice surprise)
- Quality: 192-320 kbps
- Size: Keep under 10MB for fast loading

Tools to convert/create music:
- Audacity (free, open-source)
- FFmpeg (command-line)
- Online converters

Example FFmpeg command to convert to MP3:
ffmpeg -i input.wav -b:a 192k song.mp3

The audio will not autoplay - it only starts playing when the user clicks the heart button,
respecting browser policies and user preferences.
