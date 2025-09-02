import React from "react";
import "./App.css";
import { Link } from "react-router";
export const Container = () => {
   return (
      <>
         <div className="container py-5">
            <div className="row">
               {/* <!-- Profile Section --> */}
               <div className="col-lg-4">
                  <div className="action-icons justify-content-center shadow p-3 mb-3  rounded">
                     <div className="icon-circle">
                        <i className="fas fa-heart icon-heart"></i>
                     </div>
                     <div className="icon-circle">
                        <i className="fas fa-eye icon-eye"></i>
                     </div>
                     <div className="icon-circle">
                        <i className="fas fa-pencil-alt icon-edit"></i>
                     </div>
                     <div className="icon-circle">
                        <i className="fas fa-link icon-link"></i>
                     </div>
                     <div className="icon-circle">
                        <i className="fas fa-play icon-play"></i>
                     </div>
                     <div className="icon-circle">
                        <i className="fas fa-download icon-download"></i>
                     </div>
                  </div>
                  <div className="profile-card p-4 text-center shadow p-3 mb-5  rounded">
                     <div className="profile-image">
                        <img
                           src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                           alt="Meagan Fisher"
                        />
                     </div>
                     <h3 className="mb-1">Meagan Fisher</h3>
                     <p className="text-muted mb-4">Engineering Manager</p>

                     <div className="d-flex justify-content-center gap-2 mb-3">
                        <button className="follow-btn px-4 py-2">
                           <i className="fas fa-user-plus me-2"></i>Follow
                        </button>
                        <button className="message-btn px-4 py-2">
                           <i className="fas fa-comment me-2"></i>Message
                        </button>
                     </div>
                  </div>
               </div>

               {/* <!-- Posts Section --> */}
               <div className="col-lg-4">
                  <div className="post-card mb-4 shadow  mb-5  rounded">
                     <div className="position-relative">
                        <img
                           src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
                           className="pier-image"
                           alt="Pier"
                        />
                        <i className="far fa-heart heart-icon"></i>
                     </div>
                     <div className="p-3 d-flex align-items-center">
                        <div className="small-profile me-2">
                           <img
                              src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                              alt="Meagan Fisher"
                           />
                        </div>
                        <div>
                           <h6 className="mb-0">Meagan Fisher</h6>
                        </div>
                     </div>
                  </div>

                  <div className="post-card position-relative shadow p-3 mb-5  rounded">
                     <div className="p-3 d-flex align-items-center">
                        <div className="small-profile me-2">
                           <img
                              src="https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_640.jpg"
                              alt="John Doe"
                           />
                        </div>
                        <div>
                           <h6 className="mb-0">John Doe</h6>
                           <small className="text-muted">UI/UX Designer</small>
                        </div>
                        <div className="edit-icon">
                           <i className="fas fa-pencil-alt"></i>
                        </div>
                     </div>
                  </div>
               </div>

               {/* <!-- Login Section --> */}
               <div className="col-lg-4 ">
                  <div className="login-card p-4 ">
                     <h3 className="mb-2">Login into your account</h3>

                     <p className="text-muted mb-4 fs-6">
                        Don't have an account yet?
                        <Link to="" className="create-new fs-6">
                           Create New
                        </Link>
                     </p>
                     <br></br>
                     <br></br>
                     <br></br>

                     <form className="login-form">
                        <div className="position-relative mb-3">
                           <input
                              type="email"
                              className="form-control"
                              placeholder="johndoe@gmail.com"
                           />
                           <i
                              className="fas fa-envelope position-absolute"
                              style={{
                                 right: "15px",
                                 top: "12px",
                                 color: "#adb5bd",
                              }}></i>
                        </div>

                        <div className="position-relative mb-4">
                           <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                           />
                           <i
                              className="fas fa-eye position-absolute"
                              style={{
                                 right: "15px",
                                 top: "12px",
                                 color: "#adb5bd",
                              }}></i>
                        </div>

                        <button type="submit" className="login-btn">
                           Login
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
