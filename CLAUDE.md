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
- **Social Media Redirects**: Static HTML redirect pages for Instagram-compatible URLs
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
- **Cursor Feedback**: Pointer cursor on all interactive elements (collection cards, gallery images, navigation arrows, UI buttons)

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
- **Breadcrumb Navigation**: When adding new compound routes (e.g., `/interactive/web`), always update `src/views/elements/breadcrumb-nav.js` to include the new path. Each segment should be independently clickable (e.g., `/interactive` and `/web` should both be navigable). This ensures proper navigation hierarchy and prevents broken breadcrumb links.

### Asset Optimization Systems

#### Live Experiences Preview Thumbnails (256x256)
- **Location**: `src/assets/interactive/live/preview-thumbs/`
- **Script**: `src/assets/interactive/live/optimize_preview_thumbs.py`
- **Usage**: Optimized thumbnails for hover previews on planet buttons
- **Integration**: Referenced via `previewThumbnail` property in `project-details.js`
- **Performance**: Reduces loading time from 100KB+ to 1.8-25.6KB per preview
- **Format**: WebP, 256x256 center-cropped squares, 85% quality

#### Photo Collection Hero Thumbnails (768x768)  
- **Location**: `src/assets/photos/hero-thumbs/`
- **Script**: `src/assets/photos/optimize_hero_thumbs.py`
- **Usage**: Optimized hero images for photo collection overview cards
- **Integration**: Referenced via `heroImageThumb` property in `photo-collections.js`
- **Performance**: 71.3% file size reduction (108-876KB → 50.6-243.3KB)
- **Format**: WebP, 768x768 center-cropped squares, 90% quality
- **Note**: Original `heroImage` preserved for gallery viewing

#### Video Loading Strategy
- **Desktop Only**: Moving video previews and autoplaying gallery videos
- **Mobile/Tablet**: Static thumbnails only (prevents background audio issues on iPadOS)  
- **Detection**: Uses `isDesktopOnly()` function in `utils.js` for proper device detection
- **Implementation**: Video elements only created on true desktop devices
- **iPadOS Detection**: Modern iPads (iOS 13+) report user agent as "Macintosh" instead of "iPad" - must check for `navigator.maxTouchPoints > 1` to properly detect touch-capable devices and prevent video autoplay

### OpenGraph Integration
- **File Location**: `public/og-image.webp` (1200x630, 25KB)
- **Build Integration**: Added to `package.json` predeploy script with `cp public/og-image.webp ./dist`
- **Meta Tags**: Complete OpenGraph implementation with dimensions and alt text
- **Deployment**: File copied to root during build for `https://blap64.xyz/og-image.webp` access

### Physics and Visual Separation Pattern
- **Independent Parameters**: When creating interactive UI elements with physics, separate physics calculations from visual presentation
- **Radius vs Scale**: Use `radius` for collision detection and physics interactions, `scale` for visual rendering size
- **Example**: UIWebButton class uses this pattern - radius for neighbor calculations and forces, scale for button display size

### iframe Integration for Interactive Content
- **Permissions Policy**: Always include comprehensive iframe permissions for p5.js sketches: `microphone; camera; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; accelerometer; magnetometer; midi`
- **Cross-Domain Content**: Expect integration of external creative coding platforms (OpenProcessing, CodePen, p5.js Editor)
- **Interactive Media**: Plan for sketches requiring device inputs (microphone, webcam, sensors)

### Manual Preference Overrides
- **User Modifications**: When user manually adjusts code parameters (like text size, positioning), preserve those changes even when making related updates
- **Explicit Reversion Requests**: Only change manually-set values when user explicitly asks to revert specific elements

### Mobile Touch Scrolling Prevention
- **Nuclear Viewport Locking**: For modal/lightbox overlays on mobile, comprehensive scroll prevention requires locking both HTML and body elements with `position: fixed`, saving/restoring scroll position, and using `stopImmediatePropagation()` with capture-phase event listeners on both window and document
- **Event Prevention Pattern**: Use capture-phase listeners (`{ capture: true }`) and allow only iframe interactions while blocking all other touch events
- **Complete Solution**: Lock HTML and body elements, prevent ALL touch events except on iframe, save scroll position for restoration

### WebExperiences System Implementation
- **Project Structure**: Projects support both local and external URLs with `type` field, thumbnails managed via Parcel imports with `url:` prefix
- **UIWebButton HUD Styling**: Implements sci-fi aesthetic with corner brackets, status indicator dots, scan line effects, and customizable subtitle fields
- **Connection Visualization**: Animated pulse dots traveling along connections with distance-based opacity, junction nodes for longer connections
- **Asset Optimization**: Thumbnails optimized to 512px max dimension WebP format, originals stored in `thumbnails/originals/` (gitignored)
- **Project Data Fields**: Each project includes `name`, `slug`, `year`, `description`, `subtitle`, `image`, `type`, and `url` fields for comprehensive metadata

