
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      title: 'Wedding Planning',
      description: 'Magical moments for your special day',
      icon: '💍',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings that inspire',
      icon: '🏢',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Birthday Parties',
      description: 'Celebrations as unique as you are',
      icon: '🎂',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Custom Events',
      description: 'Bringing your vision to life',
      icon: '✨',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const recentEvents = [
    {
      title: 'Sarah & Michael\'s Wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      type: 'Wedding',
      date: 'December 2024'
    },
    {
      title: 'TechCorp Annual Gala',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      type: 'Corporate',
      date: 'November 2024'
    },
    {
      title: 'Emma\'s Sweet 16',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      type: 'Birthday',
      date: 'October 2024'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <ThreeBackground className="absolute inset-0 opacity-30" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Create Unforgettable
            <br />
            <span className="neon-text text-electric-blue">Experiences</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            From intimate gatherings to grand celebrations, we bring your vision to life with stunning creativity and flawless execution.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-electric-purple/50 transition-all duration-300 animate-glow"
              >
                Book Now ✨
              </Button>
            </Link>
            
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Explore Services 🎉
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized in creating magical moments that exceed expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-4xl mb-4 inline-block"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                    <motion.div
                      className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} mt-4 transition-all duration-300`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Recent Celebrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Take a glimpse at our latest masterpieces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-electric-blue font-medium">{event.type}</span>
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button
                variant="outline"
                className="border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white px-8 py-3 rounded-full"
              >
                View Full Gallery 📸
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's turn your dream event into an unforgettable reality
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-pink to-electric-purple text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-electric-pink/50 transition-all duration-300 animate-pulse-slow"
            >
              Start Planning Today 🚀
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
