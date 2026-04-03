function MusicCard({ title, description, image }) {
  return (
    <div className="bg-[#181818] hover:bg-[#242424] transition-all duration-300 rounded-2xl p-4 group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1">
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
        />

        <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-green-500 text-black text-lg font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          ▶
        </button>
      </div>

      <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-6">{description}</p>
    </div>
  );
}

export default MusicCard;