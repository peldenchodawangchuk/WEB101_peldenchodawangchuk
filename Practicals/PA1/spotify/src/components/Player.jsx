// Player.jsx
// Persistent bottom playback bar with play/pause toggle, seek bar, and volume.
// Uses React useState to manage isPlaying and progress interactivity.

import { useState } from "react";

// Format seconds → M:SS
function fmt(s) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress]   = useState(47);   // out of 210 seconds
  const [volume, setVolume]       = useState(75);
  const [liked, setLiked]         = useState(false);
  const duration = 210;

  return (
    <footer className="bg-[#181818] border-t border-[#282828] px-4 h-[90px] flex items-center justify-between gap-4 shrink-0">

      {/* LEFT: Track info + like */}
      <div className="flex items-center gap-3 w-[220px] shrink-0">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&q=80"
          alt="Now playing"
          className="w-14 h-14 rounded-md object-cover"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-white truncate">Blinding Lights</p>
          <p className="text-xs text-[#a7a7a7] truncate">The Weeknd</p>
        </div>
        {/* Like button */}
        <button
          aria-label={liked ? "Remove from liked" : "Add to liked"}
          onClick={() => setLiked(l => !l)}
          className="ml-1 shrink-0 transition-transform hover:scale-110"
        >
          {liked ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1db954">
              <path d="M12 21C12 21 3 14 3 8a5 5 0 0110 0 5 5 0 0110 0c0 6-9 13-9 13z"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a7a7a7" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          )}
        </button>
      </div>

      {/* CENTER: Controls + seek bar */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-[600px]">
        {/* Buttons row */}
        <div className="flex items-center gap-5">
          {/* Shuffle */}
          <button aria-label="Shuffle" className="text-[#a7a7a7] hover:text-white transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
            </svg>
          </button>
          {/* Previous */}
          <button aria-label="Previous" className="text-[#a7a7a7] hover:text-white transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
          </button>
          {/* Play / Pause */}
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={() => setIsPlaying(p => !p)}
            className="w-9 h-9 rounded-full bg-white grid place-items-center hover:scale-105 transition text-black"
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>
          {/* Next */}
          <button aria-label="Next" className="text-[#a7a7a7] hover:text-white transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
          </button>
          {/* Repeat */}
          <button aria-label="Repeat" className="text-[#a7a7a7] hover:text-white transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
            </svg>
          </button>
        </div>

        {/* Seek bar row */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-[#a7a7a7] w-8 text-right">{fmt(progress)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={progress}
            onChange={e => setProgress(Number(e.target.value))}
            aria-label="Seek"
            className="flex-1 h-1 accent-white cursor-pointer"
          />
          <span className="text-xs text-[#a7a7a7] w-8">{fmt(duration)}</span>
        </div>
      </div>

      {/* RIGHT: Volume */}
      <div className="hidden sm:flex items-center gap-2 w-[150px] justify-end shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#a7a7a7">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={e => setVolume(Number(e.target.value))}
          aria-label="Volume"
          className="w-24 h-1 accent-white cursor-pointer"
        />
      </div>

    </footer>
  );
}

export default Player;
