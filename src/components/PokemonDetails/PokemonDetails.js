import React from 'react';

const PokemonDetails = ({pokemon}) => {
    const {id, name} = pokemon
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {PokemonDetails};