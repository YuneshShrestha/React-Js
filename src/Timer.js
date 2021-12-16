import React,{useState,useEffect,useRef} from 'react'


function Timer() {
    let [timer, setTimer] = useState(0);
    useEffect(() => {
       const interval = setInterval(()=>{
           setTimer(timer + 1);
       },1000);
       return ()=>clearInterval(interval);
    },[timer])
    return (
        <div>
            Timer: {timer}
            <button>Stop</button>
        </div>

    )
}

export default Timer
