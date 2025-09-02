import React from "react";
import { Link } from "react-router";
export const Container4 = () => {
   return (
      <>
         <div className="features-section">
            <div className="container">
               {/* <!-- Features Grid --> */}
               <div className="row g-4">
                  {/* <!-- Feature 1 --> */}
                  <div className="col-md-3">
                     <div className="feature-box">
                        <div className="feature-count">15+</div>
                        <p className="feature-description">
                           Ready to use React Components
                        </p>
                     </div>
                  </div>

                  {/* <!-- Feature 2 --> */}
                  <div className="col-md-3">
                     <div className="feature-box">
                        <div className="feature-count">60+</div>
                        <p className="feature-description">
                           Predefined colors for theme setup
                        </p>
                     </div>
                  </div>

                  {/* <!-- Feature 3 --> */}
                  <div className="col-md-3">
                     <div className="feature-box">
                        <div className="feature-count code-symbol">
                           &lt;/&gt;
                        </div>
                        <p className="feature-description">
                           Detailed documentation for each component
                        </p>
                     </div>
                  </div>

                  {/* <!-- Feature 4 --> */}
                  <div className="col-md-3">
                     <div className="feature-box">
                        <div className="feature-count free-text">FREE</div>
                        <p className="feature-description">
                           Open source with regular updates
                        </p>
                     </div>
                  </div>
               </div>

               {/* <!-- Announcement Banner --> */}
               <div className="announcement-banner">
                  <div className="row align-items-center">
                     <div className="col-md-8">
                        <h2 className="banner-heading">
                           UI Templates are on their way
                           <span className="rocket-icon">🚀</span>
                        </h2>
                        <p className="banner-description">
                           Official UI templates build on Atomize React will be
                           released very soon.
                        </p>
                     </div>
                     <div className="col-md-4 text-md-end mt-4 mt-md-0">
                        <Link to="#" className="banner-button">
                           Get notified
                           <span className="arrow">→</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
