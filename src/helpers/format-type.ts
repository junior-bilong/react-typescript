const formatType = (type: string): string => {
    let color: string;

    switch (type) {
        case  "Plante":
            color ="green lighten-1"
            break;
        case "Feu" :
            color = "red lighten-1"
            break;
        case "Insecte" :
            color = "brown lighten-1"
            break;
        case "Sol" :
            color = "brown lighten-1"
            break;
        case "Fee" :
            color = "pink lighten-4";
            break;
        case "Tenebre" :
            color = "grey lighten-3"
            break;
        case "Eau" :
            color = "blue lighten-1"
            break;
        case "Combat" :
            color = "deep-orange"
            break;
        case "Electrique" :
            color = "yellow lighten-1"
            break;
        case "Psy" :
            color = "deep-purple darken-2"
            break;
        default :
           color = ""    
        break;  
    }

    return `chip ${color}`;

}

export default formatType;