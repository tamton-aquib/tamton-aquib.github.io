import React, { useState } from 'react'
import './RPS.css'

function RPS() {
	const [result, setResult] = useState("Click to get started!")
	const [choices, setChoices] = useState({ player: "", comp: "" })

	const compareChoices = (pc, cc) => {
		console.log(pc[0], cc[0])
		switch (pc[0] + cc[0]) {
			case "rr":
			case "pp":
			case "ss":
				return "Tie"
			case "rp":
			case "ps":
			case "sr":
				return false
			case "pr":
			case "sp":
			case "rs":
				return true
		}
	}

	const getText = (e) => {
		let playerChoice = e.target.innerHTML
		let rand = Math.random()
		let compChoice = rand < 0.33 ? "rock" : (rand > 0.66 ? "scissor" : "paper")

		setChoices({ player: playerChoice.toUpperCase(), comp: compChoice.toUpperCase() })

		let ans = compareChoices(playerChoice, compChoice)
		ans = ans == "Tie" ? "Tie" : (ans ? "Win" : "Fail")
		setResult(ans)
	}


	return (
		<div className="container">
			<div className="heading"><h1>Rock Paper Scissors</h1></div>
			<div className="idk">
				<h1 className="result">
					Result: {result}
				</h1>
				<div className="boxes">
					<div className="player-box">
						<div className="player">Player choice:<br /> {choices.player}</div>
						<button onClick={getText} className="button-choices">rock</button>
						<button onClick={getText} className="button-choices">paper</button>
						<button onClick={getText} className="button-choices">scissor</button>
					</div>
					<div className="comp-box">Computer choice:<br /> {choices.comp}</div>
				</div>
			</div>
		</div>
	)
}

export default RPS
