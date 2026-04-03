// Reusable component to display playlist info
function MusicCard({ title, description, image }) {
  return (
    // Card container
    <div className="bg-[#181818] hover:bg-[#242424] p-4 rounded-xl transition group cursor-pointer">

      {/* Image section */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Play button (appears on hover) */}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition">
          ▶
        </button>
      </div>

      {/* Playlist Title */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm">{description}</p>

    </div>
  );
}

export default MusicCard;