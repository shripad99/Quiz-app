import React from 'react';
import Button from '@mui/material/Button';

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
        <h2>Join Quiz</h2>
        <p>Do you want to start the Quiz</p>
        <Button onClick={start}>Start</Button>
    </div>
  )
}

export default JoinScreen