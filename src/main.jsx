import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter  as Router, Routes, Route } from 'react-router-dom'
import TagManager from 'react-gtm-module';
import App from './App'
import ContactPage from './ContactPage'
import InvestorsPage from './InvestorsPage'
import './styles/index.css'

const tagManagerArgs = {
  gtmId: 'G-PDMD7RMPEL',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
