import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import About from "./component/About";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import WorkExperience from "./component/WorkExperience";
import EducationAchievements from "./component/EducationAchievements";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" component={<WorkExperience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<EducationAchievements/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
