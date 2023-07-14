import Pokemon from "./pokemon";

// exporte la constante pokemon qui contient les donnees necessaire pour 
// l'ensemble de notre application
export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Florizarre",
        hp: 19,
        cp: 3,
        picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        types: ["Poison ", "Plante"],
        created: new Date()
    },

    {
        id: 2,
        name: "Reptincel",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        types: ["Feu"],
        created: new Date()
    },

    {
        id: 3,
        name: "Chrystacier",
        hp: 17,
        cp: 8,
        picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
        types: ["Insecte"],
        created: new Date()
    },

    {
        id: 4,
        name: "Sablaireau",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
        types: ["Sol"],
        created: new Date()
    },

    {
        id: 5,
        name: "Melodelfe",
        hp: 16,
        cp: 2,
        picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png",
        types: ["Fee"],
        created: new Date()
    },

    {
        id: 6,
        name: "Groupix",
        hp: 30,
        cp:7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Glace"],
        created: new Date()
    },

    {
        id: 7,
        name: "Persian",
        hp: 27,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png",
        types: ["Tenebre"],
        created: new Date()
    },

    {
        id: 8,
        name: "Akwakwak",
        hp: 28,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png",
        types: ["Eau"],
        created: new Date()
    },

    {
        id: 9,
        name: "Colossinge",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png",
        types: ["Combat"],
        created: new Date()
    },

    {
        id: 10,
        name: "Raichu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
        types: ["Electrique"],
        created: new Date()
    },

    {
        id: 11,
        name: "Hypnomade",
        hp: 32,
        cp: 9,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png",
        types: ["Psy"],
        created: new Date()
    },

    {
        id: 12,
        name: "Orssatueur",
        hp: 35,
        cp: 12,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png",
        types: ["Combat"],
        created: new Date()
    }
] 