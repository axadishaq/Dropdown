import React from "react";
import { Link } from "react-router";

export const Container2 = () => {
   return (
      <div>
         <section className="feature-section">
            <div className="container">
               <div className="heading-container">
                  <h1 className="main-heading">Why use Atomize React?</h1>
                  <p className="sub-heading">
                     Atomize React helps you in building fully responsive
                     websites and products that match your style.
                  </p>
               </div>

               <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                     <div className="feature-card">
                        <div className="feature-icon">
                           <div className="icon-grid">
                              <div className="grid-bar"></div>
                              <div className="grid-bar"></div>
                           </div>
                        </div>
                        <h3 className="feature-title">Flexible Grid</h3>
                        <p className="feature-description">
                           Change grid variables or give decimal column size.
                        </p>
                        <Link to="" className="see-how-link">
                           See How
                        </Link>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                     <div className="feature-card">
                        <div className="feature-icon">
                           <div className="style-square"></div>
                        </div>
                        <h3 className="feature-title">Style guide</h3>
                        <p className="feature-description">
                           Update theme throughout the application easily.
                        </p>
                        <Link to="" className="see-how-link">
                           See How
                        </Link>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                     <div className="feature-card">
                        <div className="feature-icon">
                           <div className="spacing-squares">
                              <div className="spacing-square-1"></div>
                              <div className="spacing-square-2"></div>
                           </div>
                        </div>
                        <h3 className="feature-title">Spacing</h3>
                        <p className="feature-description">
                           A better and controlled way of update spacing.
                        </p>
                        <Link to="" className="see-how-link">
                           See How
                        </Link>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                     <div className="feature-card">
                        <div className="feature-icon">
                           <div className="responsive-icon">
                              <div className="responsive-sm"></div>
                              <div className="responsive-lg"></div>
                           </div>
                        </div>
                        <h3 className="feature-title">Responsive</h3>
                        <p className="feature-description">
                           Better control to make the app responsive.
                        </p>
                        <Link to="" className="see-how-link">
                           See How
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
