import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'

function App() {

	return (
		<Router>
			<Header />
			<div className="App">
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>
	)
}

export default App
