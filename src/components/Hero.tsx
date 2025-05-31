import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  ctaText = 'Réservez Maintenant',
  ctaLink = '#',
  overlay = false,
  height = 'h-95 md:h-143'
}) => {
  return (
    <div
      className={`relative ${height} px-7 flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      )}
      
      <div className="w-full mx-auto mt-25 space-y-5 py-15 md:py-37 border-3 border-gray-900 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-accent text-xl md:text-4xl font-bold leading-tight"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-5xl max-w-3xl mx-auto mb-8 text-gray-200"
          >
            {subtitle}
          </motion.p>
        )}
        
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href={ctaLink}
              className="inline-block bg-accent hover:bg-gold-700 text-white font-thin px-8 py-3 text-xs  transition duration-300"
            >
              {ctaText}
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;