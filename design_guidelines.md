# Design Guidelines: Dark Mode Personal Portfolio

## Design Approach
**Selected Approach:** Custom dark-first minimalist design with focus on personal branding
**Key Principle:** Clean, modern single-page portfolio that emphasizes content hierarchy and professional presentation

## Design Decision Rationale
This portfolio follows a utility-focused approach prioritizing:
- Immediate visual impact through hero presentation
- Clear content organization with scrollable sections
- Professional aesthetic through restrained dark palette
- Mobile-first responsive behavior

## Core Design Elements

### Typography
**Font System:**
- Primary: Modern sans-serif (Inter, DM Sans, or similar) for clean readability
- Headings: Weight 700-800 for strong hierarchy
- Body: Weight 400-500 for optimal reading
- Size Scale: Base 16px mobile, scaling to 18px desktop
  - Hero Name: 3xl-4xl (mobile) to 5xl-6xl (desktop)
  - Section Headings: 2xl to 4xl
  - Card Titles: xl to 2xl
  - Body Text: base to lg

### Layout System
**Spacing Primitives:** Consistent use of Tailwind units 4, 6, 8, 12, 16, 20, 24
- Section padding: py-12 mobile, py-20 desktop
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Container Strategy:**
- Max-width: max-w-6xl for content containment
- Full-width sections with inner containers for proper spacing
- Centered alignment: mx-auto for main content areas

### Component Library

#### Hero Section (Full Viewport)
**Layout:** Centered vertical alignment with full viewport height
- Circular profile image: 150-200px diameter with subtle border
- Image positioning: Centered, above name and links
- Social icons: Horizontal arrangement directly below profile
- Background: Full-screen dark treatment with subtle gradient or pattern option
- Vertical spacing: Generous breathing room between elements (space-y-6 to space-y-8)

**Profile Photo Treatment:**
- Perfect circle using border-radius
- Clean white or subtle colored border (2-3px)
- Optional subtle shadow for depth
- Responsive sizing: 150px mobile, 200px desktop

**Social Link Icons:**
- Size: 24-28px square
- Style: Simple, clean SVG outlines
- Arrangement: Horizontal row with 4-6 unit spacing between
- Interactive: Scale and opacity shifts on hover
- Clickable area: Generous padding for easy tapping

#### Projects Section (Scroll-Revealed)
**Grid System:**
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3 columns (lg:grid-cols-3)
- Grid gap: 6-8 units for clear separation
- 3-4 project cards total for focused showcase

**Project Cards:**
- Structure: Elevated card with subtle shadow
- Padding: p-6 to p-8 for comfortable content spacing
- Border radius: rounded-lg to rounded-xl for modern feel
- Shadow: Layered shadow for depth without heaviness
- Hover state: Subtle lift and enhanced shadow

**Card Content Hierarchy:**
- Project title: Bold, xl-2xl size, top of card
- Description: 2-3 lines of text, regular weight
- CTA button: "View Project" at bottom, full or inline width
- Vertical spacing: space-y-4 between elements

#### Optional Navigation (Minimal)
**If included:**
- Fixed or sticky header at top
- Name/logo on left
- Quick jump links on right (if multi-section grows)
- Compact height: 16-20 units
- Transparent or solid dark background

### Visual Hierarchy

**Dark Mode Color Strategy:**
- Primary background: Deep charcoal/near-black (gray-900)
- Card backgrounds: Slightly lighter (gray-800)
- Text primary: Pure white or near-white (gray-50)
- Text secondary: Muted gray (gray-300-400)
- Accent highlights: Optional vibrant accent for links/buttons
- Borders/dividers: Subtle gray (gray-700-800)

**Depth & Elevation:**
- Hero: z-index baseline, full viewport presence
- Cards: Elevated with shadow, clear separation from background
- Interactive elements: Additional elevation on hover
- Consistent shadow system: sm, md, lg, xl shadows only

### Interactions & Animations

**Hover Effects:**
- Social icons: Scale to 110% with opacity shift
- Project cards: Translate up 2-4px with enhanced shadow
- Buttons: Background shift and subtle scale
- All transitions: 200-300ms duration with ease-in-out

**Scroll Behavior:**
- Smooth scrolling enabled globally
- Projects section naturally revealed on scroll
- No complex scroll-triggered animations (keep simple)

### Responsive Behavior

**Breakpoint Strategy:**
- Mobile-first base styles
- md breakpoint (768px): 2-column grid, increased spacing
- lg breakpoint (1024px): 3-column grid, desktop typography scale
- Hero adjusts profile size and spacing at md breakpoint
- All padding/margins scale proportionally

**Touch Optimization:**
- Minimum touch target: 44x44px for all interactive elements
- Generous spacing between tappable items on mobile
- Social icons sized and spaced for easy mobile interaction

### Accessibility Standards

**Critical Requirements:**
- Semantic HTML: header, main, section, article tags
- Alt text: Descriptive text for profile photo
- ARIA labels: For icon-only links (GitHub, LinkedIn)
- Keyboard navigation: All interactive elements accessible
- Focus states: Visible outline on all focusable elements
- Color contrast: WCAG AA minimum (white on gray-900 exceeds requirements)

### Content Strategy

**Hero Content:**
- Name: Your professional name prominently displayed
- Optional tagline: Brief professional identity (1 line)
- Social links: GitHub and LinkedIn (expandable to others)
- Placeholder image URL until replaced with actual photo

**Project Cards (3-4 cards):**
- Placeholder titles: "Project 1", "Project 2", etc.
- Description text: Lorem ipsum or generic project descriptions
- Non-functional buttons: Visual placeholders for future links
- Consistent card heights where possible for grid alignment

### Implementation Notes

**Placeholder Strategy:**
- Profile image: https://via.placeholder.com/200
- Clear comments marking areas for customization
- Realistic sample content that demonstrates layout

**Performance Considerations:**
- Single page load: No routing complexity
- Minimal dependencies: Only React, ReactDOM, Tailwind
- Optimized images: Proper sizing recommendations in comments
- CSS optimization: Tailwind purge for production builds

### Design Polish

**Final Touches:**
- Consistent border-radius values throughout (lg or xl)
- Unified shadow system across all elevated elements
- Balanced whitespace creating clear visual breaks
- Professional, portfolio-ready aesthetic out of the box
- Clean, comment-guided code for easy customization

This design creates a sophisticated, professional portfolio that works beautifully in dark mode while maintaining simplicity and ease of customization.