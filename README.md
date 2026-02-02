# QuickNote — Frontend

A modern, lightweight note-taking frontend built with **React + TypeScript**, designed to work with the QuickNote backend API.

---

## 🚀 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **TanStack Router**
- **TanStack Query (React Query)**
- **Axios**
- **Tailwind CSS**

---

## 🔐 Authentication Flow

- Auth is **cookie-based (HttpOnly)**.
- Protected routes use `beforeLoad` guards in TanStack Router.
- Server state (user, notes) is handled via **React Query**.
- Credentials are sent with every request.

---

## 🔁 Data Fetching Strategy

- All API calls go through a centralized Axios instance.
- Queries & mutations live in `features/*/*.query.ts`.
- Cache invalidation is explicit and predictable.

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:5000

```

Development

```bash
pnpm install
pnpm dev
```

Runs the app on:
http://localhost:5173

Production Build

```bash
pnpm build
pnpm preview
```

## 📌 Known Limitations / Future Work

Pagination UI can be improved (infinite scroll).

Shared DTO package with backend could further reduce duplication.

Tests are not yet added.

## 🔗 Related Repository

Backend API:
https://github.com/mssoheil/quickNote-backend
