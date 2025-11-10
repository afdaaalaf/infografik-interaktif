# 🍚 Ragam Nasi Goreng Indonesia - Infografik Interaktif (V2.0)

> Interactive infographic website with rectangular layout showcasing varieties of Indonesian fried rice

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-ready-brightgreen)

## 📋 Table of Contents

- [What's New in V2.0](#-whats-new-in-v20)
- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [Customization Guide](#-customization-guide)
- [Responsive Behavior](#-responsive-behavior)
- [Technologies Used](#-technologies-used)
- [Browser Compatibility](#-browser-compatibility)

---

## 🆕 What's New in V2.0

### Layout Changes
- ✅ **Rectangular design** instead of circular layout
- ✅ **Title box** at the top with heading and subtitle
- ✅ **16:9 image box** for hero image (child with spoon and fork)
- ✅ **2×3 button grid** on desktop (6 rectangular buttons)
- ✅ **1×6 button stack** on mobile (automatically responsive)

### Design Updates
- ✅ **New simple color palette** (no neon, clean and professional)
- ✅ **Smooth hover animation** - buttons scale to 1.1× with ease transition
- ✅ **Background image support** (gradient placeholder included)
- ✅ **Muted accent colors** for each button type
- ✅ **Maintained dark/light mode** toggle

### Technical Improvements
- ✅ **Better mobile experience** with automatic stacking
- ✅ **Improved touch interactions** for mobile devices
- ✅ **Optimized animations** for performance
- ✅ **Same file structure** - easy to upgrade

---

## 🎯 Overview

**Ragam Nasi Goreng Indonesia V2.0** is an interactive, educational website that showcases six popular varieties of Indonesian fried rice through a clean, modern rectangular layout. Designed for teenagers and young audiences with:

- 🎨 Simple, professional design with muted colors
- 🌓 Dark/Light mode toggle
- 📱 Mobile-first responsive (auto-stacks on mobile)
- ✨ Smooth hover and transition animations
- 🖼️ 16:9 hero image area
- 🚀 Optimized for GitHub Pages

---

## ✨ Features

### Visual Design
- **Title Box**: Clean white box with title and subtitle
- **Hero Image Area**: 16:9 aspect ratio image container
- **Button Grid**: 2 columns × 3 rows on desktop
- **Hover Effect**: Smooth scale(1.1) transformation
- **Color Palette**: Simple, muted, professional tones

### Layout Behavior
- **Desktop/Tablet (≥768px)**: 2-column grid layout
- **Mobile (<768px)**: Automatically stacks into 1 column
- **Smooth Transitions**: All interactions are fluid
- **Responsive Images**: Maintains aspect ratio on all screens

### Interactive Features
- 🌓 **Theme Toggle**: Persistent light/dark mode
- 🎬 **Page Transitions**: Fade in/out when navigating
- 🖱️ **Hover Effects**: Scale up + shadow enhancement
- 📱 **Touch Optimized**: Special interactions for mobile
- ⌨️ **Keyboard Navigation**: Tab and Enter support

---

## 📁 Project Structure

```
ragam-nasi-goreng-indonesia/
│
├── index.html              # Main page (updated rectangular layout)
├── style.css               # Complete styling (new color palette)
├── script.js               # Interactive logic (minimal changes)
│
├── pages/                  # Detail pages (unchanged)
│   ├── nasgor_kambing.html
│   ├── nasgor_seafood.html
│   ├── nasgor_jawa.html
│   ├── nasgor_ayam.html
│   ├── nasgor_sapi.html
│   └── nasgor_pete.html
│
├── images/                 # Image assets
│   ├── hero-image.jpg      # Main 16:9 hero image (NEW)
│   ├── kambing.jpeg         # Button icons
│   ├── seafood.jpg
│   ├── jawa.jpg
│   ├── ayam.jpg
│   ├── sapi.jpeg
│   └── pete.jpg
│
└── README.md              # This file
```

---

## 🚀 Setup & Installation

### Quick Start

1. **Download/Clone** the repository
2. **Open** `index.html` in any modern browser
3. **Works immediately** - no build process needed!

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/ragam-nasi-goreng-indonesia.git

# Navigate to folder
cd ragam-nasi-goreng-indonesia

# Start local server (optional)
python -m http.server 8000
# OR
npx http-server

# Open browser to http://localhost:8000
```

### GitHub Pages Deployment

```bash
# Initialize git
git init
git add .
git commit -m "V2.0: Rectangular layout with auto-stacking mobile"

# Push to GitHub
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ragam-nasi-goreng-indonesia.git
git push -u origin main

# Enable GitHub Pages
# Go to: Repository Settings → Pages → Source: main branch → Save

# Your site will be live at:
# https://YOUR_USERNAME.github.io/ragam-nasi-goreng-indonesia/
```

---

## 🎨 Customization Guide

### 1. Adding Your Hero Image

**Replace the placeholder:**

```css
/* In style.css, find .image-placeholder */
.image-placeholder {
    background-image: url('../images/hero-image.jpg');
    /* Or use the body background approach */
}
```

**Image specifications:**
- **Aspect Ratio**: 16:9 (1920×1080px recommended)
- **Format**: JPG or JPEG
- **Size**: < 500 KB for fast loading
- **Subject**: Child holding spoon and fork
- **Style**: Bright, friendly, high quality

### 2. Changing Colors

**Light Mode:**
```css
:root {
    --bg-gradient-start: #FFF5E4;  /* Cream */
    --bg-gradient-end: #FFE5D9;    /* Light Peach */
    --button-bg: #F5F5F5;          /* Light Gray */
    /* Edit these as needed */
}
```

**Dark Mode:**
```css
[data-theme="dark"] {
    --bg-gradient-start: #1E293B;  /* Navy */
    --bg-gradient-end: #0F172A;    /* Darker Navy */
    --button-bg: #475569;          /* Medium Gray */
    /* Edit these as needed */
}
```

### 3. Adjusting Hover Animation Speed

```css
/* In style.css, find .nasi-goreng-button */
.nasi-goreng-button {
    transition: transform 0.3s ease; /* Change 0.3s to 0.2s for faster */
}

.nasi-goreng-button:hover {
    transform: scale(1.1); /* Change 1.1 to 1.15 for more zoom */
}
```

### 4. Modifying Button Layout

**Change from 2 columns to 3 columns (desktop):**
```css
.buttons-grid {
    grid-template-columns: repeat(3, 1fr); /* Change 2 to 3 */
}
```

**Adjust gap between buttons:**
```css
.buttons-grid {
    gap: 20px; /* Change to 15px or 25px */
}
```

### 5. Adding Background Image to Body

**Option 1: Using your own image**
```css
body {
    background-image: url('../images/background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

**Option 2: Using a pattern**
```css
body {
    background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/food.png');
    background-repeat: repeat;
}
```

### 6. Editing Content

**Title and Subtitle:**
```html
<!-- In index.html -->
<h1 class="main-title">Your Custom Title Here</h1>
<p class="main-subtitle">Your custom subtitle</p>
```

**Button Labels:**
```html
<!-- In index.html -->
<span class="button-label">Your Custom Label</span>
```

**Detail Pages:**
- Open any file in `/pages` folder
- Replace Lorem Ipsum with real content
- Keep the HTML structure intact

---

## 📱 Responsive Behavior

### Desktop Layout (≥768px)

```
┌─────────────────────────────────┐
│     RAGAM NASI GORENG           │  ← Title Box
└─────────────────────────────────┘

┌─────────────────────────────────┐
│                                 │
│         HERO IMAGE              │  ← 16:9 Image
│         (Child with utensils)   │
└─────────────────────────────────┘

┌──────────────┐  ┌──────────────┐
│ Nasi Goreng  │  │ Nasi Goreng  │  ← Row 1
│   Kambing    │  │   Ayam       │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│ Nasi Goreng  │  │ Nasi Goreng  │  ← Row 2
│   Seafood    │  │   Sapi       │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│ Nasi Goreng  │  │ Nasi Goreng  │  ← Row 3
│   Jawa       │  │   Pete       │
└──────────────┘  └──────────────┘
```

### Mobile Layout (<768px)

```
┌─────────────────┐
│ RAGAM NASI      │  ← Title Box (narrower)
│ GORENG          │
└─────────────────┘

┌─────────────────┐
│                 │
│   HERO IMAGE    │  ← 16:9 Image (full width)
│                 │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 1
│   Kambing       │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 2
│   Seafood       │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 3
│   Jawa          │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 4
│   Ayam          │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 5
│   Sapi          │
└─────────────────┘

┌─────────────────┐
│ Nasi Goreng     │  ← Button 6
│   Pete          │
└─────────────────┘
```

### Breakpoint Details

| Screen Size | Layout | Columns | Gap |
|-------------|--------|---------|-----|
| ≥1024px | Desktop | 2 | 20px |
| 768px - 1023px | Tablet | 2 | 15px |
| <768px | Mobile | 1 | 15px |
| <360px | Small Mobile | 1 | 15px (compact) |

---

## 🛠️ Technologies Used

| Technology | Purpose | Notes |
|------------|---------|-------|
| HTML5 | Structure | Semantic elements |
| CSS3 | Styling & Animation | Grid, Flexbox, Variables |
| JavaScript (Vanilla) | Interactivity | ES6+, no frameworks |
| Google Fonts | Typography (Nunito) | Self-hosted option available |
| localStorage API | Theme persistence | Browser-based storage |

**No dependencies, no build tools, no frameworks!**

---

## 🌍 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |
| Mobile Browsers | iOS 14+, Android 10+ | ✅ Optimized |

### Required Features
- CSS Grid Layout
- CSS Variables (Custom Properties)
- CSS Transforms & Transitions
- localStorage API
- ES6 JavaScript

---

## 🎯 Key Features Explained

### 1. Auto-Stacking Mobile Layout

**How it works:**
```css
/* Desktop: 2 columns */
.buttons-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

/* Mobile: 1 column (automatic stacking) */
@media (max-width: 767px) {
    .buttons-grid {
        grid-template-columns: 1fr;
    }
}
```

**Benefits:**
- ✅ No JavaScript needed
- ✅ Automatic at breakpoint
- ✅ Smooth transition
- ✅ Better mobile UX

### 2. Smooth Hover Animation

**Implementation:**
```css
.nasi-goreng-button {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nasi-goreng-button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px var(--box-shadow-hover);
}
```

**Timing breakdown:**
- **0.0s**: Normal state
- **0.15s**: 50% of scale animation
- **0.3s**: Full scale + shadow

### 3. 16:9 Aspect Ratio Lock

**CSS trick:**
```css
.image-content {
    width: 100%;
    padding-bottom: 56.25%; /* 9/16 = 0.5625 = 56.25% */
}
```

**Why?** Maintains perfect 16:9 ratio on all screen sizes without JavaScript.

### 4. Theme Persistence

**Flow:**
1. User toggles theme
2. Saved to localStorage: `theme: 'dark'`
3. Page reload → Check localStorage
4. Apply saved theme automatically

---

## 📊 Performance Metrics

### Load Times (estimated)
- **First Contentful Paint**: < 1.0s
- **Time to Interactive**: < 1.5s
- **Largest Contentful Paint**: < 2.0s (depends on images)

### Lighthouse Scores (target)
- **Performance**: 90+
- **Accessibility**: 85+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🔧 Troubleshooting

### Issue: Buttons don't stack on mobile

**Solution:** Check viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Issue: Hero image not showing

**Solution:** Check file path and format
```css
/* Correct path (from CSS file location) */
background-image: url('../images/hero-image.jpg');

/* Verify file exists at: */
/* /images/hero-image.jpg */
```

### Issue: Hover animation too fast/slow

**Solution:** Adjust transition duration
```css
.nasi-goreng-button {
    transition: transform 0.3s ease; /* Change 0.3s */
}
```

### Issue: Colors look wrong in dark mode

**Solution:** Clear localStorage and refresh
```javascript
// In browser console:
localStorage.clear();
location.reload();
```

---

## 📈 Upgrade from V1.0

### Migration Steps

1. **Backup** your current V1.0 files
2. **Replace** `index.html` with new version
3. **Replace** `style.css` with new version
4. **Keep** `script.js` (or use new version)
5. **Keep** all files in `/pages` folder (unchanged)
6. **Add** hero image to `/images` folder
7. **Test** on desktop and mobile

### What's Preserved
- ✅ All detail pages (no changes needed)
- ✅ Theme toggle functionality
- ✅ Page transition effects
- ✅ File structure
- ✅ localStorage data

### What's New
- ✅ Rectangular layout
- ✅ 16:9 hero image area
- ✅ Auto-stacking mobile layout
- ✅ New color palette
- ✅ Improved hover animations

---

## 🎓 Learning Resources

### CSS Grid Layout
- [CSS Tricks - Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

### Responsive Design
- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web.dev - Responsive Images](https://web.dev/responsive-images/)

### CSS Animations
- [CSS Tricks - CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [MDN - Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

---

## 🤝 Contributing

Contributions welcome! Areas for improvement:

- 📸 Better image optimization
- ♿ Enhanced accessibility features
- 🌐 Multi-language support
- 🎨 Additional color themes
- 📱 Progressive Web App (PWA) support
- 🔍 Search functionality

---

## 📄 License

MIT License - Free to use and modify

---

## 🎉 What's Next?

### Immediate Tasks
1. ✅ Add your hero image (child with spoon and fork)
2. ✅ Replace Lorem Ipsum with real content
3. ✅ Add custom button icons
4. ✅ Deploy to GitHub Pages

### Future Enhancements
- 📖 Recipe details and cooking instructions
- ⭐ User ratings and reviews
- 📍 Regional variations map
- 🎥 Video tutorials
- 🛒 Ingredient shopping list
- 📱 Mobile app version

---

## 📞 Support

Need help?
- **Issues**: [GitHub Issues](https://github.com/yourusername/ragam-nasi-goreng-indonesia/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ragam-nasi-goreng-indonesia/discussions)

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern infographic layouts
- **Google Fonts**: Nunito typeface
- **Indonesian Culinary Culture**: Recipe inspiration
- **Community**: All contributors and users

---

**Made with ❤️ for Indonesian food lovers**

🍚 **Selamat menikmati versi baru!** (Enjoy the new version!)

---

*Last Updated: 10 November 2025 - Version 2.0.0*