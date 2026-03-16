import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, Shield, Zap, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/20 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            New Games Added Daily
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            PLAY ANY GAME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              OFFLINE FOR FREE
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Get exclusive access to pre-loaded Steam accounts for the hottest AAA titles. 
            Secure, simple, and completely free of charge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/library" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95">
              Browse Library
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Play className="w-5 h-5 fill-current" />
              How it Works
            </button>
          </div>
        </motion.div>

        {/* Stats/Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-white font-bold mb-1">100% Safe & Secure</h3>
            <p className="text-gray-500 text-sm">Verified accounts with zero risk</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-white font-bold mb-1">Instant Access</h3>
            <p className="text-gray-500 text-sm">No waiting lists, play immediately</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-white font-bold mb-1">900+ Games</h3>
            <p className="text-gray-500 text-sm">Massive library of AAA titles</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


