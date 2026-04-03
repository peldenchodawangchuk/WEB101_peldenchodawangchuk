function Sidebar() {
  return (
    <aside className="flex flex-col w-64 bg-black border-r border-[#1f1f1f] px-6 py-7">
      <div>
        <h1 className="text-3xl font-bold text-green-500 mb-10">Spotify</h1>

        <nav className="space-y-5 mb-10">
          <a
            href="#"
            className="block text-white font-semibold hover:text-green-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-green-500 transition"
          >
            Search
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-green-500 transition"
          >
            Your Library
          </a>
        </nav>

        <div className="border-t border-[#262626] pt-6 space-y-4 text-sm text-gray-400">
          <p className="hover:text-white cursor-pointer transition">
            Create Playlist
          </p>
          <p className="hover:text-white cursor-pointer transition">
            Liked Songs
          </p>
          <p className="hover:text-white cursor-pointer transition">
            Daily Mix
          </p>
          <p className="hover:text-white cursor-pointer transition">
            Discover Weekly
          </p>
          <p className="hover:text-white cursor-pointer transition">
            Recently Played
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6 text-xs text-gray-500">
        Spotify Inspired UI
      </div>
    </aside>
  );
}

export default Sidebar;