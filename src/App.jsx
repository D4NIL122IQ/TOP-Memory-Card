import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './css/style.css'
import { SiPokemon } from "react-icons/si";

import Acceuil from './components/acceuil'
import Game from './components/game.jsx';
import Lose from './components/lose.jsx';
import Win from './components/win.jsx';
import Loader from './components/loader.jsx';

function App() {
    const [score ,setScore] = useState(0)
    const [highestScore , setHighestScore] = useState(0)
    const [displayAcceuil , setDisplayAcceuil] = useState(true)
    const [displayGame , setDisplayGame] = useState(false)
    const [displayLoader , setDisplayLoader] = useState(true)
    const [displayModalLose , setDisplayModalLose] = useState(false)
    const [displayModalWin , setDisplayModalWin] = useState(false)
    const [diffic , setDiff] = useState({})

    const handleCloseLoader = ()=>{
        setDisplayLoader(false)
    }

    const handleUpadateScore =()=>{
        if (score == highestScore) {
            setScore(score+1)
            setHighestScore(highestScore+1)
        }else{
            setScore(score+1)
        }
    }
    const handleloseScore = ()=>{
        setScore(0)
    }
    const handleCloseLose = ()=>{
        setDisplayModalLose(false)
    }
    const handleOpenLose =()=>{
        setDisplayModalLose(true)
        setDisplayGame(false)
        setDisplayAcceuil(true)
    }
    const handleCloseWin = ()=>{
        setDisplayModalWin(false)
        setDisplayGame(false)
        setDisplayAcceuil(true)
    }
    const handleOpenWin =()=>{
        setDisplayModalWin(true)
    }

    const styleModal ={
        content: {
            color: 'black',
            width: '470px',
            height: "200px",
            padding: '0pxx',
            borderRadius: '0px',
            margin: '100px auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign:"center",
            backdropFilter: "blur(5px)"
          },
        }
    window.addEventListener('load', handleCloseLoader);
    return (
        <>  
            
            {displayLoader && <div className='loader'></div>}
            <header>
                <h3 onClick={()=>{setDisplayGame(false);
                                    handleloseScore();
                                    setDisplayAcceuil(true)}}>
                        <SiPokemon style={{ fontSize:"5rem"}}/>
                            Memory Card</h3>
                <div>
                    <p>Score: {score}</p>
                    <p>meilleur score: {highestScore} </p>
                </div>
            </header>

            <section>
                {displayAcceuil && <Acceuil modifDisplay={setDisplayAcceuil} modifGame={setDisplayGame} modifDiff={setDiff}/>}
            
                {displayGame && <Game difficulter={diffic.diff} limit={diffic.limit} 
                                        updatescore={handleUpadateScore} updatescoreToZero={handleloseScore} 
                                        lose={handleOpenLose} win={handleOpenWin}
                                        />}
            </section>


            <Modal isOpen={displayModalWin} onRequestClose={()=>{handleCloseWin}} ariaHideApp={false} style={styleModal} aria-labelledby="modal-modal-title">
                <Win  close={handleCloseWin}/>
            </Modal>

            <Modal isOpen={displayModalLose} onRequestClose={()=>{handleCloseLose}} ariaHideApp={false} style={styleModal}  aria-describedby="modal-modal-description">
                <Lose close={handleCloseLose} />
            </Modal>
        </>
    )
}

export default App
