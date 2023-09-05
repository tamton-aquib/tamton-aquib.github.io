import "./styles/Card.css";

type CardLayout = {
    title: string,
    description: string,
    tags: string | string[]
}

export const Card = ({tags, title, description}: CardLayout) => {
    return (
        <div className="card">
            <span className="card__date">
            {
                typeof tags == "string" ? 
                <small className="card__date">{tags}</small> :
                tags.map(tag => <small className="card__date">{tag}</small>)
            }
            </span>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
        </div>
    );
}
