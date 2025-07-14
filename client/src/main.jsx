import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/nav.jsx';
import { BrowserRouter } from 'react-router-dom'
import { Import } from 'lucide-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <Nav />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
