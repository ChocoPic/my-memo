import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  //라우터

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
)
