// src/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../Views/Home/HomePage';
// import UserProfile from './UserProfile';
// import About from './About'; // Optional: additional route

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/home/:id" element={<UserProfile />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default AppRoutes;
