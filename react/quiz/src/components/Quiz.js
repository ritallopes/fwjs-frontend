import React from 'react'
import Question from './Question';

export default function Quiz({q}) {
  return (
    <div >
    <h1>QUIZ</h1>
        <Question question={q.questions[0]}/>
    </div>
  )
}