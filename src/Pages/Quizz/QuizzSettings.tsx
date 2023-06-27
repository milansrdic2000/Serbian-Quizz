import React, { useState } from 'react'
interface QuizzSettingsProps {
  setQuizzType: (value: string) => void
  setQuizzStarted: (value: boolean) => void
}
const QuizzSettings = ({
  setQuizzStarted,
  setQuizzType,
}: QuizzSettingsProps) => {
  return (
    <>
      <h1>Izaberi oblast:</h1>
      <div className='quizz-type-row'>
        <div className='single-quizz-type'>
          <button
            onClick={() => {
              setQuizzStarted(true)
              setQuizzType('Istorija')
            }}
          >
            Istorija
          </button>
        </div>
        <div className='single-quizz-type'>
          <button
            onClick={() => {
              setQuizzStarted(true)
              setQuizzType('Geografija')
            }}
          >
            Geografija
          </button>
        </div>
        <div className='single-quizz-type'>
          <button
            onClick={() => {
              setQuizzStarted(true)
              setQuizzType('Kombinovano')
            }}
          >
            Kombinovano
          </button>
        </div>
      </div>
    </>
  )
}

export default QuizzSettings
