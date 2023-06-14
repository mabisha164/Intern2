import React,{useState,useEffect} from 'react';


    const Clock = () => {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
          return () => {
            clearInterval(timer);
          };
        }, []);
        const options={
          month:'long',
          day:'numeric',
          year:'numeric',
        };
      
        return (
          <div className="clock">
           {/* <h3>June:</h3> */}
           <h2> <p>{time.toLocaleDateString(undefined,options)}</p></h2>
          </div>
        );
      };
  

export default Clock
