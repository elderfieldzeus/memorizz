import Title from '../components/Title'
import PlayField from '../components/PlayField'

function Home() {

    return (
        <div className='h-screen w-full bg-primary text-white'>
            <Title></Title>
            <PlayField></PlayField>
        </div>
    )
}

export default Home;