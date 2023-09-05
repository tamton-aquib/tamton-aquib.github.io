import { ProjectCard } from "./ProjectCard";
import "./styles/Projects.css";

export const Projects = () => {
    return (
        <>
            <div className="projects">
                <ProjectCard
                    title="duck.nvim"
                    description="A duck plugin that waddles around"
                    tags={["neovim"]}
                />
                <ProjectCard
                    title="zone.nvim"
                    description="A screensaver plugin for neovim"
                    tags={["neovim", "fun"]}
                />
            </div>
        </>
    );
}
