// Import all required components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";
import Player from "./components/Player";

// Import playlist data
import playlists from "./data/playlists";

// Main App component
function App() {
  return (
    // Main container (full screen)
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">

      {/* Top section (Sidebar + Main Content) */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#2a2a2a] via-[#181818] to-[#121212]">
          <div className="p-4 md:p-6 lg:p-8">

            {/* Top Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="mt-6">

              {/* Greeting Section */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  Good Evening
                </h1>
                <p className="text-gray-400">
                  Enjoy your favorite playlists and music.
                </p>
              </div>

              {/* Playlist Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-5">
                  Featured Playlists
                </h2>

                {/* Grid of Music Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                  {/* Loop through playlist data */}
                  {playlists.map((playlist) => (
                    <MusicCard
                      key={playlist.id} // unique key for React
                      title={playlist.title}
                      description={playlist.description}
                      image={playlist.image}
                    />
                  ))}

                </div>
              </section>

            </main>
          </div>
        </div>
      </div>

      {/* Bottom Music Player */}
      <Player />
    </div>
  );
}

export default App;