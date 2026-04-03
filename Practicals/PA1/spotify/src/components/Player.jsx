function Player() {
  return (
    <footer className="bg-[#181818] border-t border-[#2a2a2a] text-white px-4 md:px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left min-w-[160px]">
          <p className="font-semibold">Blinding Lights</p>
          <p className="text-sm text-gray-400">The Weeknd</p>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-xl w-full">
          <div className="flex items-center gap-5 text-xl mb-2">
            <button className="hover:text-green-500 transition">⏮</button>
            <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm hover:scale-105 transition">
              ▶
            </button>
            <button className="hover:text-green-500 transition">⏭</button>
          </div>

          <div className="flex items-center gap-3 w-full">
            <span className="text-xs text-gray-400">1:12</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="hidden md:block min-w-[160px] text-right text-sm text-gray-400">
          Playing now
        </div>
      </div>
    </footer>
  );
}

export default Player;