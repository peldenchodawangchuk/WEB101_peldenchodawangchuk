import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";
import Player from "./components/Player";
import playlists from "./data/playlists";

function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#2a2a2a] via-[#181818] to-[#121212]">
          <div className="p-4 md:p-6 lg:p-8">
            <Navbar />

            <main className="mt-6">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  Good Evening
                </h1>
                <p className="text-gray-400 text-sm md:text-base">
                  Enjoy your favorite playlists and music.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold mb-5">
                  Featured Playlists
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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

      <Player />
    </div>
  );
}

export default App;