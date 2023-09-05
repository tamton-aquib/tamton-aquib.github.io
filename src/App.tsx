import './App.css';
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />

                {/* Simple padding */}
                <div style={{ padding: "1rem 0" }}></div>

                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/blog" Component={Blog} />
                    {/* <Route path="/projects" Component={Projects} /> */}
                    <Route path="/contact" Component={Contact} />
                    <Route path="*" Component={NotFound} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
