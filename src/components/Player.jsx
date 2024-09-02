
import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEditing, setIsEditing] = useState(false);

	function handleEdit() {
		setIsEditing((editing) => !editing); // "editing" has the latest available state value

		if (isEditing) {
			onChangeName(symbol, playerName);
		}

	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let displayName = <span className="player-name">{playerName}</span>

	if (isEditing) {
		displayName = <input type="text" required value={playerName} onChange={handleChange} />
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{displayName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}