### HUD Visual Design Patterns
- **Consistent Color Scheme**: Blue theme (74, 144, 230) for web experiences, white (255) for installations, maintains visual hierarchy across sections
- **Corner Bracket System**: L-shaped targeting brackets at element corners, consistent sizing across UI components
- **Status Indicators**: Small dots, crosses, and text overlays that appear on hover/interaction states
- **Animation Timing**: Smooth fade transitions with appropriate easing, scan line effects at 0.05 speed multiplier for subtle movement

### Modal Overlay System & Mobile Integration
- **Help Button Hiding**: Help button is hidden on both desktop and mobile when any modal overlay is active (infoCards, lightboxes, help popup) to prevent UI conflicts and maintain focus on overlay content
- **Breadcrumb Navigation**: Hidden only on mobile when infoCards are open (to save screen space), visible on desktop
- **Global Flag Pattern**: Use `window.helpPopupOpen` and `window.contactPopupOpen` flags for cross-component communication when p5.js bypasses CSS pointer-events. All p5.js interaction checks should include both flags: `if (window.helpPopupOpen || window.contactPopupOpen) return;`
- **iOS Theme Color Integration**: Dynamically update `meta[name="theme-color"]` to `#000000` when overlays open, restore to `#171717` when closed. Immediate changes work better than delayed transitions due to iOS's native fade effect
- **Rendering Order**: HUD decorations and titles must render before overlay backgrounds to be properly dimmed by semi-transparent overlays
- **Unified Animation Timing**: All modal overlays use 300ms transition duration for consistent user experience
- **Close Button Positioning**: Web Experiences uses centered close button below iframe on mobile, top-right corner on desktop. Adjust click boundaries and iframe height accordingly
- **Theme Color Cleanup**: Always restore original theme color in cleanup functions in case sketch destruction occurs while overlay is active

### Social Media Redirect System
- **Purpose**: Static HTML redirect pages solve Instagram's URL encoding issues with hashbang routes (# character gets encoded)
- **Structure**: For each SPA route like `/#/links`, create corresponding directory with `index.html` at `/links/index.html`
- **Template Requirements**: Each redirect page must include:
  - `<meta name="theme-color" content="#171717">` to match site theme and prevent white flash
  - `<meta http-equiv="refresh" content="0; url=https://blap64.xyz/#/[ROUTE]">` for instant redirect
  - `<script>window.location.href = "https://blap64.xyz/#/[ROUTE]";</script>` as JavaScript fallback
  - CSS styling: `body { background-color: #171717; color: #fff; font-family: sans-serif; margin: 0; padding: 20px; }`
  - Manual fallback link for users with JavaScript disabled
- **Current Implementation**: Redirect pages exist for `/links`, `/about`, `/interactive`, `/interactive/web`, `/interactive/live`, and `/photo`
- **Deployment**: Redirect directories are automatically copied to `dist/` during build process via updated `predeploy` script (`cp -r links about interactive photo dist/`)
- **Development Note**: Redirects only work after deployment or when serving built `dist/` folder - not during `npm run dev`
- **New Route Protocol**: When adding new routes to the SPA, ALWAYS create corresponding redirect pages using the established template pattern

### SEO Implementation & Maintenance
- **Files Modified**: `index.html` (meta tags, JSON-LD), `src/router/Router.js` (dynamic meta updates), `package.json` (build process), plus `robots.txt` and `sitemap.xml` creation
- **Meta Tags**: Complete OpenGraph, Twitter Cards, description, keywords, author, and canonical URL implementation
- **Dynamic Updates**: Route-specific titles and descriptions update automatically via router (`src/router/Router.js` lines 4-67)
- **JSON-LD Schema**: Person/Creative Technologist structured data in `index.html` (lines 53-76) - update employer, location, skills as needed
- **Sitemap Maintenance**: Update `sitemap.xml` when adding routes or making major content changes, include new URLs in router's meta tag definitions
- **Build Integration**: `robots.txt`, `sitemap.xml` automatically copy to `dist/` during deployment
- **Keywords Strategy**: Current focus includes "creative technologist, interactive media, artist, photography, installations, creative coding, p5.js, Toronto artist, AI"
- **Future Maintenance**: Update JSON-LD when career changes, add new routes to both router meta definitions and sitemap, consider adding content to redirect pages for enhanced SEO

### p5.js Event Handling Limitations
- **CSS Pointer Events**: `pointer-events: none` doesn't work with p5.js canvases - use global flag approach instead
- **Touch Event Bleeding**: Mobile touches can bleed through overlays to elements behind - implement comprehensive touch tracking and scroll detection
- **Event Bypassing**: p5.js event handlers bypass standard DOM event bubbling, requiring manual coordination with HTML elements

### WebGL Shader Loading with Parcel
- **Direct Module Imports**: Use `import shaderSource from './shader.glsl'` to import GLSL files as string content
- **Avoid URL Imports**: Do NOT use `import shaderUrl from 'url:./shader.glsl'` as this returns wrapped Parcel module URLs, not raw GLSL source
- **Shader Creation**: Use `p.createShader(vertSource, fragSource)` directly with imported string content
- **p5.js 2.0.3 Pattern**: No preload function - use async setup with direct imports for immediate access to shader strings

---

*This document should be updated whenever significant architectural changes are made to the project.*