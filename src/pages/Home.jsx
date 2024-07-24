import { useState } from 'react'
import Title from '../components/Title'
import PlayField from '../components/PlayField'
import Scoreboard from '../components/Scoreboard'

function Home() {

    const [score, setScore] = useState(0);
    

    return (
            <div className={`min-h-screen w-full ${score === 8 ? 'bg-green-500' : 'bg-primary'} text-white relative`}>
            <Title></Title>
            <Scoreboard score = {score} ></Scoreboard>
            <PlayField setScore = {setScore} ></PlayField>  
        </div>
    )
}

export default Home;