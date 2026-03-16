import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Sword, Shield, Compass, Target, Ghost, Car, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { name: 'Action', icon: Sword, count: '250+ Games' },
    { name: 'RPG', icon: Shield, count: '180+ Games' },
    { name: 'Adventure', icon: Compass, count: '120+ Games' },
    { name: 'Shooter', icon: Target, count: '150+ Games' },
    { name: 'Horror', icon: Ghost, count: '80+ Games' },
    { name: 'Racing', icon: Car, count: '60+ Games' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-500">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Categories Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Explore Categories</h2>
                <p className="text-gray-500">Find your next favorite game by genre.</p>
              </div>
              <Link to="/library" className="text-emerald-500 font-bold hover:underline flex items-center gap-1">
                View All Categories
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-white/5 p-6 rounded-2xl text-center cursor-pointer hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{cat.count}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Features />
        
        {/* Contact Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Have questions about our accounts or need technical support? 
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Telegram Support</h4>
                      <p className="text-gray-500 text-sm">@Steam_Galaxy</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <form 
                  action="https://formspree.io/f/mjgaawkb"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      placeholder="Your message..."
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-emerald-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
              READY TO START YOUR <br /> OFFLINE ADVENTURE?
            </h2>
            <p className="text-emerald-950 font-medium text-lg mb-10">
              Join our community today and get instant access to hundreds of premium games.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://t.me/Steam_Galaxy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-zinc-900 transition-all transform hover:scale-105 text-center"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
