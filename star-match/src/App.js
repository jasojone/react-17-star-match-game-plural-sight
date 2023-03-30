import './App.css';
import React, { useState } from 'react';
import Game from './components/game';

// STAR MATCH - V9
// const mountNode = document.getElementById('root');

const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default StarMatch;

