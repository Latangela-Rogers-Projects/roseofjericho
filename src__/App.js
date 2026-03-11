import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import Nav from './components/statics/nav';
import Footer from './components/statics/footer';
import './components/assets/css/Inter.css';
import './components/assets/css/untitled.css';
import windowSize from 'react-window-size';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/screens/Home';
import AboutUs from './components/screens/AboutUs';
import OurPrograms_Services from './components/screens/OurPrograms&Services';
import Mission_Vission from './components/screens/Mission_Vission';
import Our_Team from './components/screens/Our_Team';
import OutOfTheBox from './components/screens/OutOfTheBox';
import ComunityImpact from './components/screens/ComunityImpact';
// import CommunityMentalHealthService from './components/screens/WomensWellnessClinic';
import TheJoshuaCoalition from './components/screens/TheJoshuaCoalition';
import HeartforCleanWaterProject from './components/screens/HeartforCleanWaterProject';
import WomensWellnessClinic from './components/screens/WomensWellnessClinic';
import Packages from './components/screens/Packages';
import OrderForm from './components/screens/OrderForm';


function App() {
  const [popUpState, setPopUpState] = useState("");

  const state = {
    popUpState,
    setPopUpState: (value) => {setPopUpState(value)}
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home state={state} />} />
        <Route exact path="/AboutUs" element={<AboutUs state={state} />} />
        <Route exact path="/OurPrograms&Services" element={<OurPrograms_Services state={state} />} />
        <Route exact path="/Mission_Vision" element={<Mission_Vission state={state} />} />
        <Route exact path="/Our_Team" element={<Our_Team state={state} />} />
        <Route exact path="/Out_Of_The_Box" element={<OutOfTheBox state={state} />} />
        <Route exact path="/Comunity_Impact" element={<ComunityImpact />} />
        <Route exact path="/Heart_for_Clean_Water_Project" element={<HeartforCleanWaterProject state={state} />} />
        <Route exact path="/Womens_Wellness_Clinic" element={<WomensWellnessClinic state={state} />} />
        <Route exact path="/The_Joshua_Coalition" element={<TheJoshuaCoalition state={state} />} />
        <Route exact path="/Packages" element={<Packages state={state} />} />
        <Route exact path="/OrderForm" element={<OrderForm state={state} />}/>
        <Route path="*" element={<Home state={state} />} />
      </Routes>
    </Router>
  );
}

export default windowSize(App);
