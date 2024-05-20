import { useNavigate } from "react-router-dom";
import "./styles/Card.css";

type CardLayout = {
    title: string,
    description: string,
    tags: string | string[],
    link: string
}

export const Card = ({tags, title, description, link}: CardLayout) => {
    const navigate = useNavigate();

    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div className="card" onClick={() => navigate(`/blog/${link}`)}>
            <span className="card__date">
            {
                typeof tags === "string" ? 
                <small className="card__date">{tags}</small> :
                tags.map(tag => <small className="card__date">{tag}</small>)
            }
            </span>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
        </div>
    );
}
