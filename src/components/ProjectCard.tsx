import "./styles/ProjectCard.css";

type CardLayout = {
    title: string,
    description: string,
    tags: string | string[],
    gif?: string
}

export const ProjectCard = ({tags, title, description}: CardLayout) => {
    return (
        <div className="projects__card">
            <span className="card__tag-container">
            {
                typeof tags === "string" ?
                <small className="card__tag">{tags}</small> :
                tags.map(tag => <small key={tag} className="card__tag">{tag}</small>)
            }
            </span>

            <div className="project-card__body">
                <div className="project-card__text">
                    <h3 className="project-card__title">{title}</h3>
                    <p className="project-card__description">{description}</p>
                </div>
            </div>
        </div>
    );
}
