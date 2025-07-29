<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# KCA University Innovation Seminar Website

This is a React TypeScript website for the KCA University Innovation Seminar 2025. The project uses modern web technologies and follows best practices for performance, accessibility, and user experience.

## Tech Stack
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling with custom KCA University branding
- **Framer Motion** for smooth animations and transitions
- **Headless UI** for accessible component primitives
- **Heroicons** for consistent iconography

## Design System
- **Colors**: 
  - Primary: Blue (#3b82f6) - KCA University blue
  - Secondary: Gold (#f59e0b) - KCA University gold  
  - Neutral: White and dark grays for light/dark mode
- **Typography**: Inter font family for modern readability
- **Animations**: Subtle entrance animations and hover effects
- **Responsive**: Mobile-first design approach

## Key Features
1. **Dark/Light Mode**: Implemented via React Context with system preference detection
2. **Responsive Navigation**: Collapsible mobile menu with smooth animations
3. **Image Gallery**: Carousel component with category filtering and auto-play
4. **Interactive Sections**: Speakers, schedule, sponsors, and contact forms
5. **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Component Structure
- `Header`: Navigation with theme toggle and mobile menu
- `Hero`: Landing section with animated background and CTAs
- `About`: University information with statistics and features
- `Speakers`: Speaker profiles with categorization
- `Schedule`: Two-day event timeline with filtering
- `Gallery`: Image carousel with category filters
- `Sponsors`: Sponsor showcase with partnership tiers
- `Contact`: Contact form with university information
- `Footer`: Comprehensive footer with links and newsletter signup

## Development Guidelines
- Use TypeScript for all components with proper type definitions
- Follow the established color scheme (blue, gold, white) for consistency
- Implement responsive design using Tailwind's responsive prefixes
- Add meaningful animations using Framer Motion for enhanced UX
- Ensure accessibility compliance with proper ARIA attributes
- Use semantic HTML elements for better SEO and accessibility
- Maintain consistent spacing using Tailwind's spacing scale
- Optimize images and use placeholders where actual images aren't available

## Styling Conventions
- Use Tailwind utility classes for styling
- Custom components defined in `@layer components` for reusability
- Dark mode variants using `dark:` prefix
- Gradient text effects for branding elements
- Consistent border radius (rounded-lg, rounded-xl) throughout
- Shadow effects for depth and visual hierarchy

## Animation Patterns
- Entrance animations: `opacity: 0, y: 20` to `opacity: 1, y: 0`
- Hover effects: Scale transforms and color transitions
- Stagger animations for list items and grids
- Smooth transitions for theme switching and navigation

When adding new features or components, maintain consistency with the established patterns and ensure they work well in both light and dark modes.
