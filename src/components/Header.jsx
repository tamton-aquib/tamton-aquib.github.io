import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header className="header">
			<div className="logo">
				T<span className="span-red">@</span>J
			</div>
			<nav className="navbar">
				<ul className="navbar-ul">
					<li className="navbar-li">
						<Link to="/">
							<img className="navbar-img" src="https://img.icons8.com/bubbles/50/fa314a/home-page.png" />
						</Link>
					</li>
					<li className="navbar-li">
						<Link to="/about">
							<img className="navbar-img" src="https://img.icons8.com/bubbles/50/000000/about.png" />
						</Link>
					</li>
					<li className="navbar-li">
						<Link to="contact">
							<img className="navbar-img" src="https://img.icons8.com/clouds/100/fa314a/phone.png" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header
