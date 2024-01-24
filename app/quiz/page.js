'use client'
import React, { useState } from 'react'
import { quiz } from '../data.js'

function page() {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true)
    setSelectedAnswerIndex(idx)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      console.log('true')
    } else {
      setSelectedAnswer(false)
      console.log('false')
    }
  }

  const nextQuestion = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer ?
        {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1
        } : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    setChecked(false)

  }

  return (
    <div className='bg-neutral py-16 text-primary'>
      <h1 className='text-center text-4xl font-bold'>Quiz</h1>
      <div className='bg-primary py-16 m-10 rounded-lg'>
        <div>
          {!showResult ? (
            <div className="text-white text-xl m-8">
              <h2 className='m-5'>Question: {activeQuestion + 1}
                <span>/10</span>
              </h2>
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={selectedAnswerIndex == idx ? 'btn m-5 btn-secondary' : 'btn m-5 active:btn-secondary'}
                >
                  <span>{answer}</span>
                </li>
              ))}
              <br /><br />
              {checked ? (
                <button onClick={nextQuestion} className='btn font-bold m-5'>
                  {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                </button>
              ) : (
                <button onClick={nextQuestion} className='btn-disabled font-bold m-5'>
                  {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-primary py-16 text-white font-bold">
              <h3 className='text-center text-3xl'>สรุปคะแนน Quiz</h3>
              <div className='m-5 text-center'>
                <h3 className='text-xl'>ทั้งหมด {(result.score / 25) * 100}%</h3>
                <p className='text-xl'>คําถามทั้งหมด: <span>{questions.length}</span></p>
                <p className='text-xl'>คะแนนรวม: <span>{result.score}</span></p>
                <p className='text-xl'>คําตอบที่ถูกต้อง: <span>{result.correctAnswers}</span></p>
                <p className='text-xl'>ตอบผิด: <span>{result.wrongAnswers}</span></p>
              </div>
              <div className='flex justify-around items-center'>
                <button className='btn' onClick={() => window.location.reload()}>Restart</button>
                <a className='btn' href="/">Home</a>
              </div>
            </div>
          )}

          <div className='flex justify-center items-center'>
            <img src='https://cdn.discordapp.com/attachments/1133045775128068179/1190567379260940348/t.webp?ex=65bdf4c6&is=65ab7fc6&hm=bea1b2f61d3fbade6410cca413eae72441bbecdb454b64dfa7da3d3577ae5bc0&' alt='rubbit' className="w-[5rem]" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default page