// Navbar.jsx
// Top navigation bar: back/forward arrows, search input, upgrade CTA, user avatar.

function Navbar() {
  return (
    <header className="flex items-center justify-between gap-4 mb-8">

      {/* Back / Forward arrow buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          aria-label="Go back"
          className="w-8 h-8 rounded-full bg-black/40 grid place-items-center text-white hover:bg-black/60 transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
          </svg>
        </button>
        <button
          aria-label="Go forward"
          className="w-8 h-8 rounded-full bg-black/40 grid place-items-center text-white hover:bg-black/60 transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </button>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-3 bg-white text-black px-4 py-2.5 rounded-full flex-1 max-w-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>
        <input
          type="text"
          placeholder="What do you want to play?"
          className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 font-medium"
        />
      </div>

      {/* Right side: upgrade + avatar */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="hidden sm:block text-sm font-bold bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition">
          Explore Premium
        </button>
        <button
          aria-label="User profile"
          className="w-9 h-9 rounded-full bg-green-500 grid place-items-center text-black font-bold text-sm hover:scale-105 transition"
        >
          U
        </button>
      </div>

    </header>
  );
}

export default Navbar;
