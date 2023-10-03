import React,{useState} from 'react';
import QuizData from './QuizData.json';
import Question from './Question';
import QuizResult from './QuizResult';

const QuizScreen = ({retry}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(new Array(QuizData.length));
  const isQuestionEnd = currentQuestionIndex === QuizData.length;

  const calculateResult = () =>{
    console.log({markedAnswers});
    let correct = 0;
    QuizData.forEach((question,index)=>{
      if(question.correctOptionIndex == markedAnswers[index]){
        correct++;
      }
    });
    return{
      total:QuizData.length,
      correct:correct,
      percentage:Math.trunc((correct / QuizData.length) * 100)
    }
  }
  return (
    <div className='quiz-screen'>
      {
        isQuestionEnd ? (
          <QuizResult
            result={calculateResult()}
            retry={retry}
          />
        ) : (
          <Question
            question={QuizData[currentQuestionIndex]}
            totalQuestions={QuizData.length}
            currentQuestion={currentQuestionIndex+1}
            setAnswer={(index)=>{
              setMarkedAnswers((arr)=>{
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex+1);
            }}
          />
        )
      }
    </div>
  )
}

export default QuizScreen