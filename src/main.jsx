import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "leaflet/dist/leaflet.css";

import './index.css'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import Section from './Section.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Section />
    <Footer />
  </StrictMode>,
)
