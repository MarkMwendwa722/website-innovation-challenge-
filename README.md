# KCA University Innovation Seminar 2025

A modern, responsive website for the KCA University Innovation Seminar 2025 - Kenya's premier event for technological advancement, entrepreneurship, and sustainable innovation.

## 🌟 Features

- **Modern Design**: Clean, professional design with KCA University branding (blue, gold, white)
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for enhanced user experience
- **Interactive Components**: Dynamic galleries, schedules, and contact forms
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🎨 Design System

### Colors
- **Primary Blue**: #3b82f6 (KCA University blue)
- **Gold Accent**: #f59e0b (KCA University gold)
- **Neutral**: White backgrounds with dark gray text
- **Dark Mode**: Dark backgrounds with light text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **Headless UI** for accessible components
- **Heroicons** for consistent iconography

## 📱 Sections

1. **Header**: Navigation with theme toggle and mobile menu
2. **Hero**: Eye-catching landing section with event details
3. **About**: University information and seminar overview
4. **Speakers**: Featured speakers with profiles and bios
5. **Schedule**: Detailed two-day event timeline
6. **Gallery**: Interactive image carousel with categories
7. **Sponsors**: Sponsor showcase with partnership opportunities
8. **Contact**: Contact form and university information
9. **Footer**: Comprehensive footer with links and newsletter

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd kca-innovation-seminar
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### ThemeProvider
Manages dark/light mode state with localStorage persistence and system preference detection.

### Header
Responsive navigation with:
- Logo and university branding
- Mobile-friendly hamburger menu
- Theme toggle button
- Smooth animations

### Gallery
Interactive image carousel featuring:
- Category filtering
- Auto-play functionality
- Thumbnail navigation
- Responsive design

### Sponsors
Comprehensive sponsor section with:
- Multiple sponsorship tiers
- Partnership categories
- Sponsorship opportunity details
- Call-to-action elements

## 🌍 Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { /* blue shades */ },
      gold: { /* gold shades */ },
      dark: { /* dark mode shades */ }
    }
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js` and used throughout components.

### Content
Update speaker information, schedule details, and sponsor data in the respective component files.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Zero-configuration deployment for Vite projects
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist` folder contents

## 📄 License

This project is created for KCA University Innovation Seminar 2025.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please contact:
- Email: innovation@kca.ac.ke
- Phone: +254 20 834 9999
- Website: www.kca.ac.ke

---

**KCA University Innovation Seminar 2025** - Innovate Tomorrow Today 🚀
