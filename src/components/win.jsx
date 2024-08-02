import { FaGithub } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";

 export default function Win({close }){
    return (
        <div className="endgame pokeborder win">
            <h2>Vous avez remporter la partie BRAVO !!</h2>
            <div className="select">
                <h3 onClick={close}><TbPokeball/>Aceuille ?</h3>
                <h3><FaGithub/><a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer">Github ?</a></h3>
            </div>
           
        </div>
    )
 }