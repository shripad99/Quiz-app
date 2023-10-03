import React, { useState } from 'react';
import JoinScreen from './JoinScreen';
import Paper from '@mui/material/Paper';
import QuizScreen from './QuizScreen';

const Quiz = () => {
    const [isQuizStarted,setQuizStarted] = useState(false);
  return (
    <Paper className='quiz-container'>
        {
            isQuizStarted ? (
                <QuizScreen retry = {()=>setQuizStarted(false)}/>
            )  : (
                <JoinScreen start = {()=>setQuizStarted(true)}/>
            )
        }
    </Paper>
  )
}

export default Quiz