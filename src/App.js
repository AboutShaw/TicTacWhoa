import './App.css';
import Header from './header';
import PlayDisp from './player_displayer';
import TurnDisplay from './turn_diplay';
import GameBoard from './game_board';
import Reset from './reset';

function App() {
  return (
    <div id="appBody">
      <Header />
      <PlayDisp />
      <TurnDisplay />
      <GameBoard />
      <Reset />
    </div> 
  )
}

export default App;