import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CommunityForums from './components/CommunityForums';
import IssueReporting from './components/IssueReporting';
import PollsSurveys from './components/PollsSurveys';
import EventCalendar from './components/EventCalendar';
import TransparencyDashboard from './components/TransparencyDashboard';
import VolunteerCoordination from './components/VolunteerCoordination';
import Petitions from './components/Petitions';
import LoginSignupPopup from './components/LoginSignupPopup';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

const App = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <Router>
            <div className="header">
                <h1>Urban Engage </h1>
            </div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/forums">Community Forums</Link>
                <Link to="/issues">Issue Reporting</Link>
                <Link to="/polls">Polls and Surveys</Link>
                <Link to="/events">Event Calendar</Link>
                <Link to="/dashboard">Transparency Dashboard</Link>
                <Link to="/volunteer">Volunteer Coordination</Link>
                <Link to="/petitions">Petitions</Link>
                <img 
                    src="/acc.png" 
                    alt="Account" 
                    className="account-icon" 
                    onClick={togglePopup} 
                />
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ImageCarousel />} />
                    <Route path="/forums" element={<CommunityForums />} />
                    <Route path="/issues" element={<IssueReporting />} />
                    <Route path="/polls" element={<PollsSurveys />} />
                    <Route path="/events" element={<EventCalendar />} />
                    <Route path="/dashboard" element={<TransparencyDashboard />} />
                    <Route path="/volunteer" element={<VolunteerCoordination />} />
                    <Route path="/petitions" element={<Petitions />} />
                </Routes>
            </div>
            {showPopup && <LoginSignupPopup onClose={togglePopup} />}
        </Router>
    );
};

export default App;
