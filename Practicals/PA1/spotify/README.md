# Spotify Clone — WEB101 Practical Assignment 1

A Spotify-themed web UI built with **React 19 + Vite + Tailwind CSS v4**.

---

## Functionality

- **Dynamic greeting** — Home page greeting changes based on time of day (Good morning / afternoon / evening).
- **Featured Playlists grid** — Responsive grid (1→2→3 columns) populated from `data/playlists.js`.
- **MusicCard** — Reusable card with hover play button that animates in (opacity + translateY).
- **Sidebar** — Navigation links (Home, Search, Library) with active state highlighting; playlist shortcuts; hidden on mobile.
- **Navbar** — Back/forward buttons, search input, Explore Premium CTA, user avatar.
- **Player** — Fully interactive: play/pause toggle, seek slider, volume slider, like/unlike button with green highlight.
- **Responsive layout** — Sidebar hidden on mobile, grid adapts to screen size, player simplifies on small screens.

---

## Component Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Left nav: logo, links, playlist list (hidden on mobile)
│   ├── Navbar.jsx        # Top bar: back/forward, search, premium CTA, avatar
│   ├── MusicCard.jsx     # Reusable playlist card with hover play button
│   └── Player.jsx        # Bottom persistent playback bar
├── data/
│   └── playlists.js      # Data source for MusicCard components
├── App.jsx               # Root layout — composes all components
├── main.jsx              # Entry point
└── index.css             # Tailwind v4 import
```

Each component follows the **single responsibility principle**:
- `Sidebar` → navigation only
- `Navbar` → top bar controls only
- `MusicCard` → single playlist display
- `Player` → playback controls only

---

## Data Flow

- Playlist data lives in `data/playlists.js` and is imported by `App.jsx`.
- `App.jsx` maps over playlists and passes `title`, `description`, `image` as props to each `MusicCard`.
- Player state (`isPlaying`, `progress`, `volume`, `liked`) is managed locally in `Player.jsx` with `useState`.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool / dev server |
| Tailwind CSS | v4 | Utility-first styling |

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| Mobile (<768px) | Sidebar hidden, single-column grid, simplified player |
| Tablet (768–1280px) | Sidebar visible, 2-column grid |
| Desktop (>1280px) | Full sidebar, 3-column grid, full player |

---

## Repository

`https://github.com/peldenchodawangchuk/WEB101_peldenchodawangchuk/tree/main/Practicals/PA1/spotify`.
