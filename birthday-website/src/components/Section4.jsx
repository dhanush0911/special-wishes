import React from 'react';
import { motion } from 'framer-motion';
import './Section4.css';

const Section4 = () => {
  return (
    <section className="video-section">
      {/* Simple Background */}
      <div className="simple-background">
        <div className="floating-music-notes">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="music-note-bg"
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: -100, 
                opacity: [0, 0.5, 0],
              }}
              transition={{ 
                duration: 6 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 25}px`
              }}
            >
              {i % 3 === 0 ? '🎵' : i % 3 === 1 ? '🎶' : '🎤'}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="video-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Simple Title */}
        <motion.div
          className="title-container"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="main-title">A Special Performance</h1>
          <h2 className="sub-title">Just For You, My Princess 👑</h2>
        </motion.div>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          You always wanted me to perform for you... here's one song from my heart
        </motion.p>

        {/* Simple Video Player */}
        <motion.div
          className="simple-video-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <video 
            controls 
            className="clean-video"
          >
            <source src="/GuitarVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Simple Message */}
        <motion.div
          className="simple-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>Disclaimer not performed by an professional, hope you love it 💝</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section4;
