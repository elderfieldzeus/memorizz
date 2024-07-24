import { useState, useEffect } from 'react';
import Card from './Card';


class CardClass {
    constructor(image, id) {
        this.image = image;
        this.id = id;
    }
}

export default function PlayField() {

    const [cards, setCards] = useState([]);

    // async function getImage(id) { //FOR GIPHY API
    //     const apiKey = "5RqDk1kZSlYFDHu4eBffPpDsLHkN02b0";
    //     const types = [
    //         'rizz',
    //         'sigma',
    //         'alpha',
    //         'gyatt',
    //         'skibidi',
    //         'cringe',
    //         'jabroni',
    //         'monkey'
    //     ];

    //     let img = '';

    //     const n = types[id];

    //     try {
    //         const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=rizz`, {
    //             mode: 'cors'
    //         });

    //         const { data } = await response.json();
    //         img = data.images.original.mp4;
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }

    //     return img;
    // }

    // useEffect(() => {
    //     async function fetchImages() {
    //         const images = [];

    //         for(let i = 0; i < 8; i++) {
    //             const image = await getImage(i);
    //             images.push(image);
    //         }

    //         const newCards = images.flatMap((img, id) => {
    //             const card = new CardClass(img, id);
    //             return [card, card]; //return two types of the same card
    //         });

    //         setCards(newCards);
    //     }

    //     fetchImages();
    // }, []);

    function shuffle(array) {
        const size = array.length;
        
        for(let i = 0; i < size; i++) {
            const rand = Math.floor(Math.random() * size);
            [array[i], array[rand]] = [array[rand], array[i]];
        }
    }

    useEffect(() => {
        function getImage(id) {
            let img = "";
            switch(id) {
                case 0 : img = '/alpha.gif'; break;
                case 1 : img = '/wolf.gif'; break;
                case 2: img = '/emo.gif'; break;
                case 3: img = '/awoo.gif'; break;
                case 4: img = '/bts.gif'; break;
                case 5: img = '/sleep.gif'; break;
                case 6: img = '/run.gif'; break;
                case 7: img = '/love.gif'; break;
            }
            return img;
        }

        const images = [];

        for(let i = 0; i < 8; i++) {
            const img = getImage(i);
            images.push(img);
        }

        const newCards = images.flatMap((img, id) => {
            const card = new CardClass(img, id);
            return [card, card];
        });

        shuffle(newCards);

        setCards(newCards);
    }, []);

    return (
        <div className="w-full flex items-center justify-center">
            <div className="size-[40rem] bg-white rounded-2xl shadow-xl grid grid-cols-4 p-2 gap-2">
                {cards.map((card, i) => {
                    return (
                        <Card key = {i} card = {card}></Card>
                    )
                })}
            </div>
        </div>
    )
}