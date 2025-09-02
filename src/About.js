import React from "react";
import { Link } from "react-router";
export const About = () => {
   return (
      <>
        
         {/* <!-- Hero Section --> */}
         <section className="hero-section">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <h1 className="section-title">About Atomize</h1>
                     <p className="lead">
                        We are a passionate team dedicated to creating the most
                        intuitive design system for developers and designers.
                     </p>
                     <p>
                        Founded in 2018, Atomize has grown from a simple idea to
                        a comprehensive design framework used by thousands of
                        professionals worldwide. Our mission is to simplify the
                        design process while maintaining flexibility and
                        customization.
                     </p>
                     <Link to="#" className="btn btn-primary mt-3 custom-btn">
                        Learn More
                     </Link>
                  </div>
                  <div className="col-lg-6">
                     <img
                        src="https://cdn.pixabay.com/photo/2024/02/13/07/05/ai-generated-8570323_640.jpg"
                        alt="About Atomize"
                        className="img-fluid rounded shadow"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Team Section --> */}
         <section className="team-section">
            <div className="container">
               <h2 className="section-title text-center mb-5">Meet Our Team</h2>
               <div className="row">
                  <div className="col-lg-3 col-md-6 ">
                     <div className="team-card text-center  ">
                        <img
                           src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                           alt="Team Member"
                           className="img-fluid team-img"
                        />
                        <h4 className="team-name">Sarah Johnson</h4>
                        <p className="team-position">Founder & CEO</p>
                        <p>
                           With over 15 years of experience in UI/UX design,
                           Sarah leads our vision with passion and innovation.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="team-card text-center">
                        <img
                           src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                           alt="Team Member"
                           className="img-fluid team-img"
                        />
                        <h4 className="team-name">Michael Chen</h4>
                        <p className="team-position">Lead Developer</p>
                        <p>
                           Michael brings cutting-edge technical expertise and
                           ensures our code is clean, efficient, and scalable.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="team-card text-center">
                        <img
                           src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                           alt="Team Member"
                           className="img-fluid team-img"
                        />
                        <h4 className="team-name">Lisa Patel</h4>
                        <p className="team-position">Design Director</p>
                        <p>
                           Lisa oversees our design language, ensuring visual
                           consistency and aesthetic excellence.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="team-card text-center">
                        <img
                           src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                           alt="Team Member"
                           className="img-fluid team-img"
                        />
                        <h4 className="team-name">David Wilson</h4>
                        <p className="team-position">Product Manager</p>
                        <p>
                           David bridges user needs with technical
                           possibilities, guiding our product roadmap.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Stats Section --> */}
         <section className="stats-section">
            <div className="container">
               <div className="row text-center">
                  <div className="col-md-3 col-6 mb-4 mb-md-0">
                     <div className="stat-number">5K+</div>
                     <div className="stat-text">Projects Created</div>
                  </div>
                  <div className="col-md-3 col-6 mb-4 mb-md-0">
                     <div className="stat-number">10K+</div>
                     <div className="stat-text">Active Users</div>
                  </div>
                  <div className="col-md-3 col-6">
                     <div className="stat-number">200+</div>
                     <div className="stat-text">Components</div>
                  </div>
                  <div className="col-md-3 col-6">
                     <div className="stat-number">24</div>
                     <div className="stat-text">Countries Reached</div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Mission Section --> */}
         <section className="mission-section">
            <div className="container">
               <h2 className="section-title text-center mb-5">
                  Our Mission & Values
               </h2>
               <div className="row">
                  <div className="col-md-4 mb-4">
                     <div className="mission-card">
                        <div className="mission-icon">
                           <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4>Innovation</h4>
                        <p>
                           We're constantly pushing boundaries to create
                           solutions that weren't possible before. Our team is
                           dedicated to finding new approaches that make design
                           more intuitive and development more efficient.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="mission-card">
                        <div className="mission-icon">
                           <i className="fas fa-users"></i>
                        </div>
                        <h4>Community</h4>
                        <p>
                           We believe in the power of community collaboration.
                           By fostering an open environment for feedback and
                           ideas, we build better tools that address real-world
                           needs of designers and developers.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="mission-card">
                        <div className="mission-icon">
                           <i className="fas fa-rocket"></i>
                        </div>
                        <h4>Simplicity</h4>
                        <p>
                           Complexity slows progress. We strive to make our
                           design system intuitive and straightforward, helping
                           teams focus on creating amazing products rather than
                           wrestling with implementation details.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Footer --> */}
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
