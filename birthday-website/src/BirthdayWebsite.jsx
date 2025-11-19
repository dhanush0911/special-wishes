import React, { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import './BirthdayWebsite.css';


const BirthdayWebsite = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);


  // Auto-start confetti for initial celebration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  return (
    <div className="birthday-container">
      {/* Background Elements */}
      <div className="romantic-background">
        <div className="twinkling-stars"></div>
        <div className="floating-sparkles"></div>
        <div className="love-glow"></div>
      </div>


      {/* Love Message Popup */}
      <AnimatePresence>
        {showLoveMessage && (
          <motion.div
            className="love-message-popup"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setShowLoveMessage(false)}
          >
            💖 You mean everything to me! 💖
          </motion.div>
        )}
      </AnimatePresence>


      {/* Confetti Celebration */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={300}
              recycle={false}
              colors={['#ff6b6b', '#ff8e8e', '#ffb3c6', '#ffd6e0', '#ff9a8b']}
              gravity={0.15}
            />
          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Sections with Enhanced Animations */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section1 />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section2 isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section3 />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section4 />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section5 />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section6 />
      </motion.section>


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section7 
          showGift={showGift} 
          setShowGift={setShowGift}
          setShowConfetti={setShowConfetti}
        />
      </motion.section>


      {/* Multiple Floating Hearts Layers */}
      <FloatingHearts />
      <FloatingHearts delay={2} />
      <FloatingHearts delay={4} />


      {/* Romantic Footer */}
      <motion.footer 
        className="romantic-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {/* <p>Made with 💖 for the most amazing person in my life</p> */}
        {/* <p>Every moment with you is a celebration of love</p> */}
      </motion.footer>
    </div>
  );
};


export default BirthdayWebsite;
