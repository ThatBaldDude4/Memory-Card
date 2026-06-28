import { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router";
import { pokemonArray, shuffle } from './Game';
import getPokemonData from './pokemonApi';
import Game from './Game';

export default function RouterComponent() {
    const [data, setData] = useState([]);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const params = useParams();

    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            const shuffled = shuffle(data);
            setData(shuffled);
        }).catch((err) => {
            console.error('Failed to retrieve data', err);
        })
    }, []);

    return (
        <div>
            <Game/>
            <Outlet />
        </div>
    )
}

// need to wire system so that state is preserved between screens