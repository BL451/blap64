# CLAUDE.md - Project Context & Developer Preferences

## Project Overview
**blap64** is the personal portfolio website of Benjamin Lappalainen, a Toronto-based creative technologist and interactive media artist. This is a custom-built Single Page Application showcasing interactive media installations, photography collections, and creative coding projects.

**Live Site**: https://blap64.xyz/  
**Repository**: Custom SPA built from scratch (no frameworks like React/Vue)

## Technology Stack
- **Frontend**: Vanilla ES6+ JavaScript with custom SPA architecture
- **Graphics**: p5.js v2.0.3 for real-time interactive visuals
- **Components**: Lit v3.2.1 for secure HTML templating
- **Build**: Parcel v2.13.3 for bundling and dev server
- **Deployment**: GitHub Pages via gh-pages

## Architecture & Patterns

### Directory Structure
```
src/
├── app.js                 # Main application entry
├── utils.js              # Shared utilities, UI classes, animation system
├── router/               # Custom hash-based routing system
├── views/                # Page components with p5.js sketches
│   ├── Home/            # Interactive landing page
│   ├── CodeArt/         # Interactive media showcase  
│   ├── Photo/           # Photography collections (4 collections)
│   ├── Installations/   # Live performance documentation
│   ├── About/           # Biography and CV
│   └── elements/        # Reusable UI components
└── assets/              # Optimized media assets
    ├── fonts/           # Variable fonts
    ├── photos/          # Photo collections with import workflow
    └── interactive/     # Installation documentation
```

### Key Technical Patterns
- **Custom SPA Router**: Hash-based routing with parameter support (`#!/route`)
- **p5.js Integration**: Custom `<p5-element>` web component for sketch embedding
- **Component System**: Custom UI classes (UICornerBoxButton, UIPlanetButton, etc.)
- **Animation Manager**: Time-based animation sequencing with easing
- **Mobile-First Design**: Responsive layouts with touch-friendly interactions

## Photo Collections System

### Current Collections (4 total)
1. **PORTRAIT** - "Subjects in controlled and natural environments"
2. **PERFORMANCE** - "Live events, concerts, and artistic performances" 
3. **ABERRANT** - "Experimental and conceptual photographic explorations" (renamed from SURREAL)
4. **ASTRO** - "Celestial objects and astronomical phenomena"

### Photo Workflow & Asset Management
- **Import System**: Place unoptimized images in `collection/import/` folders
- **Optimization Script**: `src/assets/photos/optimize_photos.py` 
  - Converts to WebP format (max 1920px, 85% quality)
  - Auto-numbers files (e.g., `portrait-01.webp`, `portrait-02.webp`)
  - Hero images become both `hero.webp` and first gallery item
  - Moves originals to `collection/originals/` folder
- **Code Integration**: Manually add new images to `photo-collections.js` imports

### Photo System Implementation Details
- **Hero Images**: Appear both as collection cards AND first gallery image (no duplicate assets)
- **Fade Animations**: 400ms fade-in for hero images and gallery when ready
- **Gallery Graphics**: Cached p5.Graphics for performance, regenerated on window resize
- **Lightbox Navigation**: Wraparound navigation with static positioning
- **Mobile Optimization**: Touch scrolling, no hover effects on mobile
- **Gallery Order**: Images in `photo-collections.js` arrays may appear out of numerical order (e.g., portrait17, portrait15, portrait21) - this is INTENTIONAL for custom curation. DO NOT reorder or "fix" this numbering.

## UI/UX Design Preferences

### Visual Style
- **HUD Aesthetic**: Corner brackets, geometric shapes, technical UI elements
- **Typography**: Variable fonts (BPdotsSquareVF, ZxGamut)
- **Color Palette**: Dark theme (23,23,23 bg) with bright accents (74,144,230)
- **Animation**: Smooth fade transitions, easing functions, no instant changes

### Interaction Design
- **Desktop**: Hover effects with smooth fade animations (faster in, slower out)
- **Mobile**: No hover states, direct touch interactions, swipe navigation
- **Navigation**: Always provide clear back navigation, breadcrumb-style paths
- **Consistency**: Match styling across similar UI elements (arrows, counters, etc.)

### Component Styling Standards
When creating navigation elements, match existing patterns:
- **Arrow buttons**: 35px size, (23,23,23,200) background, (230,alpha) stroke, weight 2
- **Text counters**: BPdotsSquareVF font, weight 600, size 16px
- **Spacing**: 80px spacing from center for navigation elements
- **Mobile responsive**: Adjust sizes but maintain proportions

## Developer Workflow Preferences

### Code Style & Patterns
- **No Comments**: Avoid adding code comments unless explicitly requested
- **Concise Responses**: Keep explanations brief, focus on implementation
- **Follow Existing Patterns**: Match established code conventions and styling
- **Performance First**: Use p5.Graphics caching, optimize for mobile
- **Security Conscious**: Use Lit templates for XSS protection

### File Management Practices  
- **Prefer Editing**: Always edit existing files rather than creating new ones
- **No Proactive Documentation**: Don't create README/docs unless requested
- **Maintain Structure**: Follow established directory organization
- **Asset Optimization**: Always optimize images/media for web deployment

### Development Approach
- **Incremental Changes**: Make small, focused modifications
- **Test Workflows**: Run scripts and verify functionality after changes
- **Cross-Platform**: Consider both desktop and mobile experiences
- **Progressive Enhancement**: Ensure graceful degradation

## Installations System

### Project Management
- **InfoCard Navigation**: Matches photo lightbox styling (35px arrows, 16px text)
- **Project Data**: Stored in `project-details.js` with rich metadata
- **Media Integration**: MP4 videos with thumbnail images
- **Navigation**: Wraparound between projects, breadcrumb navigation

### Implementation Notes
- **Solar System Layout**: Orbital project selection with animated transitions
- **Planet Scaling**: Dynamic sizing based on project index
- **Mobile Adaptation**: Simplified layouts for touch devices
- **Performance**: Cleanup p5.js instances on navigation

## Build & Deployment

### Development Commands
```bash
npm run dev        # Start development server (port 4321)
npm run deploy     # Build and deploy to GitHub Pages
```

### Asset Optimization Workflow
```bash
cd src/assets/photos
python3 optimize_photos.py  # Process new images from import folders
```

### Key Files to Watch
- `/src/views/Photo/photo-collections.js` - Photo collection definitions
- `/src/views/Installations/project-details.js` - Installation projects
- `/src/utils.js` - Core utilities and UI components  
- `/src/router/Router.js` - Navigation and routing logic

## Future Development Notes

### When Adding New Features
1. Follow existing UI component patterns (UICornerBoxButton, etc.)
2. Implement mobile-responsive design from the start
3. Add fade animations for visual consistency
4. Test across different screen sizes and devices
5. Consider performance implications (p5.js instance cleanup)

### When Modifying Existing Features
1. Maintain backward compatibility with existing URLs
2. Preserve user experience patterns (navigation, animations)
3. Update related documentation if adding new workflows
4. Test photo optimization pipeline after structural changes

### Technical Debt & Maintenance
- **p5.js Memory Management**: Always cleanup instances on route changes
- **Asset Loading**: Implement fade animations for perceived performance
- **Mobile Performance**: Minimize graphics complexity for lower-end devices
- **Browser Compatibility**: Test across different browsers and devices

---

*This document should be updated whenever significant architectural changes are made to the project.*