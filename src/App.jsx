import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './css/style.css'

import Acceuil from './components/acceuil'
import Game from './components/game.jsx';
import Lose from './components/lose.jsx';
import Win from './components/win.jsx';

function App() {
    const [score ,setScore] = useState(0)
    const [highestScore , setHighestScore] = useState(0)
    const [displayAcceuil , setDisplayAcceuil] = useState(true)
    const [displayGame , setDisplayGame] = useState(false)
    const [displayModalLose , setDisplayModalLose] = useState(false)
    const [displayModalWin , setDisplayModalWin] = useState(false)
    const [diffic , setDiff] = useState({})

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

    const styleModal ={}

    return (
        <>
            <header>
                <h3>Memory Card</h3>
                <div>
                    <p>Score: {score}</p>
                    <p>meilleur score: {highestScore} </p>
                </div>
            </header>

            <section>
                {displayAcceuil && <Acceuil modifDisplay={setDisplayAcceuil} modifGame={setDisplayGame} modifDiff={setDiff}/>}
            
                {displayGame && <Game difficulter={diffic.diff} limit={diffic.limit} 
                                        updatescore={handleUpadateScore} updatescorelose={handleloseScore} 
                                        lose={handleOpenLose} win={handleOpenWin}
                                        />}
            </section>

            <Modal isOpen={displayModalWin} onRequestClose={()=>{handleCloseWin}} ariaHideApp={false}>
                <Win close={handleCloseWin}/>
            </Modal>

            <Modal isOpen={displayModalLose} onRequestClose={()=>{handleCloseLose}} ariaHideApp={false}>
                <Lose close={handleCloseLose}/>
            </Modal>
        </>
    )
}

export default App
