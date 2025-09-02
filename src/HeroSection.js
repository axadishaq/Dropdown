import React from "react";

export const HeroSection = () => {
   return (
      <>
         <div className="background">
            <h1 className="text-center m-4">Design System for React JS</h1>
            <p className="text-center m-4">
               Atomize React is a UI framework that helps developers collaborate
               with<br></br> designers and build consistent user interfaces
               effortlessly.
            </p>
            <div className="text-center m-5">
               <button className="btn btn-primary m-2 custom-btn" type="submit">
                  Get Started
               </button>
               <button type="button" className="btn btn-outline-primary m-2 custom-btn">
                  Watch Video
               </button>
            </div>
         </div>
      </>
   );
};
