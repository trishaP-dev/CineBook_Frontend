# 🎬 CineBook — Frontend

A modern movie ticket booking web application built with React. Browse now-playing movies, select seats, and book tickets seamlessly.

---

## Tech Stack

- **React 19** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling
- **Clerk** — authentication (sign in, sign up, user management)
- **React Router DOM v7** — client-side routing
- **React Player** — movie trailer playback
- **React Hot Toast** — notifications
- **Lucide React** — icons

---

## Features

- Browse now-playing movies fetched from TMDB
- User authentication via Clerk
- Movie detail pages with trailers
- Seat selection and ticket booking
- Admin panel to manage shows and view bookings
- Fully responsive UI

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/trishaP-dev/CineBook_Frontend.git
cd CineBook_Frontend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=your_backend_url
VITE_CURRENCY=₹
```

### Run the dev server

```bash
npm run dev
```

App will be available at `http://localhost:5173`

---

## Project Structure

```
src/
├── assets/          # Images, dummy data
├── components/      # Reusable UI components
│   └── admin/       # Admin-specific components
├── lib/             # Utility functions (dateFormat, KConverter)
├── pages/           # Page components
│   └── admin/       # Admin pages (ListShows, ListBookings, AddShows)
├── App.jsx
└── main.jsx
```


