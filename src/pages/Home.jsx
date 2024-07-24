import Title from '../components/Title'
import PlayField from '../components/PlayField'
import Scoreboard from '../components/Scoreboard'

function Home() {

    return (
        <div className='min-h-screen w-full bg-primary text-white relative'>
            <Title></Title>
            <PlayField></PlayField>
            {/* <Scoreboard></Scoreboard> */}
        </div>
    )
}

export default Home;