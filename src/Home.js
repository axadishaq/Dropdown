import React from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { Container } from "./Container";
import { Container2 } from "./Container2";
import { Container3 } from "./Container3";
import { Container4 } from "./Container4";
import { Footer } from "./Footer";

export const Home = () => {
   return (
      <>
         <HeroSection />
         <Container />
         <Container2 />
         <Container3 />
         <Container4 />
         <Footer />

         {/* <center>
            <br></br>
            <br></br>
            <h1>Welcome to Home page!</h1>
            <br></br>
            <div class="spinner-border text-info" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         </center> */}
      </>
   );
};
