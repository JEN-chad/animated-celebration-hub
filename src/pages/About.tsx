
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ParticleBackground from '@/components/ParticleBackground';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
      bio: '10+ years of experience creating magical events that exceed expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=face',
      bio: 'Detail-oriented professional ensuring every aspect of your event is perfect.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Specialist',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative visionary bringing your dream concepts to stunning reality.'
    }
  ];

  const values = [
    {
      title: 'Creativity',
      description: 'Every event is a unique canvas for artistic expression',
      icon: '🎨'
    },
    {
      title: 'Excellence',
      description: 'We never compromise on quality and attention to detail',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge event technologies',
      icon: '💡'
    },
    {
      title: 'Partnership',
      description: 'Building lasting relationships through trust and collaboration',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-16">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
          >
            About SM Creations
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            We are passionate storytellers who transform your vision into unforgettable experiences. 
            With creativity at our core and excellence in our execution, we bring magic to every celebration.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2015, SM Creations began with a simple belief: every celebration deserves to be extraordinary. 
                What started as a small passion project has grown into a full-service event management company that has 
                created over 500 magical experiences.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From intimate gatherings to grand galas, we specialize in understanding your unique vision and bringing 
                it to life with meticulous planning, creative design, and flawless execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-electric-purple text-white">500+ Events</Badge>
                <Badge className="bg-electric-blue text-white">9 Years Experience</Badge>
                <Badge className="bg-electric-pink text-white">100% Satisfaction</Badge>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="SM Creations workspace"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds behind every successful celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-electric-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-4xl mb-4"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
