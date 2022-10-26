import React from 'react'; 
import './App.css';
import Home from "./components/home";
import ResumeHome from "./components/resumeHome"; 
import Timeline from "./components/timeline";
import TimelineEdu from "./components/timelineEdu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<ResumeHome />}></Route>
          <Route path="/timeline" element={<Timeline />}></Route>
          <Route path="/timeline-edu" element={<TimelineEdu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
