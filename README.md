# Swiggy Clone - Getting Started Guide

This is a responsive clone of Swiggy.com built with Next.js, React, TypeScript, and Reactstrap. The project is designed to be fully responsive and work on any device size.

## Project Structure

The project follows a standard Next.js application structure with the following key components:

- `src/app/` - Contains the main application pages and layout
- `src/components/` - Contains all the reusable UI components
- `src/styles/` - Contains global styles and CSS modules

## Key Components

1. **Header** - Responsive navigation bar with mobile toggle
2. **HeroSection** - Main banner with search functionality
3. **ServiceSection** - Three main service cards (Food Delivery, Instamart, Dineout)
4. **FoodCategorySection** - Horizontal scrollable food category carousel
5. **RestaurantSection** - Restaurant listing cards with details and offers
6. **AppDownloadSection** - App download promotion section
7. **Footer** - Comprehensive footer with multiple link sections

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation
- **TypeScript** - For type safety and better developer experience
- **Reactstrap** - Bootstrap components built with React
- **Bootstrap** - For responsive grid and utility classes
- **CSS Modules** - For component-scoped styling

## Running the Project

### Development Mode

```bash
# Navigate to the project directory
cd swiggy-clone

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

## Responsive Features

The website is fully responsive and adapts to different screen sizes:

- **Mobile (< 768px)** - Stacked layout with collapsible navigation
- **Tablet (768px - 992px)** - Adjusted grid with optimized spacing
- **Desktop (> 992px)** - Full layout with horizontal sections

## Customization

You can customize the website by:

1. Modifying component files in `src/components/`
2. Updating global styles in `src/app/globals.css`
3. Adding new pages in `src/app/`

## Additional Notes

- All UI components use Reactstrap for consistent styling and responsiveness
- Bootstrap's grid system is used for layout flexibility
- Custom CSS variables are defined for Swiggy's color scheme
- Interactive elements have hover and active states for better UX
