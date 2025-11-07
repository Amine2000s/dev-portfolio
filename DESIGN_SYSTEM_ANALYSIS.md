# Design System Analysis

## Overview
This portfolio website uses a **dark theme** with a modern, gradient-based design system. The design emphasizes smooth animations, glassmorphism effects, and vibrant color gradients.

---

## 🎨 Color Palette

### Base Colors

#### Background Colors
- **Primary Background**: `#1a191e` (Main page background)
- **Card Background**: `#1a191e` (Project cards, skill cards)
- **Secondary Card Background**: `#2a292f` (Experience cards)
- **Navbar Background**: `#211f2a` (Navigation bar)
- **Language Switcher Background**: `#2a2835` (Language selector)
- **Hover States**: `#353342` (Interactive elements on hover)

#### Text Colors
- **Primary Text**: `white` / `text-white`
- **Secondary Text**: `text-white/60` (60% opacity white)
- **Tertiary Text**: `text-gray-300`, `text-gray-400`
- **Muted Text**: `text-white/80` (80% opacity white)

### Gradient System

#### Primary Gradients (Used in Titles)
1. **Default/About Gradient**: 
   - `linear-gradient(90deg, #2A7B9B, #57C785)`
   - Teal to Green gradient
   - Used for: Name title, Resume button

2. **Section Title Gradient** (Projects, Skills, Experience, Contact):
   - `linear-gradient(90deg, #3b82f6, #a855f7, #9333ea)`
   - Blue to Purple gradient (3-color)
   - Used for: Section headings

3. **Predefined Gradients** (Available in constants):
   - **Blue Purple**: `linear-gradient(90deg, #3b82f6, #a855f7, #9333ea)`
   - **Sunset**: `linear-gradient(90deg, #f97316, #e11d48, #6d28d9)`
   - **Emerald**: `linear-gradient(90deg, #10b981, #3b82f6, #6366f1)`

#### Component-Specific Gradients
- **Project Card Border**: `bg-gradient-to-r from-blue-500 to-green-500`
- **Project Live Demo Button**: `bg-gradient-to-r from-blue-600 to-green-600`
- **Project GitHub Button**: `bg-gradient-to-r from-gray-800 to-gray-700`
- **Title Glow Effect**: `bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20`
- **Slider**: `bg-gradient-to-r from-blue-500 to-purple-600`
- **Resume Button Text**: `bg-gradient-to-r from-white to-[#d4fff1]`

### Accent Colors

#### Status Colors
- **Available for Hire**: Emerald gradient (`from-emerald-300 to-emerald-500`)
- **Unavailable for Hire**: Rose gradient (`from-rose-300 to-rose-500`)

#### Technology Tag Colors (Tailwind Classes)
- `text-blue-400` - React, CSS
- `text-green-400` - Spring Boot, MySQL, Node.js
- `text-yellow-400` - Thymeleaf, JavaScript
- `text-orange-400` - MySQL (variant), HTML
- `text-purple-400` - OAuth
- `text-pink-400` - Tailwind CSS
- `text-indigo-400` - React (variant)
- `text-red-400` - Red accents
- `text-gray-400` - Neutral/muted

#### Skill Icon Colors (Hex Values)
Skills use brand-specific colors:
- Python: `#3776AB`
- Spring: `#6DB33F`
- Node.js: `#339933`
- Docker: `#2496ED`
- AWS: `#FF9900`
- WordPress: `#21759B`
- And many more (see `constants.ts`)

#### Contact Card Colors
- **Email**: Blue (`text-blue-400`, `bg-blue-500/20`)
- **Phone/WhatsApp**: Green (`text-green-400`, `bg-green-500/20`)
- **Location**: Purple (`text-purple-400`, `bg-purple-500/20`)

---

## 📐 Typography

### Font Families
- **Primary**: Roboto (`--font-roboto`)
- **Secondary**: Poppins (`--font-poppins`)
- **Tertiary**: Inter (`--font-inter`)

