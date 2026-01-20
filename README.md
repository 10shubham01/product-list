# Paginated Product List with React Query
---

## Features

* Paginated product listing with **Prev / Next** navigation
* **React Query caching** with `staleTime`, `cacheTime`, and `keepPreviousData`
* **Background prefetching** for smooth page transitions
* Loading skeletons, error handling, and empty states
* Memoized list items to avoid unnecessary re-renders
* Responsive grid layout

---

## Tech

* **Server State**: React Query (`react-query`)
* **Pagination**: Page-based with composite query keys
* **Performance**:
  * Cached pages preserved while navigating
  * No duplicate API calls
  * Disabled refetch-on-focus to avoid flicker
* **API**: DummyJSON (`https://dummyjson.com/products`)

---

## Tech Stack

* React 19 + TypeScript
* Vite
* React Query
* Tailwind CSS
* ESLint

---

## Installation & Setup

### Prerequisites
* Node.js ≥ 18
* pnpm (recommended) or npm

### Steps
```bash
# Clone the repository
git clone <repo-url>
cd aerem-assignment

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## Project Structure

```
src/
├── api/            # API functions and types
├── hooks/          # React Query hooks
├── components/     # UI components (ProductCard, Pagination, etc.)
├── App.tsx         # Main application logic
└── main.tsx        # App entry point
```
---
