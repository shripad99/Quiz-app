import React from 'react';
import Button from '@mui/material/Button'

const QuizResult = ({result,retry}) => {
  return (
    <div className='result-screen'>
        <h2>Result: {result.percentage}%</h2>
        <p>Selected {result.correct} correct options out of {result.total} questions.</p>
        <Button onClick={retry}>Retry</Button>
    </div>
  )
}

export default QuizResult