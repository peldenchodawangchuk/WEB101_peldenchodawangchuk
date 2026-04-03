function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="w-full sm:max-w-xl">
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full bg-white text-black px-5 py-3 rounded-full outline-none text-sm md:text-base shadow-md"
        />
      </div>

      <div className="flex justify-end">
        <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-lg">
          P
        </div>
      </div>
    </header>
  );
}

export default Navbar;