import {useState,useEffect,useRef,useCallback} from 'react';
import Button from '@mui/material/Button';

const Question = ({question,totalQuestions,currentQuestion,setAnswer}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    const gotoNextQuestion = useCallback(() =>{
        if(timer.current){
            clearTimeout(timer.current);
        }
        setAnswer(selectedOption);
        setSelectedOption(null);
    },[selectedOption, setAnswer]);

    useEffect(()=>{
        progressBar.current.classList.remove("active");
        setTimeout(()=>{
            progressBar.current.classList.add("active");
        },0);
        timer.current = setTimeout(gotoNextQuestion, 10*1000);  // 10 seconds
        return () => clearTimeout(timer.current);
    }, [question, gotoNextQuestion]);

  return (
    <div className='question'>
        <div className='progress-bar' ref={progressBar}></div>
        <div className='question-count'>
            <b>{currentQuestion}</b>
            of
            <b>{totalQuestions}</b>
        </div>
        <div className='main'>
            <div className='title'>
                <span>Question:</span>
                <p>{question.title}</p>
            </div>
            <div className='options'>
                {
                    question.options.map((option,index)=>{
                        return(
                            <div
                            className={index === selectedOption ? "option active" : "option"}
                            key={index}
                            onClick={()=>setSelectedOption(index)}
                        >
                            {option}
                        </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='control'>
            <Button onClick={gotoNextQuestion}>Next</Button>
        </div>
    </div>
  )
}

export default Question