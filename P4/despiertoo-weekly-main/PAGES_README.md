# Multi-Page Project Structure

This project contains multiple pixel-perfect page clones with interactive hover effects.

## Current Pages

- **Home Page** (`/`) - Coffee shop landing page with weekly specials and destination cards
- **Brasil Page** (`/brasil`) - Discover Brazil coffee page with origin story, types, flavors, and product selection
- **Japón Page** (`/japon`) - Discover Japan coffee page with origin story, types, flavors, and product selection
- **Italia Page** (`/italia`) - Discover Italy coffee page with origin story, types, flavors, and product selection
- **México Page** (`/mexico`) - Discover Mexico coffee page with origin story, types, flavors, and product selection
- **Alemania Page** (`/alemania`) - Discover Germany coffee page with origin story, types, flavors, and product selection
- **Shop Page** (`/tienda`) - Product detail page with image gallery, quantity selector, and add to cart
- **Events Page** (`/eventos`) - Upcoming events listing with interactive cards

## Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Main router configuration
│   ├── pages/                   # All page components
│   │   └── HomePage.tsx         # Home page (/)
│   └── components/              # Shared/reusable components
│       ├── EnhancedHeader.tsx
│       ├── EnhancedFooter.tsx
│       └── DestinationCards.tsx
└── imports/                     # Figma imports and assets
    ├── patron.png
    ├── winli1_1.png
    └── image_5.png
```

## Adding New Pages

When adding a new page:

1. Create a new component in `src/app/pages/` (e.g., `AboutPage.tsx`)
2. Add the route in `src/app/App.tsx`:
   ```tsx
   <Route path="/about" element={<AboutPage />} />
   ```
3. Place any page-specific components in `src/app/components/`
4. Place Figma imports/assets in `src/imports/`

## Running the Project

```bash
pnpm install
pnpm run dev
```

## Features

- React Router for multi-page navigation
- Pixel-perfect Figma imports
- Interactive hover effects on buttons and links
- Responsive layouts
- Tailwind CSS styling
