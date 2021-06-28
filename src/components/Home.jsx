
import React, { useState, useEffect, useRef } from 'react';
import './Home.css'

const Home = () => {
	const [currentText, setCurrentText] = useState("")
	const index = useRef(0)
	const text = "Hello!"

	useEffect(() => {
		setTimeout(() => {
			setCurrentText((v) => v + text.charAt(index.current))
			index.current++
		}, 200)
	}, [currentText, text])

	return (
		<div className="home_container">
			<h1>
				{currentText}
			</h1>
		</div>
	);
}

export default Home

