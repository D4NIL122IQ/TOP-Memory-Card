import { FaGithub } from "react-icons/fa";

export default function Acceuil({modifDiff , modifDisplay , modifGame}){

    const clicked = (dif , limit)=>{
        modifDiff({diff:dif ,limit:limit })
        modifDisplay(false)
        modifGame(true)
    }

    return(
        <div className="aceuille">
            <h3 onClick={()=>{
                clicked("easy" , 3)
            }}>Facile</h3>
            <h3 onClick={()=>{
                clicked("average" , 5)
            }}>Moyen</h3>
            <h3 onClick={()=>{
                clicked("hard" , 10)
            }}>Difficile</h3>
            <h3><FaGithub/><a href="https://github.com/D4NIL122IQ/TOP-Memory-Card/" target="_blank" rel="noopener noreferrer">Visit repo</a></h3>
        </div>
    )
}