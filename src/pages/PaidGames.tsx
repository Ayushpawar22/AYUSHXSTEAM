import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Send, Phone, User, Tag, MessageSquare } from 'lucide-react';

export default function PaidGames() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData);
    alert('Request sent successfully! We will contact you soon.');
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-black tracking-tight mb-4">PAID GAMES REQUEST</h1>
            <p className="text-gray-500">Tell us which game you want and we'll get it for you at the best price.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 bg-zinc-800 border border-r-0 border-white/10 rounded-l-xl text-gray-400 font-bold">
                      +91
                    </span>
                    <input
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full bg-black border border-white/10 rounded-r-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Subject
                </label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Request for Elden Ring"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe which game you want and any other details..."
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Send Request
              </button>
            </form>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
              <h3 className="font-bold text-emerald-500 mb-2">Fast Delivery</h3>
              <p className="text-xs text-gray-500">Get your game details within 24 hours.</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
              <h3 className="font-bold text-emerald-500 mb-2">Best Price</h3>
              <p className="text-xs text-gray-500">We offer the most competitive rates in the market.</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
              <h3 className="font-bold text-emerald-500 mb-2">24/7 Support</h3>
              <p className="text-xs text-gray-500">Our team is always here to help you.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
