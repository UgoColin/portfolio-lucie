# Copilot Instructions - Lucie Portfolio

## Project Overview
This is a modern React portfolio website for Lucie, a graphic designer and art director. Built with React + Vite, using Tailwind CSS v4 for styling and a custom beige/cream/warm-brown color palette.

## Architecture & Key Patterns

### Component Structure
- **Single-page application** with section navigation (Header, Hero, About, Portfolio, Footer)
- **Section-based scrolling**: Use `scrollIntoView({ behavior: 'smooth' })` for navigation
- **Intersection Observer pattern**: Every main component uses `useRef` + `IntersectionObserver` for scroll animations with `animate-fade-in-up` class

### Project Data Management
- **Central data source**: All portfolio projects are defined in `src/data/projects.js`
- **Project schema**: Each project requires `{ id, title, category, description, image, tags }` with optional `additionalImages`
- **Image paths**: Always use `/projects/preview/previewX.png` format for main images, `/projects/projectX/` for additional images

### Styling System
- **CSS Variables**: Colors defined in `src/index.css` as `--cream-*`, `--beige-*`, `--warm-brown-*` (100-900 scale)
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin, config is empty (relies on CSS variables)
- **Custom animations**: `animate-fade-in-up`, `animate-blob` defined in CSS
- **Responsive**: Mobile-first with `md:` breakpoints

### State Management Patterns
- **Modal handling**: Use `selectedProject` state + `useEffect` for escape key and body scroll lock
- **Scroll effects**: Header background changes on scroll with `scrolled` state
- **Animation triggers**: Components start with `opacity-0` and add animation classes via observers

## Development Workflow

### Build & Development
```bash
npm run dev     # Vite dev server
npm run build   # Production build
npm run preview # Preview production build
npm run lint    # ESLint check
```

### Adding New Projects
1. Add images to `public/projects/preview/` and `public/projects/projectX/`
2. Update `src/data/projects.js` with new project object
3. Use categories: "Branding", "Web Design", "Print", "Illustration", "Packaging", "Motion", "Digital", "Mobile", "Affiche"

### Component Conventions
- Import components with `.jsx` extension explicitly
- Use `id` attributes for scroll navigation sections
- Implement consistent `useRef` + `IntersectionObserver` pattern for animations
- Handle keyboard navigation (Escape for modals, smooth scrolling)

## Key Files & Dependencies

### Critical Files
- `src/data/projects.js` - All portfolio content
- `src/index.css` - Color system and global styles
- `src/components/Portfolio.jsx` - Main portfolio logic with modal system
- `public/projects/` - All project images (maintain folder structure)

### Stack
- React 19 + Vite 7
- Tailwind CSS v4 (via @tailwindcss/vite)
- ESLint with React hooks plugin
- Custom CSS animations and Intersection Observer API

## Project-Specific Considerations
- **Performance**: Images are not lazy-loaded; consider optimization for production
- **Accessibility**: Keyboard navigation implemented but could be enhanced
- **SEO**: Single-page app without routing; meta tags in `index.html`
- **Localization**: Content is in French; consider this for any text additions
