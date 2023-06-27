import React, { useState } from 'react'
import { Question as QuestionM, Answer as AnswerM } from '../../Model/Question'

interface QuestionProps {
  question: QuestionM
  showResult: boolean
  setShowResult: (value: boolean) => void
  currentQuestionIndex: number
  setIsAnswerCorrect: (value: boolean) => void
  isAnswerCorrect: boolean
  calculateStatistics: (value: boolean) => void
}

const Question = (props: QuestionProps) => {
  const {
    question,
    showResult,
    setShowResult,
    currentQuestionIndex,
    isAnswerCorrect,
    setIsAnswerCorrect,
    calculateStatistics,
  } = props

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1)

  return (
    <section className='question-container'>
      <h1 className='question-title'>Pitanje {currentQuestionIndex + 1}</h1>
      <p className='question-text'>{question.questionText}</p>
      <div className='answers-container'>
        {question.answerList.map((answer, index) => {
          return (
            <div className='single-answer'>
              <button
                className={`${
                  showResult
                    ? answer.correct
                      ? 'correct-answer'
                      : 'incorrect-answer'
                    : ''
                }`}
                onClick={() => {
                  if (!showResult) {
                    console.log(answer.correct)
                    setShowResult(true)
                    setSelectedAnswerIndex(index)
                    let correct = false
                    if (answer.correct) correct = true

                    setIsAnswerCorrect(correct)
                    calculateStatistics(correct)
                  }
                }}
              >
                {answer.answer}
              </button>

              <img
                src={`/images/${
                  answer.correct ? 'correct.png' : 'incorrect.png'
                }`}
                alt=''
                className={`${
                  selectedAnswerIndex == index && showResult ? 'visible' : ''
                }`}
              />
            </div>
          )
        })}
      </div>
      {/* Objasnjenje i tacno netacno */}
    </section>
  )
}

export default Question
