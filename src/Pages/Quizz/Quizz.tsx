import React, { useState } from 'react'
import './Style/quizz.scss'
import Question from './Question'
import QuizzSettings from './QuizzSettings'

import historyQuestions from '../../data-history.json'

import { Question as QuestionM, Answer as AnswerM } from '../../Model/Question'
import { Statistics } from '../../Model/Statistics'
const Quizz = () => {
  //tip kviza, da li je istorija, geografija ili kombinovano
  const [quizzType, setQuizzType] = useState<string>()
  //da li je kviz pokrenut, ili tek treba da izaberemo tip kviza
  const [quizzStarted, setQuizzStarted] = useState<boolean>(false)

  //ovo je niz koji predstavlja listu pitanja
  const [quizzQuestions, setQuizzQuestions] = useState<QuestionM[]>(
    historyQuestions as unknown as QuestionM[]
  )
  //index trenutnog pitanja
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  // da li je igra/kviz gotov

  const isQuizzEnd = currentQuestionIndex == quizzQuestions.length - 1

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(true)

  const [statistics, setStatistics] = useState<Statistics>({
    //broj odigranih pitanja
    questionNumber: 0,
    //broj tacno pogodjenih
    correctAnswers: 0,
  })
  //izracunaj procenat tacno pogodjenih odgovora
  const getPercentage = () => {
    console.log(statistics.correctAnswers + ' od ' + statistics.questionNumber)
    if (statistics.questionNumber == 0) return 0
    return statistics.correctAnswers / statistics.questionNumber
  }

  //da li treba da se prikazu rezultati kviza, odnosno koji je tacan odgovor
  const [showResult, setShowResult] = useState<boolean>(false)

  //izracunaj statistiku, posle svakog odgovora se racuna
  const calculateStatistics = (isAnswerCorrect: boolean) => {
    setStatistics((value) => {
      let newStatistic = { ...value }
      console.log(isAnswerCorrect)
      if (isAnswerCorrect) {
        newStatistic.correctAnswers++
      }
      newStatistic.questionNumber++
      return newStatistic
    })
  }

  return (
    <div className='quiz-page'>
      {!quizzStarted ? (
        <QuizzSettings
          setQuizzType={setQuizzType}
          setQuizzStarted={setQuizzStarted}
        />
      ) : (
        <>
          <h3>
            Progres: {`${currentQuestionIndex + 1}/${quizzQuestions.length}`}
          </h3>
          <h3>
            Tacnost:
            {statistics
              ? (getPercentage() * 100).toFixed(2).replace(/\.?0+$/, '')
              : ''}
            %
          </h3>
          <Question
            question={quizzQuestions[currentQuestionIndex]}
            showResult={showResult}
            setShowResult={setShowResult}
            currentQuestionIndex={currentQuestionIndex}
            isAnswerCorrect={isAnswerCorrect}
            setIsAnswerCorrect={setIsAnswerCorrect}
            calculateStatistics={calculateStatistics}
          ></Question>
          <div className='quizz-navigation-container'>
            {showResult ? (
              !isQuizzEnd ? (
                <button
                  onClick={() => {
                    setCurrentQuestionIndex((index) => index + 1)
                    setShowResult(false)
                  }}
                >
                  Sledece pitanje
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowResult(false)
                    setCurrentQuestionIndex(0)
                    setQuizzStarted(false)
                    setStatistics({
                      questionNumber: 0,
                      correctAnswers: 0,
                    })
                  }}
                >
                  Zavrsi igru
                </button>
              )
            ) : (
              ''
            )}
            <div
              id='restart-quizz'
              onClick={() => {
                setShowResult(false)
                setCurrentQuestionIndex(0)
                setStatistics({
                  questionNumber: 0,
                  correctAnswers: 0,
                })
              }}
            >
              <img src='/images/restart.png' alt='' />
              Restartuj kviz
            </div>
          </div>

          {showResult ? (
            <>
              <p className='question-explanation'>
                {/* Objasnjenje cara dusana silnog */}
              </p>
            </>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  )
}

export default Quizz
