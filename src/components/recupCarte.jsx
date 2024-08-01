import useSWR from "swr"

const fetcher = url => fetch(url).then(reponse => reponse.json());

export default function Card({pokeurl , verify , index}){
    const {data , error} = useSWR(pokeurl , fetcher)
    if(error) {
        return(
            <div className="card error">
                <h4>Erreur lors de la recuperation de données</h4>
            </div>
        )
    }

    if (!data) {
        return(
            <div className="card loader">
                <h4>Chargement...</h4>
            </div>
        )
    }

    return(
        <div className="card" onClick={()=>{verify(index)}}>
            <img src={data.sprites.front_default} alt={data.name +" front default image"} />
            <h4>{data.name}</h4>
        </div>
    )
}