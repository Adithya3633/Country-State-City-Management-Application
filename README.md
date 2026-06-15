# Country-State-City Management Application

A simple React.js project for hierarchical CRUD management of countries, states, and cities.

## Project overview

This app is built with React functional components and `useState`, with all UI logic handled in the browser.
It uses React and Babel from CDN links inside `index.html`, so no local `npm install` or build step is required.

The app supports:
- Add, edit, and delete countries
- Add, edit, and delete states within a selected country
- Add and delete cities within a selected state
- `prompt()` dialogs for entering names
- `confirm()` dialogs for delete confirmations
- Nested state updates with cascade deletion behavior

## Current file structure

- `index.html` – entry point, loads React, ReactDOM, Babel, and the app files
- `src/App.js` – root component and application state logic
- `src/CountryList.js` – renders country cards and country-level actions
- `src/StateList.js` – renders states for a selected country
- `src/CityList.js` – renders cities for a selected state
- `src/index.js` – mounts the React app into the DOM

## How to run

### Option 1: Open directly in the browser

1. Open `index.html` in your browser.
2. The app loads immediately with React via CDN.

### Option 2: Use a simple local server

If you prefer a local server, use any static server such as Live Server in VS Code or `python -m http.server`:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project can be deployed as a static site.
Recommended hosts:
- Vercel
- GitHub Pages
- Netlify

Since the app is static and uses only `index.html` plus client-side React, Vercel is sufficient.

## Notes

- There is no backend service required.
- The app uses plain React state and browser dialogs for CRUD workflows.
- Data is stored only in memory, so page refresh resets the current session.
