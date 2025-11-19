import React from 'react';
import { motion } from 'framer-motion';
import './Section7.css';

const Section7 = () => {
  return (
    <section className="ending-section">
      <motion.div
        className="ending-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Journey Continues... 🌟
        </motion.h2>

        <motion.div
          className="ending-content"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <motion.div
            className="ending-message"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Many More Memories to Make 💫
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              As this is the end of the letter, I want you to know that this is just the beginning. 
              There are so many more beautiful memories waiting to be created together, 
              countless adventures yet to be explored, and endless moments of love and laughter ahead.
              <br /><br />
              Every day with you is a new chapter in our beautiful story, and I can't wait 
              to see what the future holds for us. From the simple coffee dates to the grand adventures, 
              I look forward to experiencing it all with you by my side.
              <br /><br />
              Thank you for making this birthday the most special one yet. You've filled my heart 
              with so much joy and love, and I promise to cherish every moment we share.
            </motion.p>

            <motion.div
              className="future-feelings"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="future-item"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0
                }}
              >
                🌈
              </motion.div>
              <motion.div
                className="future-item"
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                ✨
              </motion.div>
              <motion.div
                className="future-item"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: 2
                }}
              >
                🎯
              </motion.div>
              <motion.div
                className="future-item"
                animate={{ 
                  scale: [1, 1.15, 1],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 2.2, 
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                💖
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="final-birthday-wish"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Happy Birthday Once Again! 🎂
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            May this year bring you all the happiness, love, and success you deserve. 
            You are the most amazing person I know, and I feel so blessed to have you in my life.
          </motion.p>
        </motion.div>

        <motion.div
          className="closing-message"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Here's to many more birthdays together, my cutu! 💝
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section7;