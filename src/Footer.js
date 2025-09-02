import React from "react";
import { Link } from "react-router";
export const Footer = () => {
   return (
      <>
         <div className="container">
            <div className="row nav-section">
               {/* <!-- Docs Column --> */}
               <div className="col-md-2 col-sm-6 mb-4">
                  <div className="nav-title">Docs</div>
                  <div className="nav-item">
                     <Link to="#">Installation</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Theme Setup</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Grid</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Atoms</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Molecules</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Functions</Link>
                  </div>
               </div>

               {/* <!-- Atomize Column --> */}
               <div className="col-md-2 col-sm-6 mb-4">
                  <div className="nav-title">Atomize</div>
                  <div className="nav-item">
                     <Link to="#">Features</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Design</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Development</Link>
                  </div>
               </div>

               {/* <!-- Resources Column --> */}
               <div className="col-md-2 col-sm-6 mb-4">
                  <div className="nav-title">Resources</div>
                  <div className="nav-item">
                     <Link to="#">Sketch File</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Github</Link>
                  </div>
               </div>

               {/* <!-- About Column --> */}
               <div className="col-md-2 col-sm-6 mb-4">
                  <div className="nav-title">About</div>
                  <div className="nav-item">
                     <Link to="#">Showcase</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Contribute</Link>
                  </div>
               </div>

               {/* <!-- Extras Column --> */}
               <div className="col-md-2 col-sm-6 mb-4">
                  <div className="nav-title">Extras</div>
                  <div className="nav-item">
                     <Link to="#">Blog</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Need Help?</Link>
                  </div>
                  <div className="nav-item">
                     <Link to="#">Give Feedback</Link>
                  </div>
               </div>
            </div>
         </div>

         <footer className="footer">
            <div className="container">
               <div className="designer-credit">
                  Designed & Developed by Asad ✨💕🐱‍👤💫💤
               </div>
               <div className="social-icons">
                  <Link to="#">
                     <i className="fab fa-github"></i>
                  </Link>
                  <Link to="#">
                     <i className="fab fa-behance"></i>
                  </Link>
                  <Link to="#">
                     <i className="fab fa-dribbble"></i>
                  </Link>
                  <Link to="#">
                     <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                     <i className="fab fa-linkedin-in"></i>
                  </Link>
               </div>
            </div>
         </footer>
      </>
   );
};
