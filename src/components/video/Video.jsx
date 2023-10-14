import React, { useState } from "react";
import "../home/Home.css";
import "./video.css";

function Video() {
  // Sample video data (replace with your own data)
  const videos = [
    {
      title: "We Built A $120,000 CARAVAN - Storm breaker.. Launch Video!!",
      description:
        "Our first look at the most eco-friendly optioned caravan in the market. We offer more than just a great-looking caravan. Peak Performance and Efficiency.",
      videoId: "a_KE1CVPT48?si=xmPrmqL9fsyB3OIr",
    },
    {
      title: "Sustainable And Dirt Resistant Caravan Interior?",
      description: "Have you heard about the eco-friendly features that @vanlifestraya is super excited about on their new Deluxe Caravan?",
      videoId: "FDPZOYnzK-4?si=oXM-HGVpUKpjeqe8",
    },
    {
      title: "THE ULTIMATE BATTERY POWER FOR OFF-GRID LIVING.",
      description: "This video by @AVanARamNoPlan , takes you through the Victron Battery Management System and how it powers off-grid living on their 23Ft Stormbreaker by Deluxe Caravans Australia. Check it out !!",
      videoId: "3vnXmXMpJvg?si=74DDJUEOpZL4e9gC",
    },
    {
      title: "CARAVAN TOUR I 23FT Deluxe Caravans - Stormbreaker",
      description: "This video by  @AVanARamNoPlan , takes you through a tour and features of the 23FT Stormbreaker by Deluxe Caravans Australia. Check it out !!",
      videoId: "lYee_55yghM?si=rz-3SYc5qfeSVOFQ",
    },
    {
      title: "EXTERIOR CARAVAN TOUR I 21.6 FT Deluxe Caravans - Stormbreaker",
      description: "Check out our Stormbreaker 21`6 caravans exterior",
      videoId: "ICG-86pUr-g?si=dVW1psZGbV3h9KKN",
    },
  ];

  return (
    <div className="container">
      <div className="component">
        <h1>Our Videos</h1>
        <div className="video-gallery">
          <div className="video-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-card">
                <iframe
                  title="YouTube Video"
                  width="300"
                  height="169"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
