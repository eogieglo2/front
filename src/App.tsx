import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import SideBarAccordion from "./components/SideBar/SideBarAccordion";
import Navbar from "./components/Navbar/Navbar";
import ResetEmail from "./pages/ResetEmail/ResetEmail";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Users from "./pages/Dashboard/Users/Users";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Abogado from "./pages/Dashboard/Abogado/Abogado";
import Contracts from "./pages/Dashboard/Contracts/Contracts";
import Categories from "./pages/Dashboard/Categories/Categories";
import Home from "./pages/Landing/Home";

function App() {
  const redirect = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contratos" element={<Contracts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-email" element={<ResetEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

{/*       <div className="dashboard">
        <SideBarAccordion />
        <Navbar />
        <Routes>
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/abogado" element={<Abogado />} />
          <Route path="/dashboard/contracts" element={<Contracts />} />
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
