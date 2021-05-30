import React, { useState } from 'react'
import './App.css'

function App() {
	const [heading, setHeading] = useState({ text: "Closed for renovation.", count: 0 })
	const [settings, setSettings] = useState({ bg: "#282c34", align: "left" })

	function handleClick() {
		let new_count = heading.count++
		if (heading.count >= 3) {
			setHeading({
				text: "Dont you have anything else to do? 🌝",
				count: new_count
			})
		}
		setSettings({
			bg: settings.bg == "#282c34" ? "#dddddd" : "#282c34",
			align: settings.align == "left" ? "right" : "left"
		})
	}

	return (
		<div className="App" style={{
			backgroundColor: settings.bg,
		}}>

			<header className="App-header">
				<h1>{heading.text}</h1>
			</header>

			<div className="button-box" style={{
				textAlign: settings.align
			}}>
				<button onClick={handleClick} className="button" style={{
					backgroundColor: settings.bg
				}}></button>
			</div>

		</div>
	)
}

export default App
