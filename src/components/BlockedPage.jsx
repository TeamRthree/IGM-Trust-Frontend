import React from "react";
import { useNavigate } from "react-router-dom";

const BlockedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warm-cream text-heritage px-6 relative overflow-hidden">
      
      

      <h1 className="relative text-5xl md:text-6xl font-heading mb-4 z-10">
        Coming Soon
      </h1>
      <p className="relative text-lg md:text-xl font-body mb-6 max-w-lg text-center z-10">
        This section for the <span className="font-semibold">New Trust Foundation for Children</span> 
        is currently under development. Check back soon to explore inspiring stories, projects, and ways 
        to support children’s futures.
      </p>
      <button
        onClick={() => navigate("/")}
        className="relative px-6 py-3 bg-liquid-gold text-foreground rounded-full font-semibold hover:bg-liquid-gold-dark transition-colors duration-300 z-10"
      >
        Go to Home
      </button>
    </div>
  );
};

export default BlockedPage;
