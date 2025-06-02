import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "./Components/Navbar/Navbar.css"
import "./Components/Home/Home.css"
import "./Components/About/About.css"
import "./Components/Footer/Footer.css"
import "./Components/Portfolio/Portfolio.css"
import "./Components/Contact/Contact.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
