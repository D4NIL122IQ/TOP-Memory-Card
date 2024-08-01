import useSWR from "swr"
import { useState } from "react";
import Loader from "./loader";


const fetcher = url => fetch(url).then(reponse => reponse.json());

export default function Card({pokeurl , verify , index}){
    const [displayLoader , setDisplayLoader] = useState(true)

    const handleCloseLoader = ()=>{
        setDisplayLoader(false)
    }

    const {data , error} = useSWR(pokeurl , fetcher)
    if(error) {
        return(
            <div className="card error">
                <h4>Erreur lors de la recuperation de données !</h4>
            </div>
        )
    }

    if (!data) {
        return(
            displayLoader && <Loader />
        )
    }

    return(
        handleCloseLoader && 
        <div className="card" onClick={()=>{verify(index) }}>
            <img src={data.sprites.front_default} alt={data.name +" front default image"} height="190px" width="200"/>
            <hr />
            <h4>{data.name}</h4>
        </div>
    )
}