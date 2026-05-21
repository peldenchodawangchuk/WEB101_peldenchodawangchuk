// App.jsx
// Root component — composes the full layout: Sidebar | Main content | Player.
// Manages active greeting based on time of day.

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";
import Player from "./components/Player";
import playlists from "./data/playlists";

// Returns a time-based greeting string
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function App() {
  return (
    // Full viewport shell — flex column so Player sticks to bottom
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">

      {/* Top section: Sidebar + scrollable main content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left sidebar navigation */}
        <Sidebar />

        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[#181818] to-[#121212]">
          <div className="p-4 md:p-6 lg:p-8">

            {/* Top navbar */}
            <Navbar />

            <main>
              {/* Dynamic greeting */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {getGreeting()}
                </h1>
                <p className="text-[#a7a7a7] text-sm">
                  Enjoy your favorite playlists and music.
                </p>
              </div>

              {/* Featured Playlists section */}
              <section>
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="text-xl font-bold">Featured Playlists</h2>
                  <button className="text-xs font-bold text-[#a7a7a7] hover:text-white transition uppercase tracking-wider">
                    Show all
                  </button>
                </div>

                {/* Responsive grid of MusicCards — 1 col mobile, 2 tablet, 3 desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {playlists.map((playlist) => (
                    <MusicCard
                      key={playlist.id}
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

      {/* Persistent bottom player */}
      <Player />
    </div>
  );
}

export default App;
