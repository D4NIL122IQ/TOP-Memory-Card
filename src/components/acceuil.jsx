import { FaGithub } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { SiPokemon } from "react-icons/si";

export default function Acceuil({modifDiff , modifDisplay , modifGame}){

    const clicked = (dif , limit)=>{
        modifDiff({diff:dif ,limit:limit })
        modifDisplay(false)
        modifGame(true)
    }

    return(
        <div className="aceuille pokeborder">
            <div>
            <h1> Bienvenue a <SiPokemon style={{ fontSize:"5rem"}}/>Memory Card</h1>
            </div>
            
            <h2 onClick={()=>{
                clicked("easy" , 3)
            }}><TbPokeball />Facile</h2>
            <h2 onClick={()=>{
                clicked("average" , 5)
            }}><TbPokeball />Moyen</h2>
            <h2 onClick={()=>{
                clicked("hard" , 10)
            }}><TbPokeball />Difficile</h2>
            <h2><FaGithub/><a href="https://github.com/D4NIL122IQ/TOP-Memory-Card/" target="_blank" rel="noopener noreferrer">Visite repo ?</a></h2>
        </div>
    )
}