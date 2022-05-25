import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ContestForm from "./Contestformpage/ContestForm"
import Contact from "./contactpage/Contact";
import Home from "./HomePage/Home";
import Login from "./auth/Login";

const NavBar = ({ contests }) => {
  return (
    <div>
      <Router>
        <div>
          <nav className="flex text-white font-bold w-full bg-navbg bg-opacity-50 justify-between px-10">
            <div>
              <h1 className="p-6 text-xl">TechNerds</h1>
            </div>

            <div>
              <ul className="md:flex">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contestform">Schedule Contest</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <NavLink
                to="/contestform"
                className="text-secondary cursor-pointer"
              >
                Dashboard
              </NavLink>
            </div>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home contests={contests} />} />
            <Route exact path="/contestform" element={<ContestForm />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
