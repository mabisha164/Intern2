import React from "react";

const Online = () => {
  return (
    <div>
      <h1 className="text-6xl  mt-8 ml-[80px]">Online Exam</h1>
      <div>
        <h1 className="text-3xl text-center">
          Are you ready for online exam practice?
        </h1>
        <div className="text-white text-2xl flex justify-center align-middle items-center ml-[800px] mt-8 h-[60px] w-[200px] bg-gradient-to-t from-blue-900 via-dark-300 to-indigo-300 rounded-2xl">
          <button type="button">Start Exam</button>
        </div>
        <div className="ml-[300px] bg-gradient-to-t from-blue-900 via-dark-300 to-indigo-300 mt-8  h-[380px] w-[1000px] border-[2px] border-white rounded-2xl font-poppins">
          <h1 className="text-3xl ml-10 my-4 mt-[20px]">Instructions:</h1>
          <ul className="list-disc ml-[90px] text-xl">
            <li>You will get 30 minute to solve 20 questions.</li>
            <li>You must get 10 out of 20 to pass exam.</li>
            <li>
              All the question will be objective(question with answer options)
              <br />
              no any subjective questions included.
            </li>
            <li>
              You must clearly tick in the answer(Tips: better not to leave any
              questions).
            </li>
            <li>
              You must carry necessary thing for exam (pen, your citizenship
              card <br />
              and payment bill).
            </li>
            <li>
              Other necessary information and process are told before exam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Online;
