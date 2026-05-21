// MusicCard.jsx
// Reusable card component for displaying a playlist or album.
// Props: title (string), description (string), image (string URL)
// Shows a play button on hover — demonstrates interactive React component design.

import { useState } from "react";

function MusicCard({ title, description, image }) {
  // Track hover state to animate the play button
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-colors cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Album artwork + hover play button */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
          loading="lazy"
        />

        {/* Play button — slides up and fades in on hover */}
        <button
          aria-label={`Play ${title}`}
          className={`absolute bottom-3 right-3 w-12 h-12 bg-green-500 hover:bg-green-400 hover:scale-105
            rounded-full grid place-items-center shadow-xl transition-all duration-200
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </button>
      </div>

      {/* Text info */}
      <h3 className="font-bold text-white text-base mb-1 truncate">{title}</h3>
      <p className="text-[#a7a7a7] text-sm line-clamp-2 leading-snug">{description}</p>

    </div>
  );
}

export default MusicCard;
