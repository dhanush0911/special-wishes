import React from 'react';
import { motion } from 'framer-motion';
import './Section3.css';

const Section3 = () => {
  return (
    <section className="photo-message-section">
      <motion.div
        className="photo-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="photo-frame">
          <div className="image-container">
            <motion.img
              src="../src/assets/Image1.jpg" // Replace with your photo path
              alt="Our Special Memory"
              className="memory-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="photo-overlay">
            <motion.div
              className="heart-float"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              💖
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="message-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Our First Date 🌟</h2>
        
        <motion.div
          className="message-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            Every time I look at this photo, my heart fills with so much joy and gratitude. 
            This moment captured exactly how I feel when I'm with you - completely happy, 
            and calm.
          </p>
          
          <p>
            I remember this day so vividly... the way you laughed, the sparkle in your eyes, 
            and how everything just felt perfect because we were together. These are the 
            moments I cherish the most - the simple, beautiful times that make life 
            extraordinary.
          </p>
          
          <p>
            You have this incredible ability to turn ordinary moments into magical memories. 
            It was the for the very firt time I realized we were meeting and that was so nice and 
            special. We had a bitter day just before that day and but when we met the things were 
            entirely diffrent and I felt so happy and light. Bohot kuch socha uss time pe but i really 
            enjoyed your company maam. 
            I love the way you eat food and the way you get happy after eating and do you happy dance.
            Bass dekh ke maza aata hai yaar. Mai thoda sa bhul jata hu ki mujhe bhi khana hai because I get so
            engrossed in watching you enjoy your food.
          </p>
          
          <motion.div
            className="special-note"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="note-icon">💫</div>
            <p>
              Thank you for all that beautiful day and for making every moment 
              feel like heaven. Tabhi thoda sa laga ki aise aur memories banani hai
              iss ladki ke saath.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="floating-hearts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[1, 2, 3, 4, 5].map((heart) => (
            <motion.div
              key={heart}
              className="floating-heart"
              animate={{
                y: [0, -20, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: heart * 0.3,
                ease: "easeInOut"
              }}
            >
              {heart % 2 === 0 ? '💕' : '💖'}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section3;