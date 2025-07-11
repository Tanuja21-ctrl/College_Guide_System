import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navb from "./Component/Navbar/Navb";
import Caresol from "./Component/Caresol/Caresol";
import Top from "./Component/Top/Top";
import Topm from "./Component/Top/Topm";
import Service from "./Component/Service/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/Footer/Footer";
import Topmba from "./Component/Top/Topmba";
import AboutUs from "./Component/Navbar/AboutUs";
import PunePage from "./Component/Location/PunePage";
import Review from "./Component/Review/Review";
import LoginPage from "./Component/Navbar/LoginPage";
import ServeSection from "./Component/Review/ServeSection";
import AllTop from "./Component/Location/AllTop";
import Registration from "./Component/Navbar/Registration";
import Admin from "./Component/Navbar/Admin";
import Faq from "./Component/Footer/Faq";
import College from "./Component/Collegedata/College.js"; 
import Contactus from "./Component/Collegedata/Contactus.js";
import Profile from "./Component/profile/Profile.js";
import AdminRegister from "./Component/Navbar/AdminRegister.js";
import AdminLayout from "./Component/AdminPanel/AdminLayout.js";
import Sidebar from "./Component/AdminPanel/Sidebar.js";
import Collegeadmin from "./Component/AdminPanel/Collegeadmin.js";
import Studentadmin from "./Component/AdminPanel/Studentadmin.js";
import Dashboard from "./Component/AdminPanel/Dashboard.js";

function App() {
  return (
    <Router>
      <Navb />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Caresol />
              <Top />
              <Topm />
              <Topmba />
              <AboutUs />
              <AllTop />
              <ServeSection />
              <Service />
              <Review />
              <Contactus/>
              {/* <AdminLayout/> */}
              <Footer />
            </>
          }
        />

        <Route path="/service" element={<Service />} />
        <Route path="/college/:collegeId" element={<College />} /> 
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/PunePage" element={<PunePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route Path="admin" element={<AdminLayout/>}/>
        <Route path="/" element={<Sidebar/>}/>
        <Route Path="" element={<Dashboard/>}/>
        <Route Path="colleges" element={<Collegeadmin/>}/>
        <Route Path="students" element={<Studentadmin/>}/>
        <Route path="/adminlayout" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
