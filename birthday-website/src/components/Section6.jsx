import React from 'react';
import { motion } from 'framer-motion';
import './Section6.css';

const Section6 = () => {
  return (
    <section className="thank-you-section">
      <motion.div
        className="thank-you-container"
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
          Thank You For Making My Birthday Special 🎉
        </motion.h2>

        <motion.div
          className="thank-you-content"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <div className="thank-you-image-container">
            <motion.img
              src="../src/assets/image3.jpg" // Replace with your decoration photo
              className="decoration-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {/* <div className="decoration-badge">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              >
              </motion.div>
            </div> */}
          </div>

          <motion.div
            className="thank-you-message"
            initial={{ x: 100, opacity: 0 }}
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
              My Heartfelt Gratitude 💖
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I want to thank you from the bottom of my heart for making my birthday 
              so incredibly special. The way you decorated Mr. Nexon 🤭 by yourself and put so much 
              love and effort into celebrating my day... it meant the world to me. The efforts that you took
              for making my day the best one really makes me feel special and loved. 
              <br /><br />
              Every single decoration, every little detail you planned, showed me 
              how much you care. You turned an ordinary day into the most magical 
              celebration just like you promised me, and I'll never forget how special you made me feel that day.
              You were kuch inches away from making me cry with happiness!😭
              <br /><br />
              Seeing your smiling face and feeling your love throughout the evening, 
              spending the best evening and talking to you and sharing those cute moments
              was the best gift I could ever ask for. Aapne toh mere liye pura garden la diya maam
              🤭🌸🌼🌺🌻🌷
              and the gift you gave me was just the cherry on top of an already perfect day.
              <br /><br />
              Thank you for all the effort, the surprises, and most of all, for being you. 
              Aap jaise bhi ho mujhe bas aise hi pasand ho. I feel so lucky to have you in my life.
            </motion.p>

            <motion.div
              className="gratitude-feelings"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="gratitude-item"
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
                🎂
              </motion.div>
              <motion.div
                className="gratitude-item"
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
                🎀
              </motion.div>
              <motion.div
                className="gratitude-item"
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
                🎉
              </motion.div>
              <motion.div
                className="gratitude-item"
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
                💝
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="final-thank-you"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Thank you for being the most amazing person in my life. 💖
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section6;