import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {MainLayout} from "./Layouts/MainLayout";
import {PokemonPage} from "./Pages/PokemonPage/PokemonPage";
import {AllPokemonPage} from "./Pages/AllPokemonsPage/AllPokemonPage";
import {NotFoundPage} from "./Pages/NotFoundPage/NotFoundPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Navigate to={"pokemon"}/>}/>
                <Route path="pokemon/:pokemonId" element={<PokemonPage/>}/>
                <Route path="pokemon" element={<AllPokemonPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
