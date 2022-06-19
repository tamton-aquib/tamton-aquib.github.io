import { Component, lazy } from 'solid-js';
import styles from './App.module.css';
import { Route, Router, Routes } from 'solid-app-router';

// import Home from './components/inner/Home';
// import Blog from './components/inner/Blog';
// import Projects from './components/inner/Home';

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import("./components/inner/Home"));
const Blog = lazy(() => import("./components/inner/Blog"));
const Projects = lazy(() => import("./components/inner/Projects"));

const App: Component = () => {
    return (
        <Router>
            <div class={styles.App}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
