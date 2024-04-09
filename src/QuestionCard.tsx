import React from 'react'
type Props={
    question: string;
    answers:string[];
    callBack:any;
    userAnswer:any;
    questionNr:number;
    totalQuestions:number;
}
const QuestionCard: React.FC<Props> = ({question,answers,userAnswer,callBack,questionNr,totalQuestions}) => {
    return (
      <div>
       <p className='number'>
        Question:{questionNr}/{totalQuestions}

       </p>
       <p dangerouslySetInnerHTML={{__html:question}}></p>
       <div>
        {answers.map(answer=>(
            <div>
                <button disabled={userAnswer} onClick={callBack}>
                    <span dangerouslySetInnerHTML={{__html:answer}}></span>
                </button>
            </div>
        ))}
       </div>
      </div>
    );
  };
export default QuestionCard
