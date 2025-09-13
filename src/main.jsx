import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 👈 importar router
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>        {/* 👈 envolver */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