### Font Sizes & Weights
- **Section Titles**: `text-4xl sm:text-5xl md:text-6xl` (Bold)
- **Name Title**: `text-4xl sm:text-5xl md:text-6xl` (Bold)
- **Project Titles**: `text-2xl` (Bold)
- **Body Text**: `text-lg`, `text-xl` (Regular to Medium)
- **Small Text**: `text-sm` (Regular)
- **Tags**: `text-sm` (Medium weight)

### Text Effects
- **Gradient Text**: Uses `bg-clip-text` with `text-transparent`
- **Glow Effects**: Subtle blur effects on titles
- **Typing Animation**: Used for rotating tags

---

## 🎭 UI Patterns & Components

### 1. Navigation Bar
- **Style**: Fixed, rounded-full pill shape
- **Background**: `#211f2a` with rounded corners
- **Position**: Top center, `max-w-[600px]`
- **Text**: `text-white/60` hover to `text-white`
- **Z-index**: `z-40`

### 2. Cards

#### Project Cards
- **Container**: Dark background `#1a191e`
- **Border**: 2px gradient border (`from-blue-500 to-green-500`)
- **Border Radius**: `rounded-3xl` (24px)
- **Hover Effect**: `-translate-y-2` (lifts up)
- **Image**: `rounded-xl` with `border-white/10`
- **Buttons**: Full-width gradient buttons

#### Skill Cards
- **Background**: `#1a191e`
- **Hover**: Scale up (`scale-105`), lift (`-translate-y-2`)
- **Shadow**: Transparent to visible on hover
- **Animation**: Fade-in-up with staggered delays

#### Experience Cards
- **Background**: `#2a292f`
- **Position**: Alternating left/right on large screens
- **Border Radius**: `rounded-2xl`
- **Icon**: White circle with border

#### Contact Cards
- **Background**: `#1a191e` with hover to `#25242a`
- **Icon Container**: Colored background with opacity (`bg-{color}-500/20`)
- **Border Radius**: `rounded-xl`

### 3. Buttons

#### Primary Buttons (Resume, Live Demo)
- **Style**: Gradient background
- **Hover**: Scale up (`scale-105`)
- **Shadow**: Dynamic shadow on hover (resume button)
- **Border Radius**: `rounded-lg` or `rounded-xl`

#### Secondary Buttons (GitHub)
- **Style**: Gray gradient (`from-gray-800 to-gray-700`)
- **Hover**: Lighter gray gradient

### 4. Borders & Decorations

#### Image Borders
- **Left Top Border**: Blue (`#3b82f6`) - appears on hover
- **Bottom Right Border**: Green (`#22c55e`) - appears on hover
- **Border Width**: 4px
- **Animation**: Opacity transition on hover

#### Card Borders
- **Project Cards**: Gradient border using padding trick
- **Contact Cards**: Subtle white borders (`border-white/10`)

### 5. Animations

#### Entrance Animations
- **Fade In Up**: `animate-fade-in-up` (0.5s ease-out)
- **Slide In**: Left/right slide with opacity
- **Staggered**: Skill cards with delay based on index

#### Hover Animations
- **Scale**: `scale-105`, `scale-110`, `scale-125`
- **Translate**: `-translate-y-1`, `-translate-y-2`
- **Rotate**: Arrow rotation in language switcher
- **Duration**: Typically `300ms` or `500ms`

#### Continuous Animations
- **Typing Effect**: For rotating tags (2s steps)
- **Slide Loading**: 3.5s linear infinite
- **Spin Slow**: 10s linear infinite

### 6. Spacing System

#### Padding
- **Cards**: `p-4`, `p-6`, `p-8`
- **Buttons**: `px-4 py-2`, `px-8 py-4`
- **Sections**: `py-20`, `my-32`

#### Gaps
- **Grid Gaps**: `gap-8` (projects), `gap-6` (contact)
- **Flex Gaps**: `gap-2`, `gap-3`, `gap-4`

#### Margins
- **Section Margins**: `my-32`
- **Component Margins**: `mb-12`, `mt-4`, `mt-8`

### 7. Shadows & Effects

#### Box Shadows
- **Card Hover**: `shadow-[0_0_20px]` (dynamic)
- **Button Hover**: Custom shadow with color matching gradient
- **Glow Effects**: Blur effects on titles

