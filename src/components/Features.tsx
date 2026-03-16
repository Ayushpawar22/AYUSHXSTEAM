import React from 'react';
import { motion } from 'motion/react';
import { Download, Globe, Lock, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Global Accessibility',
      description: 'Access our accounts from anywhere in the world without regional restrictions.',
      icon: Globe,
    },
    {
      title: 'Community Driven',
      description: 'Join thousands of gamers who share and support our offline gaming initiative.',
      icon: Users,
    },
    {
      title: 'Encrypted Data',
      description: 'Your connection and data are protected with industry-standard encryption.',
      icon: Lock,
    },
    {
      title: 'Fast Downloads',
      description: 'Optimized servers to ensure you get your game files as quickly as possible.',
      icon: Download,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AyushXSteam Bazzar?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide the most reliable and secure way to enjoy single-player games offline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
