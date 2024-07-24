import { useState, useEffect } from 'react'
import '/src/styles/svg.css';

export default function Scoreboard({ score = 0 }) {

    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        string: '0:00'
    });

    const [won, setWon] = useState(false);

    useEffect(() => {
        if(!won) {
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
        }
    }, [won]);

    useEffect(() => {
        if(score === 8) {
            setWon(true);
        }
    }, [score]);
    
    return (
        <div className='flex text-black w-full items-center justify-center my-2'>
            <div className={`flex bg-white w-[34rem] items-center justify-between rounded-xl px-5 ${score === 8 ? 'text-green-500' : 'text-primary'} shadow-xl`}>
                <h1 className='text-xl'>{time.string}</h1>
                <h1 className={`text-3xl text-white font-bold ${score === 8 ? 'bg-green-500' : 'bg-primary'} h-full px-2`}>{score}/8</h1>
                <button className={`restart--svg size-8 ${score === 8 ? 'bg-green-500' : 'bg-primary'}`} onClick={() => window.location.href = '/'}></button>
            </div>
        </div>
    )
}   