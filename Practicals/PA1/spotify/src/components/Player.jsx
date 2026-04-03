function Player() {
  return (
    // Bottom music player
    <footer className="bg-[#181818] border-t border-gray-700 p-4 flex justify-between items-center">

      {/* Song Info */}
      <div>
        <p className="font-semibold">Blinding Lights</p>
        <p className="text-sm text-gray-400">The Weeknd</p>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      {/* Progress Bar */}
      <div className="w-1/3 h-1 bg-gray-600 rounded">
        <div className="w-1/3 h-full bg-green-500"></div>
      </div>

    </footer>
  );
}

export default Player;