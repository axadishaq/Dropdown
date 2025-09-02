import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router";

export const Blog = () => {
   return (
      <>
         {/* <!-- Blog Header --> */}
         <header className="blog-header">
            <div className="container">
               <h1 className="blog-title">Our Blog</h1>
               <p className="lead">Updates and insights from our team</p>
            </div>
         </header>

         {/* <!-- Blog Posts --> */}
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mx-auto">
                  {/* <!-- Blog Post 1 --> */}
                  <article className="blog-post">
                     <h2 className="post-title">
                        Introducing Atomize 2.0: The Future of Design Systems
                     </h2>
                     <div className="post-meta">
                        <span>
                           <i className="far fa-calendar me-1"></i> April 10,
                           2025
                        </span>
                        <span className="mx-2">|</span>
                        <span>
                           <i className="far fa-user me-1"></i> Sarah Johnson
                        </span>
                     </div>
                     <img
                        src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                        alt="Blog post"
                        className="img-fluid post-img"
                     />
                     <p>
                        We're excited to announce the launch of Atomize 2.0, a
                        complete overhaul of our design system with new
                        components, improved documentation, and enhanced
                        performance.
                     </p>
                     <p>
                        After months of gathering feedback and working closely
                        with our community, we've reimagined what a modern
                        design system should be. Atomize 2.0 brings atomic
                        design principles to the next level.
                     </p>
                     <Link to="#" className="btn btn-primary">
                        Read More
                     </Link>
                  </article>

                  {/* <!-- Blog Post 2 --> */}
                  <article className="blog-post">
                     <h2 className="post-title">
                        Color Theory in UI Design: Creating Harmonious
                        Interfaces
                     </h2>
                     <div className="post-meta">
                        <span>
                           <i className="far fa-calendar me-1"></i> April 8,
                           2025
                        </span>
                        <span className="mx-2">|</span>
                        <span>
                           <i className="far fa-user me-1"></i> Michael Chen
                        </span>
                     </div>
                     <img
                        src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                        alt="Blog post"
                        className="img-fluid post-img"
                     />
                     <p>
                        Learn how to use color theory principles to create
                        visually appealing and harmonious user interfaces that
                        guide users through your application.
                     </p>
                     <p>
                        Color is one of the most powerful tools in a designer's
                        toolkit. When used correctly, it can influence user
                        behavior, create emotional connections, and enhance the
                        overall user experience.
                     </p>
                     <Link to="#" className="btn btn-primary">
                        Read More
                     </Link>
                  </article>

                  {/* <!-- Blog Post 3 --> */}
                  <article className="blog-post">
                     <h2 className="post-title">
                        Building a Design System from Scratch: A Step-by-Step
                        Guide
                     </h2>
                     <div className="post-meta">
                        <span>
                           <i className="far fa-calendar me-1"></i> March 30,
                           2025
                        </span>
                        <span className="mx-2">|</span>
                        <span>
                           <i className="far fa-user me-1"></i> Lisa Patel
                        </span>
                     </div>
                     <img
                        src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                        alt="Blog post"
                        className="img-fluid post-img"
                     />
                     <p>
                        A comprehensive guide to creating your own design system
                        from the ground up, with practical tips and best
                        practices.
                     </p>
                     <p>
                        Design systems are more than just component libraries.
                        They represent a single source of truth for your product
                        design, ensuring consistency across all platforms and
                        touchpoints.
                     </p>
                     <Link to="#" className="btn btn-primary">
                        Read More
                     </Link>
                  </article>

                  {/* <!-- Pagination --> */}
                  <nav aria-label="Blog pagination">
                     <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                           <Link
                              className="page-link"
                              to="#"
                              tabindex="-1"
                              aria-disabled="true">
                              Previous
                           </Link>
                        </li>
                        <li className="page-item active">
                           <Link className="page-link" to="#">
                              1
                           </Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">
                              2
                           </Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">
                              3
                           </Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">
                              Next
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>

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
