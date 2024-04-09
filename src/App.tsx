import React ,{useState} from 'react';
import logo from './logo.svg';
import {fetchQuizQuestions,Difficulty,QuestionState } from './API';
import './App.css';
import QuestionCard from './QuestionCard';
function App() {
  const TOTAL = 10; // Corrected constant name
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(fetchQuizQuestions(TOTAL,Difficulty.EASY));
    const startTrivia= async ()=>{

    }
    const checkAnswers=(e:React.MouseEvent<HTMLButtonElement>)=>{

    }
    const nextQuestion=()=>{
      
    }
  return (
    <div className="App">
    <h1>React Quiz</h1>
    <button
    className='start' onClick={startTrivia}
    >Start
  </button>
  <p>Score</p>
  <p>Loading.....</p>
  {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL}
        question={questions[number]?.question} 
        answers={questions[number]?.answers ?? []} 
        userAnswer={userAnswers[number]}
        callBack={checkAnswers}
      /> */}
  <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
