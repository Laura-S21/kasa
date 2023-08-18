import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Footer from './components/Footer'
import './_index.scss'
import Logement from './pages/Logement'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


