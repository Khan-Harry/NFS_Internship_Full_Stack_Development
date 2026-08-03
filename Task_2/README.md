# Pokédex Explorer ⚡

> **Task 2 — NFS Full Stack Development Internship**
> React app that fetches live data from the PokéAPI with search, type filtering, loading skeletons, and error handling.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-6366f1?style=for-the-badge)](https://YOUR_GITHUB_USERNAME.github.io/Task_2)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Live API Data** | Fetches 150 Pokémon from PokéAPI v2 in parallel |
| ⏳ **Loading State** | Animated shimmer skeleton cards + spinner (never a blank screen) |
| ❌ **Error State** | Friendly error message + retry button + simulate error for demo |
| 🔍 **Search** | Real-time search by Pokémon name |
| 🎨 **Type Filter** | Dropdown to filter by Pokémon type (Fire, Water, Grass, etc.) |
| 📊 **Pokémon Cards** | Official artwork, type badges, HP/ATK/DEF/SPD stat bars, abilities, weight & height |
| 📱 **Responsive** | Works on mobile, tablet, and desktop |

## 🚀 Tech Stack

- **React 19** + **Vite 8** (fast HMR)
- **Vanilla CSS** — glassmorphism dark mode, CSS custom properties, type-color theming
- **PokéAPI v2** — free, no API key required
- **gh-pages** — one-command GitHub Pages deployment

## 🛠️ Local Development

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Task_2.git
cd Task_2
npm install
npm run dev
# Open http://localhost:5173/Task_2/
```

## 📦 Deploy to GitHub Pages

1. Update `homepage` in `package.json` with your GitHub username
2. Push to GitHub (repo name: `Task_2`)
3. Run:

```bash
npm run deploy
```

4. Go to **Settings → Pages → Source: gh-pages branch** in your repo

## 🎬 App States

| State | How to see it |
|---|---|
| **Loading** | Refresh the page — 12 shimmer skeleton cards appear for ~0.6s |
| **Data Loaded** | All 150 Pokémon shown in a responsive grid |
| **Search/Filter** | Type in search box or pick a type from the dropdown |
| **Empty** | Search for something that doesn't exist (e.g. "zzz") |
| **Error** | Click the "⚡ Simulate Network Error" button in the stats bar |
| **Retry** | Click "🔄 Retry Request" on the error screen |

## 📁 Project Structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Main component — state, fetching, filtering
├── App.css                  # All component styles
├── index.css                # Global tokens, animations, reset
└── components/
    ├── PokemonCard.jsx      # Individual Pokémon card with stats & artwork
    ├── SkeletonCard.jsx     # Shimmer loading placeholder
    └── ErrorState.jsx       # Friendly error with retry
```

## 📡 API Used

[PokéAPI](https://pokeapi.co/) — Free, no auth required.

- **List endpoint**: `GET https://pokeapi.co/api/v2/pokemon?limit=150`
- **Detail endpoint**: `GET https://pokeapi.co/api/v2/pokemon/{id}` (fetched in parallel for all 150)

**Data displayed per Pokémon:** official artwork sprite, Pokédex number, name, types, HP / Attack / Defense / Speed stats, weight, height, and abilities.
