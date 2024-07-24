import '/src/styles/custom.css';

export default function Card( {card, game, setGame} ) {
    async function runGame() {
        const result = await game.checkGuess(card.id);
        setGame(game);

        return result;
    }

    function wait(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }

    async function clicked(e) {
        const flip = e.currentTarget;
        if(!flip.classList.contains('flipped') && !flip.classList.contains('locked')) {
            flip.classList.add('flipped');
            if(await runGame(e)) {
                if(!flip.classList.contains('locked')) {
                    flip.classList.add('locked');
                }
                console.log('locked');
            }
            else {
                await wait(800);
                flip.classList.remove('flipped');
            }
        }
    }

    return (
        <div onClick={clicked} className="flip-card text-black hover:cursor-pointer">
            <div className="flip-card-inner bg-gray-400 rounded-xl p-1 flex flex-col justify-center items-center">
                <div className="flip-card-front rounded-xl bg-gray-400">
                </div>
                <div className="flip-card-back w-full h-full rounded-xl overflow-hidden bg-gray-400">
                    <img src={card.image} alt={card.id} className="overflow-hidden object-cover h-full w-full rounded-xl" />
                </div>
            </div>
        </div>
    )
}