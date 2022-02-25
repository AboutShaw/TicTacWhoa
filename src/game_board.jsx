import { useState } from 'react';
import nought from "./pictures/nought.png";
import cross from "./pictures/cross.png";
import whoa from "./pictures/whoa.jpg";




const GameBoard = ({name1, name2, activePlayer, setActivePlayer}) => {
    const [image, setImage] = useState({b1: whoa, b2: whoa, b3: whoa, b4: whoa, b5: whoa, b6: whoa, b7: whoa, b8: whoa, b9: whoa});
    const [turnCounter, setTurnCounter] = useState(0);
    // const [disabled, setDisabled] = useState(false);
   
const selectToken = (event) => {
    const name = event.target.name
    if (turnCounter % 2 !== 0) {
        setImage(prevObject => {
            const theObj = {...prevObject}
            theObj[name] = nought
            return theObj;
        })
        setActivePlayer(name1)
        setTurnCounter(prevCounter => {
            return prevCounter+1
        })
    }
    else {setImage(prevObject => {
        const theObj = {...prevObject}
        theObj[name] = cross
        return theObj;
    })
    setActivePlayer(name2)
    setTurnCounter(prevCounter => {
        return prevCounter+1
    })
    }
};

/*
Winning Outcomes =
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]
[0, 3, 6]
[1, 4, 7]
[2, 5, 8]
[0, 4, 8]
[2, 4, 6]
*/
    return (
        <div>
            <div id='turnDisplay'>
                <h3 id="display">Take your turn: {activePlayer}</h3>
            </div>
            <div id="game">
                <div id="row1">
                    <img name='b1' onClick={selectToken} src={image.b1} alt='whoa picture'/>
                    <img name='b2' onClick={selectToken} src={image.b2} alt='whoa picture'/>
                    <img name='b3' onClick={selectToken} src={image.b3} alt='whoa picture'/>
                </div>
                <div id="row2">
                    <img name='b4' onClick={selectToken} src={image.b4} alt='whoa picture'/>
                    <img name='b5' onClick={selectToken} src={image.b5} alt='whoa picture'/>
                    <img name='b6' onClick={selectToken} src={image.b6} alt='whoa picture'/>
                </div>
                <div id="row3">
                    <img name='b7' onClick={selectToken} src={image.b7} alt='whoa picture'/>
                    <img name='b8' onClick={selectToken} src={image.b8} alt='whoa picture'/>
                    <img name='b9' onClick={selectToken} src={image.b9} alt='whoa picture'/>
                </div>
            </div>
        </div>
    )
}

export default GameBoard;