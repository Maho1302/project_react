import React, {useEffect, useState} from 'react';
import {pokemonService} from "../../services/pokemon.service";
import {PokemonCard} from "../PokemonCard/PokemonCard";

// const AllPokemon = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };

const AllPokemon = () => {
    const [allPokemon, setAllPokemon] = useState(null);

    useEffect( () => {
        pokemonService.getAll().then(({data}) => setAllPokemon(data))
    }, []);
    console.log(allPokemon);

    return (
        <div>
            {allPokemon ? allPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>) : "Loading.."}
        </div>
    );
}

export {AllPokemon};