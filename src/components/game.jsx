import { useState, useEffect } from "react"
import Card from "./recupCarte.jsx"

import { getRandomNumber } from "../hook/getRandm.js"

export default function Game({difficulter , limit, updatescore , endGame , lose , win, updatescorelose}){

    const [pokemon , setPokemon] = useState([])
    const [displayLoader , setDisplayLoader] = useState(true)

    const handleStopLoading = ()=>{
        setDisplayLoader(false)
    }
    useEffect( ()=>{
        const start = getRandomNumber()
        const getPokemone = async ()=>{ 
            const rep = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`)
            const  poke = await rep.json()
            const pokeupdate = poke.results.map((pk)=>{return {...pk, clicked:false}})
            setPokemon(pokeupdate)
            handleStopLoading()
        }
       
        return () => getPokemone() 
    }
    ,[difficulter, limit])

    const mixArray = ()=>{
        setPokemon(()=>{
            let arr = [...pokemon];
        
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        
             return arr;
        })
    }

    const verifyGame = (index)=>{
        const temp = [...pokemon]
        if(!temp[index].clicked){
            updatescore()
            temp[index].clicked = true
            setPokemon(temp)
            mixArray()
        }else{
            updatescorelose()
            lose()
        } 
    }

    useEffect(()=>{
        const verify = ()=>{
            console.log("hello")
        }
        return ()=> verify()
    },[pokemon])



    return (
        <div className="cardContainer">
            {displayLoader && <Load />}
            {pokemon.map((pk, i)=>{
                return <Card pokeurl={pk.url} mixed={mixArray} index={i} verify={verifyGame}  key={pk.name}/>
            })}
        </div>
    )
}