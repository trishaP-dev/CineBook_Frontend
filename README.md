# 🎬 CineBook — Frontend

A modern movie ticket booking web application built with React. Browse now-playing movies, select seats, and book tickets seamlessly.

---
Admin Dashboard [LINK](https://cine-book-frontend-sigma.vercel.app/admin)
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

- User authentication via Clerk
- Movie detail pages with trailers
- Seat selection and ticket booking
- Admin panel to manage shows and view bookings
- Fully responsive UI

---
<img width="1897" height="917" alt="Screenshot 2026-04-10 170834" src="https://github.com/user-attachments/assets/42ba50a9-1a69-44f0-b2f3-2bb476a99507" />
<img width="1896" height="910" alt="Screenshot 2026-04-10 170918" src="https://github.com/user-attachments/assets/a7aea424-7ec5-4216-9d92-2fd9440f882f" />
<img width="1895" height="912" alt="Screenshot 2026-04-10 170951" src="https://github.com/user-attachments/assets/74d30a65-4282-4fa8-99b6-0ce0b78e5876" />
<img width="1898" height="904" alt="Screenshot 2026-04-10 171025" src="https://github.com/user-attachments/assets/200cd48a-6a1b-4880-96ee-43f0f1668389" />
<img width="1897" height="737" alt="Screenshot 2026-04-10 171047" src="https://github.com/user-attachments/assets/915574d5-f707-4868-a4cf-3cb3c3d2613d" />
<img width="1897" height="909" alt="Screenshot 2026-04-10 171113" src="https://github.com/user-attachments/assets/ced7636e-0d7c-4905-b64b-d942526ada3c" />
<img width="1900" height="911" alt="Screenshot 2026-04-10 171129" src="https://github.com/user-attachments/assets/d4469ed0-b982-4a24-9ebe-5b2716d27f94" />

## Admin Panel
<img width="1896" height="804" alt="Screenshot 2026-04-10 171516" src="https://github.com/user-attachments/assets/c9b2a276-03c0-4b70-95d7-4b71959b74ce" />
<img width="1892" height="908" alt="Screenshot 2026-04-10 171550" src="https://github.com/user-attachments/assets/943346c1-8898-4296-88b7-0b8be763381b" />
<img width="1905" height="909" alt="Screenshot 2026-04-10 171608" src="https://github.com/user-attachments/assets/c86fe752-477a-4837-9481-dcbdc65cce3e" />
<img width="1905" height="912" alt="Screenshot 2026-04-10 171631" src="https://github.com/user-attachments/assets/fbb2178e-65a2-4c14-8071-839e55847080" />

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
VITE_CURRENCY=$
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


