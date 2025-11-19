import React from 'react';
import { motion } from 'framer-motion';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="special-memory-section">
      <motion.div
        className="memory-container"
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
          A Memory I'll Cherish Forever 💫
        </motion.h2>

        {/* Image Container - Above */}
        <motion.div
          className="memory-image-container"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <motion.img
            src="../src/assets/Image2.jpg" // Replace with your actual photo path
            alt="Our Special Date - October 15th"
            className="special-memory-image"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          {/* <div className="memory-date-badge">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            >
              📅 October 15th
            </motion.div>
          </div> */}
        </motion.div>

        {/* Message Container - Below */}
        <motion.div
          className="memory-description-container"
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
            Our Small Cute Date 💕
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            I'll never forget that beautiful day on October 15th when we had our small, cute date. 
            We went to Sion ka Gurukripa and shared such wonderful moments together. The food, 
            the laughter, everything was perfect because I was with you.
            <br /><br />
            And then we took a cab from there to Kurla station... that cab ride is something 
            I remember so acche se even now! It was so special because that's when my new 
            account had just opened 🤭 (laughter with covering face emoji)
            <br /><br />
            I still remember that day so clearly. Every moment of that day is etched in my heart forever.
            The way you smiled, the silly videos we made together, cute photos we took everything about that day
            makes me so happy. Even the little things like the way we talked, the simple joy of being together - 
            it was pure magic. That date reminded me how even the simplest moments become extraordinary 
            when I'm with you.
          </motion.p>

          {/* Video Section - Added at the end of text */}
          <motion.div
            className="memory-video-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Relive Our Beautiful Moments 🎥
            </motion.h4>
            <video 
              controls 
              className="memory-video"
              poster="/video-poster.jpg" // Optional: add a custom poster image
            >
              <source src="../src/assets/Video1.mp4" type="video/mp4" />
              <source src="/october-15-memory-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <motion.p
              className="video-caption"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Watching this video brings back all the beautiful feelings of that day 💝
            </motion.p>
          </motion.div>

          <motion.div
            className="memory-feelings"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.div
              className="feeling-item"
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
              💖
            </motion.div>
            <motion.div
              className="feeling-item"
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
              😊
            </motion.div>
            <motion.div
              className="feeling-item"
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
              🤭
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="memory-quote"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          "Some moments are not just moments, they are feelings that last forever."
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section5;