import './Header.css';
import { Link } from 'solid-app-router';

const Header = () => {
    return (
        <nav class="navbar">
            <div class="logo">
                T<span class="span">@</span>J
            </div>

            <ul>
                <Link href="/">Home</Link>
                <Link class="list" href="/blog">Blog</Link>
                <Link class="list" href="/projects">Projects</Link>
            </ul>
        </nav>
    )
}

export default Header;
