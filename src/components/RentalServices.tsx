
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const RentalServices = () => {
  const rentalItems = [
    {
      title: 'Video Wall On Hire',
      description: 'We also best in providing all the types of LED video wall on rental purpose to the customer with less affordable service rate.',
      icon: '📺',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Outdoor LED Screen On Rent',
      description: 'We are best in offering outdoor LED Screen On rental purpose to the customer with less affordable service rate.',
      icon: '🖥️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'LED Screen On Rent (High-Quality Display)',
      description: 'We also best in supplying LED Screen for rental purpose to the customer with less affordable service rate.',
      icon: '💻',
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'LED Wall On Rent – Immersive Visual Experience',
      description: 'We also best in providing LED walls for rental purpose to the customer with less affordable service rate with best in providing quality of service.',
      icon: '🎬',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917947419979', '_blank');
  };

  const handleEnquire = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Event Equipment & LED Rentals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable & High-Quality Visual Display Solutions from SM Creations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rentalItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 2
              }}
              className="group"
              style={{ perspective: '1000px' }}
            >
              <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-electric-purple/20 h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-5xl mb-6 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <motion.div
                    className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} mb-6 transition-all duration-500`}
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={handleEnquire}
                        className="w-full bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white font-semibold py-3 rounded-lg shadow-xl hover:shadow-electric-purple/50 transition-all duration-300"
                      >
                        Enquire Now ✨
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={handleWhatsApp}
                        variant="outline"
                        className="w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Need Custom Equipment Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              We provide customized rental packages for your specific event requirements. 
              Contact us for personalized quotes and equipment combinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleEnquire}
                  size="lg"
                  className="bg-gradient-to-r from-electric-orange to-electric-pink hover:from-electric-pink hover:to-electric-orange text-white px-8 py-3 text-lg font-semibold rounded-full shadow-xl hover:shadow-electric-orange/50 transition-all duration-300"
                >
                  Get Custom Quote 💫
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="border-2 border-electric-green text-electric-green hover:bg-electric-green hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Chat
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalServices;
