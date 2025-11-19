import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';

const Section2 = ({ isFlipped, setIsFlipped }) => {
  return (
    <section className="flip-card-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Heart's Message </h2>
        {/* <p>Tap the card to discover what's in my heart...</p> */}
      </motion.div>

      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <motion.div
              className="front-content"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.h2
                animate={{ 
                  rotate: [0, -5, 5, -3, 3, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                💝
              </motion.h2>
              <p>Touch my heart to read my soul...</p>
              <motion.div
                className="sparkle"
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          </div>
          
          <div className="flip-card-back">
            <motion.div
              className="back-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="love-icon">💖</div>
              <h3>To My Beautiful Babygirl,</h3>
              <div className="message-text">
                <p>
                  From the moment you came into my life, everything changed in the most 
                  beautiful way. I am so incredibly grateful that our paths crossed.
                </p>
                <p>
                  You've made me a better person in ways I never thought possible. 
                  Because of you, maza aatha hai aapke saath and I see the world through 
                  more beautiful eyes.
                </p>
                <p>
                  Thank you for being my greatest adventure. Every day with you feels like a blessing.
                </p>
                <p>
                  Happy Birthday to the most incredible woman I know.
                  You are my small cute little baby 😘
                </p>
              </div>
              <motion.div
                className="signature"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                Yours,
                <br />
                Cutu 🤭
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating love notes - Hidden on mobile */}
      <motion.div
        className="floating-note note-1"
        initial={{ y: 100, opacity: 0, rotate: -10 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        💕 You're Amazing
      </motion.div>
      
      <motion.div
        className="floating-note note-2"
        initial={{ y: 100, opacity: 0, rotate: 5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        🌟 My Inspiration
      </motion.div>
    </section>
  );
};

export default Section2;