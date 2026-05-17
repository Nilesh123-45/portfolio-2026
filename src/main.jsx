import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { inject } from '@vercel/analytics'; // <-- 1. ADD THIS IMPORT

inject(); // <-- 2. ADD THIS FUNCTION CALL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)