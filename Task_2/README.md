# WorldExplorer 🌍

> **Task 2 — NFS Full Stack Development Internship**
> React app that fetches live data from the REST Countries API with search, filter, loading skeletons, and error handling.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-6366f1?style=for-the-badge)](https://YOUR_GITHUB_USERNAME.github.io/Task_2)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Live API Data** | Fetches 250+ countries from REST Countries API v3 |
| ⏳ **Loading State** | Animated shimmer skeleton cards (never a blank screen) |
| ❌ **Error State** | Friendly error message + retry button + simulate error for demo |
| 🔍 **Search** | Real-time search by name, capital, or region |
| 🗺️ **Region Filter** | Dropdown to filter by Africa, Americas, Asia, Europe, Oceania |
| 📊 **Country Cards** | Flag, name, population, capital, languages, currency, tags |
| 📱 **Responsive** | Works on mobile, tablet, and desktop |

## 🚀 Tech Stack

- **React 19** + **Vite 8** (fast HMR)
- **Vanilla CSS** — glassmorphism dark mode, CSS custom properties
- **REST Countries API** — free, no API key required
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
| **Loading** | Refresh the page — 12 shimmer skeleton cards appear for ~0.8s |
| **Data Loaded** | All 250+ countries shown in a responsive grid |
| **Search/Filter** | Type in search box or pick a region from the dropdown |
| **Empty** | Search for something that doesn't exist (e.g. "zzz") |
| **Error** | Click the "⚡ Simulate Network Error" button in the stats bar |
| **Retry** | Click "🔄 Retry Request" on the error screen |

## 📁 Project Structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Main component with all state logic
├── App.css                  # All component styles
├── index.css                # Global tokens, animations, reset
└── components/
    ├── CountryCard.jsx      # Individual country card
    ├── SkeletonCard.jsx     # Shimmer loading placeholder
    └── ErrorState.jsx       # Friendly error with retry
```

## 📡 API Used

[REST Countries API](https://restcountries.com/) — Free, no auth required.

Endpoint: `GET https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,currencies,independent`
