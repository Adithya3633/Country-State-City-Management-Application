# Geo Ledger - Country, State & City Management

A ReactJS assignment implementing hierarchical CRUD management for countries, states, and cities.

## Project structure

- `index.html` – application entry point, loads React/Babel and the JSX component files
- `src/App.jsx` – root React component, state management, and event handlers
- `src/components/CountryList.jsx` – country list view and actions
- `src/components/StateList.jsx` – state list view and state-level actions
- `src/components/CityList.jsx` – city list view and city actions
- `src/styles.css` – global page styling
- `src/App.css` – layout and app container styling
- `src/components/CountryList.css` – country card styling
- `src/components/StateList.css` – state card styling
- `src/components/CityList.css` – city list styling

## Features

- Add, edit, and delete countries
- Add, edit, and delete states under a country
- Add and delete cities under a state
- Confirmation dialogs before edits and deletes
- Cascade deletion of states and cities when a country or state is removed
- Uses React functional components and `useState`
- No backend or API required

## How to run

### Option 1: Run with Vite

1. Install dependencies once:
   ```powershell
   npm install
   ```
2. Start the dev server:
   ```powershell
   npm run dev
   ```
3. Open `http://localhost:5173`

### Option 2: Open the app statically

1. Open `index.html` in a browser.
2. Use the `+ Add country` button to add a country.
3. Add state and city items using the action buttons inside each country/state card.

> The project now supports `npm run dev` with Vite, but the static `index.html` file still works for basic preview.

## Notes

- `prompt()` collects new names for countries, states, and cities.
- `confirm()` appears before any edit or delete action.
- The UI updates immediately after each CRUD action.
- Initial sample data includes `India` with a state and cities.
