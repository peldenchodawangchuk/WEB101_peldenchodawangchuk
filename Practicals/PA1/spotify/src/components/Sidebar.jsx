function Sidebar() {
  return (
    // Sidebar container
    <aside className="flex flex-col w-64 bg-black border-r border-[#1f1f1f] px-6 py-7">

      {/* Logo Section */}
      <h1 className="text-3xl font-bold text-green-500 mb-10">
        Spotify
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-5 mb-10">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-gray-300 hover:text-green-500">Search</a>
        <a href="#" className="text-gray-300 hover:text-green-500">Library</a>
      </nav>

      {/* Playlist Section */}
      <div className="border-t border-[#262626] pt-6 space-y-4 text-sm text-gray-400">
        <p>Create Playlist</p>
        <p>Liked Songs</p>
        <p>Discover Weekly</p>
      </div>

      {/* Footer Text */}
      <div className="mt-auto text-xs text-gray-500">
        Spotify UI Clone
      </div>

    </aside>
  );
}

export default Sidebar;