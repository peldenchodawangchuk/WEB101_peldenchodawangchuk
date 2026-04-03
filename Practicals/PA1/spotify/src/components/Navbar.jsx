function Navbar() {
  return (
    // Top navigation bar
    <header className="flex justify-between items-center">

      {/* Search Input */}
      <input
        type="text"
        placeholder="What do you want to play?"
        className="bg-white text-black px-5 py-3 rounded-full w-80 outline-none"
      />

      {/* Profile Icon */}
      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold">
        P
      </div>

    </header>
  );
}

export default Navbar;