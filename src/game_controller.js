import React from "react";
import PlayDisp from "./player_displayer";

const players = [];

// player1 player2 puts name in and locks in
const setPlayers = (event) => {
    const {value: nameP1} = document.getElementById('p1Name')
    const {value: nameP2} = document.getElementById('p2Name')
    const players = [nameP1, nameP2];
    return players;
}


// start button goes from red to green
// const setUp = (event) => {
//     event.preventDefault()
//     console.log("here")
//     console.log(nameP1, nameP2)
//     return nameP1
// }

// game randomly assigns first turn and displays in turn display

// gameboard 'activates' and when selected player choses a button uses the correct token

// players takes turns pressing game board buttons until a win criteria is matched

// winners message displayed in turn display

// game can be reset with reset button

// extras upon win game board replaced with winning picture and player name

export {setPlayers, players}