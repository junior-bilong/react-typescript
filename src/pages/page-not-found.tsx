import React, {FunctionComponent} from "react";
import { Link } from "react-router-dom";


const PageNotFound: FunctionComponent = () => {
    return (
        <div className="center">
            <img src= "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="" />
            <h1>Hey cette page n'existe pas !</h1>
            <Link to='/' className="waves-effect waves-teal btn-flat">
                Veuilez retourner a la page d'acceuil
            </Link>
        </div>
    )
}

export default PageNotFound;