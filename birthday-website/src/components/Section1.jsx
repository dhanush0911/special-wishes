import React from 'react';
import { motion } from 'framer-motion';
import './Section1.css';

const Section1 = () => {
  return (
    <section className="opening-section">
      {/* Animated background elements */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{ 
              y: -1000, 
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            {i % 3 === 0 ? '💖' : i % 3 === 1 ? '💕' : '🌸'}
          </motion.div>
        ))}
      </div>

      {/* Sparkle particles */}
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{ 
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="main-content"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: 'spring', bounce: 0.6 }}
      >
        <motion.h1
          className="birthday-title"
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.3 }}
        >
          Happy Birthday, Princess! 👑
        </motion.h1>
        
        <motion.p
          className="subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring' }}
        >
          To the most beautiful soul I've ever known
        </motion.p>

        <motion.div
          className="romantic-message"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p>Every day with you feels like a celebration, the energy you carry and the happinees you bring light up my life.</p>
          <motion.div
            className="special-heart"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💝
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Romantic quote - Centered */}
      <motion.div
        className="romantic-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        "You are the sunshine that brightens my world 🌟"
      </motion.div>
    </section>
  );
};

export default Section1;