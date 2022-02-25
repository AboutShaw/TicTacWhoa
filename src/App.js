import "./App.css";
import Header from "./header";
import PlayDisp from "./player_displayer";
import GameBoard from "./game_board";
import Reset from "./reset";
import { useState } from "react";

function App() {
  let [name1, setName1] = useState("");
  let [name2, setName2] = useState("");
  let [activePlayer, setActivePlayer] = useState("Name");
  return (
    <div id="appBody">
      <Header />
      <PlayDisp
        setName1={setName1}
        setName2={setName2}
        name1={name1}
        name2={name2}
        setActivePlayer={setActivePlayer}
      />
      <GameBoard
        name1={name1}
        name2={name2}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />
      <Reset />
    </div>
  );
}

export default App;
