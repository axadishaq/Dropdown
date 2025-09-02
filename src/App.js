import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Blog } from "./Blog";
import { Navbar } from "./Navbar";

function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/blog" element={<Blog />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
