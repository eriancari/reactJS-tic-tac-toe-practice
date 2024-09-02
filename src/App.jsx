import { useState } from "react";

import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);
  const [hasWinner, setHasWinner] = useState(false);

  function handleSelectSquare(rowIdx, colIdx) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {square: {row: rowIdx, col: colIdx}, player: currentPlayer},
        ...prevTurns];

        return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
