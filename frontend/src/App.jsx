//IMPORTS
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WorkoutSessions from "./Components/WorkoutSessions";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import BMICalculator from "./Components/BMICalculator";

const App = () => {
  return (
    <Router>  
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Pricing/>
      <BMICalculator/>
      <Contact/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App

//BrowserRouter used for routing
//Components Imported
//Vital + React
//Spinner 
//Toastify
//React Router Dom
//Axios
//React Lucide