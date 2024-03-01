// src/App.js

import React from 'react';
import './App.css';
import Features from './components/features/features';
import Footer from './components/footer/Footer'; // Import the Footer component
import Header from './components/header/header';
import Chatbot from './components/features/Chatbot/Chatbot';
import Main from './components/new/form';
import PdfDownload from './components/new/download';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/features/form1';

function App() {
  return (
    <div className="App">

      <Header />

      <PdfDownload />
      <Chatbot />
      <Features />
      <Footer />



    </div>
  );
}

export default App;
