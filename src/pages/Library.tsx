import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Download, Zap, X, ExternalLink } from 'lucide-react';

export default function Library() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 1,
      title: 'Resident Evil Requiem',
      category: 'Horror / Action',
      image: 'https://storage.googleapis.com/demo-bucket/user-uploads/ooawnmewnkbibc44hel4oz/2026-03-16/11-36-08/image.png', // User-provided game poster
      status: 'Free',
      rating: '4.9',
    },
    // More games can be added here
  ];

  const handleClaim = (gameTitle: string) => {
    setSelectedGame(gameTitle);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">GAME LIBRARY</h1>
              <p className="text-gray-500">Browse and download from our collection of 900+ games.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search games..." 
                  className="bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 w-full sm:w-64"
                />
              </div>
              <button className="flex items-center gap-2 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold hover:bg-zinc-800 transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Game Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                      {game.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{game.category}</span>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-bold text-white">{game.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors">
                    {game.title}
                  </h3>
                  
                  <button 
                    onClick={() => handleClaim(game.title)}
                    className="w-full bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/10 hover:border-emerald-500 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Claim RE9
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State / Load More */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-sm mb-6 italic">More games are being added to the database...</p>
            <button className="bg-zinc-900 border border-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-zinc-800 transition-all">
              Load More Games
            </button>
          </div>
        </div>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-md w-full shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Claim Successful!</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  You have claimed game for id pass. <br />
                  <span className="text-white font-medium block mt-2">Go on the link for id pass:</span>
                  <a 
                    href="https://linkpays.in/og6mqxm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-500 font-bold hover:underline break-all flex items-center justify-center gap-2 mt-2"
                  >
                    https://linkpays.in/og6mqxm
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
                
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-emerald-500 text-black py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
