# 📚 BookHaven - Modern E-Book Store

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge" alt="Lucide React">
  <img src="https://img.shields.io/badge/Responsive-FF69B4?style=for-the-badge" alt="Responsive Design">
</div>

## 📖 Project Overview

BookHaven is a modern e-commerce platform designed for digital book enthusiasts. This project showcases a sleek, responsive interface with optimized user experience across all devices.

## 📸 Screenshots

<div align="center">
  <img src="./public/screenshots/hero-section.png" width="45%" alt="Hero Section">
  <img src="./public/screenshots/carousel.png" width="45%" alt="Carousel">
  <img src="./public/screenshots/swipercss.png" width="50%" alt=" swipercss" style="margin-top: 20px">
</div>

## 🏆 Bestsellers Carousel Component

Our featured component provides an elegant browsing experience for discovering top-selling e-books.

### ✨ Key Features

- **Responsive Design**: Seamlessly transforms between mobile carousel and desktop grid layouts
- **Intuitive Navigation**: User-friendly controls with previous/next buttons and pagination indicators
- **Visual Elegance**: Carefully crafted with decorative elements and subtle shadows
- **Performance Optimized**: Engineered for efficiency using React hooks and modern rendering techniques

### 🛠️ Technology Stack

```javascript
// Core dependencies
{
  "react": "^18.2.0",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.264.0"  // For navigation icons
}
```

### 📱 Responsive Implementation

| Device | Display Layout | Items Visible | Navigation Methods |
|--------|---------------|---------------|-------------------|
| Mobile | Horizontal Carousel | 1 | Touch swipe + directional buttons |
| Tablet | Horizontal Carousel | 2 | Touch swipe + directional buttons |
| Desktop | Grid Display | 4 | Pagination controls + directional buttons |


## 🚀 Getting Started


### Component Usage

```jsx
import BestsellersCarousel from './components/BestsellersCarousel';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Bestselling E-Books</h2>
      <BestsellersCarousel />
    </div>
  );
}
```

### Customization Options

```jsx
// Custom configuration example
<BestsellersCarousel 
  booksPerPage={3}                   // Override default items per view
  autoplay={true}                    // Enable automatic scrolling
  autoplaySpeed={5000}               // Set interval in milliseconds
  theme="blue"                       // Alternative color theme
/>
```


## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Recommended Hosting Platforms
- Vercel
- Netlify
- AWS Amplify


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


---

<div align="center">
  Made with ❤️ using React and Tailwind CSS
</div>
