import React from 'react';

function Header() {
	return (
		<header className="header">
			<div className="logo">
				T<span className="span-red">@</span>J
			</div>
			<nav className="navbar">
				<ul className="navbar-ul">
					<li className="navbar-li">
						<a href="#">
							<img className="navbar-img" src="https://img.icons8.com/bubbles/50/fa314a/home-page.png" />
						</a>
					</li>
					<li className="navbar-li">
						<a href="#">
							<img className="navbar-img" src="https://img.icons8.com/bubbles/50/000000/about.png" />
						</a>
					</li>
					<li className="navbar-li">
						<a href="#">
							<img className="navbar-img" src="https://img.icons8.com/clouds/100/fa314a/phone.png" />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header
