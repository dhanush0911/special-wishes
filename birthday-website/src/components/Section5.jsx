import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="special-memory-section">
      <div className="memory-container">
        <h2>A Memory I'll Cherish Forever 💫</h2>

        <div className="memory-image-container">
          <img
            src="/Image2.jpg"
            alt="Our Special Date - October 15th"
            className="special-memory-image"
          />
        </div>

        <div className="memory-description-container">
          <h3>Our Small Cute Date 💕</h3>
          
          <p>
            I'll never forget that beautiful day on October 15th when we had our small, cute date. 
            We went to Sion ka Gurukripa and shared such wonderful moments together. The food, 
            the laughter, everything was perfect because I was with you.
            <br /><br />
            And then we took a cab from there to Kurla station... that cab ride is something 
            I remember so acche se even now! It was so special because that's when my new 
            account had just opened 🤭
            <br /><br />
            I still remember that day so clearly. Every moment of that day is etched in my heart forever.
            The way you smiled, the silly videos we made together, cute photos we took everything about that day
            makes me so happy. Even the little things like the way we talked, the simple joy of being together - 
            it was pure magic. That date reminded me how even the simplest moments become extraordinary 
            when I'm with you.
          </p>

          <div className="memory-video-container">
            <h4>Relive Our Beautiful Moments 🎥</h4>
            <video 
              controls 
              className="memory-video"
              preload="auto"
            >
              <source src="/Video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">
              Watching this video brings back all the beautiful feelings of that day 💝
            </p>
          </div>

          <div className="memory-feelings">
            <div className="feeling-item">💖</div>
            <div className="feeling-item">😊</div>
            <div className="feeling-item">🤭</div>
          </div>
        </div>

        <div className="memory-quote">
          "Some moments are not just moments, they are feelings that last forever."
        </div>
      </div>
    </section>
  );
};

export default Section5;