import { useState, useEffect } from 'react'

export default function Scoreboard({ score = 0 }) {

    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        string: '0:00'
    });

    useEffect(() => {
        const key = setInterval(() => {
            setTime((prev) => {
                let newSeconds = prev.seconds + 1;
                let newMinutes = prev.minutes;

                if(newSeconds == 60) {
                    newMinutes++;
                    newSeconds = 0;
                }

                let newString = (newSeconds < 10) ? `${newMinutes}:0${newSeconds}` : `${newMinutes}:${newSeconds}`;

                return {
                    seconds: newSeconds,
                    minutes: newMinutes,
                    string: newString
                }
                
            });
        }, 1000);

        return () => {
            clearInterval(key);
        }
    }, []);
    
    return (
        <div className='sticky top-20 right-20 bg-white text-black w-72 h-48'>
            <h1>{score}/8</h1>
            <h1>{time.string}</h1>
        </div>
    )
}   