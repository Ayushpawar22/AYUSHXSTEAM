import React from 'react';
import { Gamepad2, Github, Twitter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AyushXSteam <span className="text-emerald-500">Bazzar</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your premium destination for secure, offline Steam accounts. Play top-tier games without breaking the bank.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/library" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Free Accounts</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Weekly Free Games</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">How it Works</Link></li>
              <li><Link to="/library" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Browse Library</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4">
              <li><a href="https://t.me/Steam_Galaxy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Telegram Channel</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Rules & FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-500 text-sm transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Get notified about new game releases and updates.</p>
            <form 
              action="https://formspree.io/f/mjgaawkb"
              method="POST"
              className="flex gap-2"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                required
                className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-full"
              />
              <button 
                type="submit"
                className="bg-emerald-500 text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 AyushXSteam Bazzar. All rights reserved. Not affiliated with Valve Corp.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