#### Backdrop Effects
- **Glassmorphism**: `backdrop-blur-md` (used in tags)
- **Opacity Layers**: Various `opacity-20`, `opacity-50` for overlays

---

## 🎯 Design Principles

### 1. **Dark Theme First**
- All backgrounds use dark shades
- High contrast for readability
- White/light text on dark backgrounds

### 2. **Gradient Emphasis**
- Gradients used for:
  - Titles and headings
  - Buttons and CTAs
  - Borders and accents
  - Background effects

### 3. **Smooth Interactions**
- All hover states have transitions
- Consistent duration (300-500ms)
- Transform-based animations (scale, translate)

### 4. **Layered Depth**
- Multiple z-index layers
- Shadow effects for depth
- Border highlights on hover

### 5. **Responsive Design**
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Flexible layouts with `flex-wrap`

### 6. **Consistent Spacing**
- 4px base unit (Tailwind default)
- Consistent padding/margin scales
- Generous whitespace

---

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px)
- **Large**: `lg:` (≥ 1024px)
- **Extra Large**: `xl:` (≥ 1280px)

### Responsive Patterns
- **Navbar**: Wraps on mobile, horizontal on desktop
- **Projects Grid**: 1 column → 2 columns → 3 columns
- **Skills Grid**: 2 columns → 4 columns → 6 columns
- **Experience**: Single column on mobile, alternating on desktop (>1250px)

---

## 🔧 Technical Implementation

### CSS Framework
- **Tailwind CSS v4** with custom theme
- Custom animations in `styles.css`
- Inline styles for dynamic gradients

### Animation Library
- **Framer Motion** for complex animations
- **React Intersection Observer** for scroll animations

### Color System
- **Hex colors** for specific brand colors
- **Tailwind classes** for common colors
- **CSS gradients** for dynamic effects
- **Opacity modifiers** for transparency (`/20`, `/60`, `/80`)

---

## 📋 Component-Specific Patterns

### Title Components
- **Title.tsx**: Name with gradient, includes "Hello, I am" prefix
- **TitleTwo.tsx**: Section titles with gradient and glow effect
- Both use `bg-clip-text` for gradient text

### Card Components
- Consistent dark backgrounds
- Rounded corners (`rounded-xl`, `rounded-2xl`, `rounded-3xl`)
- Hover effects with transform
- Gradient borders where applicable

### Button Components
- Full-width or auto-width
- Gradient backgrounds
- Icon + text layout
- Hover scale effects

### Tag/Badge Components
- Rounded-full shape
- Colored text
- Dark background (`bg-gray-800`)
- Small padding

---

## 🎨 Color Usage Summary

| Element | Color/Pattern | Usage |
|---------|--------------|-------|
| Background | `#1a191e` | Main background |
| Cards | `#1a191e`, `#2a292f` | Card backgrounds |
| Primary Gradient | `#2A7B9B → #57C785` | Name, Resume button |
| Section Gradient | `#3b82f6 → #a855f7 → #9333ea` | Section titles |
| Accent Blue | `#3b82f6` | Borders, accents |
| Accent Green | `#22c55e`, `#57C785` | Borders, accents |
| Text Primary | `white` | Main text |
| Text Secondary | `white/60` | Secondary text |
| Hover States | `#353342` | Interactive elements |

---

## 🔄 Modification Guidelines

When modifying the design system:

1. **Maintain Color Consistency**: Use existing color palette or extend systematically
2. **Preserve Animation Patterns**: Keep transition durations consistent (300-500ms)
3. **Respect Spacing Scale**: Use Tailwind spacing scale (4px base)
4. **Follow Gradient Patterns**: Use similar gradient directions (90deg) for consistency
5. **Maintain Dark Theme**: Keep dark backgrounds, light text
6. **Consistent Border Radius**: Use established radius values (`rounded-xl`, `rounded-2xl`, `rounded-3xl`)
7. **Hover States**: Always include hover effects with smooth transitions

---

## 📝 Notes

- The design system is **gradient-heavy** - most prominent elements use gradients
- **Glassmorphism** is used sparingly (tags component)
- **Brand colors** are preserved for skill icons
- **Dynamic gradients** can be customized via `templateOneData.json`
- The system supports **multi-language** with consistent styling across languages


