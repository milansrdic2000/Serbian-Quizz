import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import './style.scss'
import Landing from './Pages/Landing/Landing'
import Quizz from './Pages/Quizz/Quizz'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Landing}></Route>
        <Route path='/quizz' Component={Quizz}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
