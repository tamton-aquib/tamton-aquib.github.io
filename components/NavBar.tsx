import Link from "next/link";
import "./styles/NavBar.css";

const NavBar = () => {

	return (
		<nav className="navbar">
			<Link href="/">
				<p
					className="navbar__logo"
					>
					T
					<span className="navbar__redpart">@</span>
					J
				</p>
			</Link>
			<ul className="navbar__right">
				{/* <li><Link className="navbar__items" to="/">Home</Link></li> */}
				<li><Link className="navbar__items" href="/blog">Blog</Link></li>
				{/* <li><Link className="navbar__items" to="/projects">Projects</Link></li> */}
				<li><Link className="navbar__items" href="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}

export default NavBar;
