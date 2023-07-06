import React from 'react';
//types
import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className='number ml-10 font-serif text-xl border-2 border-green-100 bg-gradient-to-r from-pink-400 h-10 w-[180px] text-center rounded-lg shadow-2xl'>
      Question: {questionNr}/{totalQuestions}
    </p>
    <br />
    <div className='ml-6 h-20 text-xl border-2 border-gray-300 bg-gradient-to-r from-pink-300 shadow-2xl rounded-lg '>
      <p className='mt-4 ml-4' dangerouslySetInnerHTML={{ __html: question }} />
    </div>
    <br />
    <div className=''>
      {answers.map((answer) => {
        const isCorrect = userAnswer?.correctAnswer === answer;
        const isSelected = userAnswer?.answer === answer;
        return (
          <div className='ml-10 ' key={answer}>
            <button
              className={`ml-1 border-2 border-white mb-2 rounded ${
                isCorrect ? 'bg-green-400' : 'bg-pink-200'
              } shadow-2xl h-18 w-1/2 text-xl hover:bg-purple-300 hover:text-red-500`}
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

export default QuestionCard;
