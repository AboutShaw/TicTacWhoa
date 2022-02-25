import nought from "./pictures/nought.png"
import cross from "./pictures/cross.png"



const PlayDisp = ({setName1, setName2, name1, name2, setActivePlayer}) => {



    
    const handleChange1 = (event) => {
        setName1(event.target.value)
    }
    const handleChange2 = (event) => {
        setName2(event.target.value)
    }

    return (<div id="playerDisplay">
        <div className="nameInsert">
            <div className="nameInput">
                <h3>P1</h3>
                <input id="p1Name" type="text" placeholder="Insert Name" value={name1} onChange={handleChange1} required/>
                <img src={cross} alt="cross" />
            </div>
            <div className="nameInput">
                <h3>P2</h3>
                <input id="p2Name" type="text" placeholder="Insert Name" value={name2} onChange={handleChange2} required/>
                <img src={nought} alt="nought" />
            </div>
            <button id="lockInNames" onClick={() => {setActivePlayer(name1)}}>Lock In Players</button>
        </div>
    </div>)
}

export default PlayDisp;