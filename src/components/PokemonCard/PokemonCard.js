import React from 'react';
import {Link} from "react-router-dom";

// const PokemonCard = ({pokemon}) => {
//     const {id, name} = pokemon;
//     return (
//         <div>
//             {id} {name}
//         </div>
//     );
// };
//
// export {PokemonCard};

const PokemonCard = ({pokemon, pokemon: {id, name}}) => {
return (
    <div>
        {id} {name}
        <Link to={id.toString()}>
            <button>More Information</button>
        </Link>
    </div>
)
}

export {PokemonCard};