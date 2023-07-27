import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  //라우터
import { GlobalStyle } from './style.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
)