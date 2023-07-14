import React, {FunctionComponent, useEffect, useState} from "react";
import Pokemon from "../models/pokemon";
// import { POKEMONS } from "../models/mock-pokemon";
import PokemonCard from "../components/pokemon-card";
import PokemonService from "../services/pokemon-service";
import { Link } from "react-router-dom";
import PokemonSearch from "../components/pokemon-search";


const PokemonList: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
     PokemonService.getPokemons().then(pokemons => 
        {
            setPokemons(pokemons)
            console.log("pokemons", pokemons);
        }) 
     console.log(pokemons);
    }, )

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons])

    return(
        <div>
            <h1 className="center">Pokedex</h1>
            <div className="container">
                <div className="row">
                    <PokemonSearch/>
                    {pokemons.map(pokemon => (
                        <PokemonCard key = {pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
                <Link className="btn-floating btn-large waves-effect waves-light red z-depht-3" style={{position: "fixed", bottom: "25px", right: "25px"}} to="/pokemon/add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}

export default PokemonList;