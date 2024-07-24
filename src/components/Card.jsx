import '/src/styles/custom.css';

export default function Card( {card} ) {

    function clicked(e) {
        if(e.currentTarget.classList.contains('flipped')) {
            e.currentTarget.classList.remove('flipped');
        }
        else {
            e.currentTarget.classList.add('flipped');
        }
    }

    return (
        <div onClick={clicked} className="flip-card text-black hover:cursor-pointer">
            <div className="flip-card-inner bg-gray-500 rounded-xl p-1 flex flex-col justify-center items-center">
                <div className="flip-card-front rounded-xl bg-gray-500">
                </div>
                <div className="flip-card-back w-full h-full rounded-xl overflow-hidden bg-gray-500">
                    <img src={card.image} alt={card.id} className="overflow-hidden object-cover h-full w-full rounded-xl" />
                </div>
            </div>
        </div>
    )
}