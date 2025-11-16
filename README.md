# CraftRealm - Minecraft Landing Page

A professional, responsive landing page for a Minecraft server built with React and Tailwind CSS.

## Features

- ⚡ Built with React + Vite for fast development
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🎮 Minecraft-themed with professional aesthetics
- ✨ Smooth animations and transitions
- 🏰 Castle background image integration
- 👥 Members page with pixel art avatars

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Member Avatars

### Using Piskel to Create Pixel Art Avatars

1. Go to [Piskel App](https://www.piskelapp.com/)
2. Create a new sprite (recommended size: 64x64 or 128x128 pixels)
3. Draw your Minecraft-style character
4. Export as PNG
5. Save the image to `public/avatars/` folder
6. Update the member's `image` path in `src/components/Members.jsx`

### Avatar File Structure

```
public/
└── avatars/
    ├── steve.png
    ├── alex.png
    ├── creeper.png
    ├── diamond.png
    ├── wizard.png
    ├── ender.png
    ├── architect.png
    ├── nether.png
    ├── king.png
    ├── pioneer.png
    ├── builder.png
    └── cave.png
```

### Adding a New Member

Edit `src/components/Members.jsx` and add to the members array:

```javascript
{
  name: 'YourName',
  role: 'Member', // or 'Leader', 'Co-Leader', 'Elder'
  image: '/avatars/yourname.png',
  bgColor: 'bg-blue-500', // Choose any Tailwind color
  roleColor: 'text-minecraft-gray', // or 'text-minecraft-green', 'text-blue-400'
}
```

## Project Structure

```
├── public/
│   ├── avatars/          # Member avatar images
│   ├── logo.png
│   └── Castle Photos...jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── Members.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MembersPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

- Update colors in `tailwind.config.js`
- Modify components in `src/components/`
- Replace images in `public/` folder
- Adjust fonts in `src/index.css`
- Change clan name in `src/components/Hero.jsx`

## Technologies

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Tips for Pixel Art

- Use [Piskel](https://www.piskelapp.com/) for creating pixel art
- Keep images small (64x64 or 128x128 pixels)
- Use limited color palettes for authentic retro look
- Export as PNG with transparency
- Use `image-rendering: pixelated` CSS for crisp pixels
