import nought from "./pictures/nought.png"
import cross from "./pictures/cross.png"
// import {setPlayers, players} from "./game_controller"
import { useState } from "react"

const PlayDisp = () => {

    const [name1, setName1] = useState("Insert Name")
    const [name2, setName2] = useState("Insert Name")

    const setPlayer1 = (event) => {
        const {value: name1 } = document.getElementById('p1Name')
        return document.getElementById('player1').innerHTML=name1;
    }

    const setPlayer2 = (event) => {
        const {value: name2 } = document.getElementById('p2Name')
        return name2
    }

    return (<div id="playerDisplay">
        <form class="nameInsert" method="get">
            <div class="nameInput">
                <h3>P1</h3>
                <input id="p1Name" type="text" placeholder="insert name" required/>
                <img src={nought} alt="nought" />
            </div>
            <div class="nameInput">
                <h3>P2</h3>
                <input id="p2Name" type="text" placeholder="insert name" required/>
                <img src={cross} alt="cross" />
            </div>
            <button id="lockInNames" onClick={() => {setName1(setPlayer1); setName2(setPlayer2)}}>Lock In Players</button>
        </form>
    </div>)
}

export default PlayDisp;