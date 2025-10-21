# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UCBlinds is a Next.js 15 website for a blind cleaning and repair service company. The project uses:
- **Next.js 15.4.5** with App Router architecture
- **React 19.1.0** with client-side components
- **Tailwind CSS v4** (PostCSS plugin architecture)
- **Lucide React** for icons
- Custom fonts: Geist Sans and Geist Mono (via next/font)

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run Next.js linter
```

## Architecture & Structure

### App Router Structure
- `app/page.js` - Homepage with hero section and multi-step booking form
- `app/layout.js` - Root layout with metadata and font configuration
- `app/globals.css` - Global styles with Tailwind v4 imports and CSS variables

### Components
- `Components/MultiStepContactForm.jsx` - 4-step booking form (Contact → Property → Services → Schedule)
- `Components/Placeholder.jsx` - Template component for unfinished pages (uses React Router, may need migration to Next.js Link)

### Key Technical Details

**Navigation**: The homepage (`app/page.js`) currently uses Next.js `Link` and `usePathname` for navigation, with routes defined for:
- `/` (Home)
- `/services`
- `/about`
- `/process`
- `/testimonials`
- `/contact`

Note: Most of these routes don't exist yet - they need to be created as subdirectories under `app/` following Next.js App Router conventions.

**Styling**:
- Uses Tailwind CSS v4 with the new PostCSS plugin architecture (`@tailwindcss/postcss`)
- Custom color `#357CCE` (UCBlinds brand blue) is hardcoded throughout - should be added to Tailwind theme
- No `tailwind.config.js` exists (Tailwind v4 doesn't require it, but one can be added for customization)
- Uses inline `@theme` directive in `globals.css` for CSS variable definitions

**Path Aliases**:
- `@/*` maps to the root directory (configured in `jsconfig.json`)
- Import components using `@/Components/ComponentName`

**Client Components**:
- The homepage uses `"use client"` directive (required for useState, event handlers)
- MultiStepContactForm is a client component with extensive form state management

### Component State Management
The MultiStepContactForm manages complex state including:
- Multi-step wizard (4 steps) with validation per step
- Form data for contact info, property details, service selection, and scheduling
- Array-based selections (serviceType, blindTypes) with toggle functionality
- Single selections (propertyType, preferredTime, urgency)

### Images & Assets
- Logo is loaded from external Builder.io URL
- Background image expected at `/public/Img/download.jpg`
- Public directory structure: `public/Img/` for images, various SVG files in root

## Development Notes

**React Router vs Next.js**:
- `Placeholder.jsx` uses React Router's `Link` component, which won't work in Next.js
- When implementing new pages, use Next.js `Link` from `next/link` instead

**Missing Routes**:
When creating the missing routes (services, about, process, testimonials, contact), follow Next.js App Router conventions:
- Create `app/[route]/page.js` for each route
- Each page should be a default export function
- Consider extracting the header/navigation into a shared layout or component

**Mobile Menu**:
The mobile menu has a custom sliding animation with fixed positioning and backdrop overlay. The implementation is in `app/page.js` lines 112-152.

**Form Submission**:
Currently logs to console and shows alert (line 63-66 of MultiStepContactForm.jsx). This needs backend integration for actual appointment booking.

**Brand Colors**:
- Primary Blue: `#357CCE`
- These colors are currently hardcoded - consider adding to a Tailwind theme configuration file

**Fonts**:
- Primary: Montserrat (for headings, buttons) - Currently NOT imported, only Geist fonts are configured
- Secondary: Inter (for body text) - Currently NOT imported
- Actual fonts: Geist Sans and Geist Mono are the only fonts properly loaded via next/font

The CSS references `font-montserrat` and `font-inter` classes that don't exist. These need to be either:
1. Added to `app/layout.js` using next/font/google, or
2. Replaced with the existing Geist fonts
