import React from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const heartTypes = ['💖', '💕', '💗', '💓', '💘', '💝', '❤️', '🌸', '🌺', '🎀'];
  
  const getRandomHeart = () => {
    return heartTypes[Math.floor(Math.random() * heartTypes.length)];
  };

  const getRandomDuration = () => {
    return 8 + Math.random() * 7; // 8-15 seconds
  };

  const getRandomDelay = () => {
    return Math.random() * 5; // 0-5 seconds
  };

  const getRandomSize = () => {
    return 20 + Math.random() * 25; // 20-45px
  };

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    heart: getRandomHeart(),
    duration: getRandomDuration(),
    delay: getRandomDelay(),
    size: getRandomSize(),
    left: Math.random() * 100,
    sway: Math.random() * 80 - 40 // -40 to 40px sway
  }));

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          initial={{ 
            y: '120vh', 
            opacity: 0,
            scale: 0,
            rotate: -180
          }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
            x: [0, heart.sway, -heart.sway/2, 0],
            scale: [0, 1, 1, 0.8],
            rotate: [-180, 0, 5, -5, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ 
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`
          }}
        >
          {heart.heart}
        </motion.div>
      ))}
      
      {/* Special floating phrases */}
      <motion.div
        className="floating-phrase"
        initial={{ y: '110vh', opacity: 0 }}
        animate={{
          y: '-10vh',
          opacity: [0, 0.8, 0.8, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 2,
          ease: "easeOut"
        }}
        style={{ left: '30%' }}
      >
        💝 💝
      </motion.div>
      
      <motion.div
        className="floating-phrase"
        initial={{ y: '115vh', opacity: 0 }}
        animate={{
          y: '-15vh',
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          delay: 6,
          ease: "easeOut"
        }}
        style={{ left: '70%' }}
      >
        🎂 Happy Birthday 🎂
      </motion.div>
    </div>
  );
};

export default FloatingHearts;