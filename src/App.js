import "./App.css";

import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
   return (
      <div>
         <NavbarComp />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
         </Routes>
      </div>
   );
}

export default App;
