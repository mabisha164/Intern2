import React ,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import image from "./Images/img1.png";

 //TYpes
import {QuestionState,  Difficulty } from './API';

 export type AnswerObject ={
  question:string;
  answer:string | undefined;
  correct:boolean;
  correctAnswer: string;
 }


const  TOTAL_QUESTIONS = 15;

const App=()=> {
  const [loading,setLoading]= useState(false);
  const[questions,setQuestions]= useState<QuestionState[]>([]);
  const [number,setNumber]= useState(0);
  const [userAnswers,setUserAnswers]= useState<AnswerObject[]>([]);
  const[score,setScore] = useState(0);
  const[gameOver, setGameOver]=useState(true);

  console.log(questions);
 const startTrivia =async()=>{
  setLoading(true);
  setGameOver(false);
  const newQuestions = await fetchQuizQuestions(
    TOTAL_QUESTIONS,
    Difficulty.EASY
  );
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
    setNumber(0);
    setLoading(false);

 }
 const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{
  if(!gameOver){
    // users answer
    const answer = e.currentTarget.value; 
    //check answer against correct answer
    const correct = questions[number].correct_answer === answer;
    //Add score if answer is correct 
    if (correct) setScore (prev => prev + 1);
    //save answer in the array
    const answerObject ={
      question :questions[number].question,
      answer,
      correct,
      correctAnswer:questions[number].correct_answer,
    };
    setUserAnswers((prev) =>[...prev, answerObject]);
  }
 }
 const nextQusetion=()=>{
 
  const nextQusetion = number +1;
  if (nextQusetion === TOTAL_QUESTIONS){
    setGameOver(true);

  }
  else{
    setNumber(nextQusetion);
  }
 };

  return (
    <>
    {/* <div
        className="bg-cover relative overflow-hidden rounded-lg bg-no-repeat p-8 "
        style={{ backgroundImage: `url(${image})`, height: '1000px' }}
      > */}
      <div className='App p-36'>
        <div className='h-[700px] w-[700px] bg-gradient-to-r from-pink-200  ml-[450px] border-2 border-green-100 rounded-xl shadow-2xl'>
        <h1 className='text-6xl ui-sans-serif text-center py-12  text-orange-800 hover:text-black'>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
        <button className='start border-2 border-gray-300  font-serif text-2xl rounded-xl h-16 w-36  text-center ml-[300px] shadow-2xl mt-32 hover:bg-red-300 bg-blue-200 ' onClick={startTrivia}>Start</button>):null}
        {!gameOver ? <p className='score ml-10 text-3xl font-serif color:#fff'>Score: {score}</p>:null}<br/>
       {loading && <p className='ml-10 font-mono  text-red-500 text-xl  '>
          Loading Qusetions.......
        </p>}
        {!loading && !gameOver && (
        <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers? userAnswers[number]:undefined}
        callback={checkAnswer}
        />
        )}
        {!gameOver && !loading && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS-1 ? (
        <button className='next border-2 border-gray-200 rounded-xl ml-[300px] shadow-2xl bg-red-200 h-16 w-36 hover:bg-sky-100 mt-2' onClick={nextQusetion}>Next Question
        </button>
        ):null}
         </div>
         </div>
         {/* </div> */}
    </>
  )
}

export default App
