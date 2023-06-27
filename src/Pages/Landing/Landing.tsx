import React from 'react'
import './Style/landing.scss'

import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const history = useNavigate()
  return (
    <div className='landing-page'>
      <section className='hero-section'>
        <h1>
          Dobrodosli na kviz o srpskom kulturno istorjiskom i geografskom
          nasledju
        </h1>
        <button
          onClick={() => {
            history('/quizz')
          }}
        >
          Pokreni kviz
        </button>
      </section>
    </div>
  )
}

export default Landing
