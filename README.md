# MRstudio Resort Landing Page

This project is a modern travel and resort landing page built with React and Vite. It presents a luxury accommodation brand, with a hero section, destination search panel, featured stay cards, experiences, offers, trust stats, newsletter signup, and a polished responsive layout.

## What the app does

The app is designed to feel like a premium booking website for vacation stays. Users can:

- browse a luxury resort landing page
- filter by amenities and destination options
- select dates and guest counts in a booking panel
- view featured properties with pricing and ratings
- save favorite stays to local storage
- navigate through a single-page marketing layout with smooth anchor links

## How the project works

The app is organized as a small React single-page application:

- `src/App.jsx` sets up the router and page entry point
- `src/pages/Home.jsx` renders the full homepage and manages the wishlist state
- `src/components/` contains all of the page sections and reusable UI elements
- `src/data/` stores static content such as destinations, experiences, stats, and stay listings

### Main page flow

The homepage is composed of these sections:

1. `Navbar` – sticky top navigation with a mobile menu
2. `Hero` – large branded banner with messaging and call-to-actions
3. `SearchBar` – check-in/out dates, guests, room selector, and destination tiles
4. `FeaturedStays` – list of resort cards with ratings, pricing, and favorites
5. `ResortExperiences` – curated travel experiences
6. `SummerOffer` – promotional deal section
7. `TrustStats` – brand trust and performance metrics
8. `Newsletter` – email capture block
9. `Footer` – site footer with links and information
10. `ScrollToTop` – floating button to return to the top

### Wishlist behavior

The `Home` page uses React state and `localStorage` to persist favorite stays across reloads.

- `wishlist` is initialized from `localStorage` when the page loads
- `toggleFavorite` adds or removes a stay ID from the array
- the updated list is saved back to storage whenever the state changes

This keeps the wishlist user-friendly without a backend.

## How it was built

### Frontend stack

- React 19
- Vite for development/build tooling
- JavaScript (JSX)
- Tailwind CSS for styling
- React Router for page routing
- Lucide React for icons
- React Datepicker for date selection

### Styling approach

The app uses Tailwind utility classes for most layout and visual styling, with a custom palette and spacing patterns to create the luxury resort aesthetic. Components are designed with modern card layouts, rounded corners, soft shadows, and strong typography.

### Data-driven structure

Instead of fetching from an API, the project stores content in local data files under `src/data/`.

Examples:

- `stays.js` contains stay objects with name, location, price, rating, and image
- `destinations.js` contains destination cards shown in the search panel
- `experiences.js` and `stats.js` provide additional marketing content

This makes the app easy to update and reuse without changing component logic.

### Component composition

Each major section is treated as a reusable component. For example:

- `StayCard` handles each property card UI
- `SearchBar` manages booking controls and interactive states
- `Navbar` includes responsive mobile navigation

This keeps the project maintainable and easy to extend.

## Project structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  assets/
  components/
  data/
  pages/
public/
```

## Getting started

### Install dependencies

```bash
npm install
```

### Run the project locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Notes

This project is a frontend-only mockup and does not include a real backend, payment flow, or database. It is focused on a polished user experience and visual storytelling for a resort booking brand.

If you want to expand it later, the next natural steps would be:

- add real search filtering logic
- implement a booking workflow
- connect to an API or CMS for stays and destinations
- add auth for login and saved trips
