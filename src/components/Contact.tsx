import "./styles/Contact.css";

export const Contact = () => {
    return (
        <>
            <div className="contact__container">
                <a target="_blank" href="https://discord.com/users/845674119391477820">
                    <i className="fab fa-discord contact__icon"></i>
                </a>
                <a target="_blank" href="https://github.com/tamton-aquib">
                    <i  className="fab fa-github contact__icon"></i>
                </a>
                <a target="_blank" href="https://twitter.com/tamton_aquib">
                    <i  className="fab fa-twitter contact__icon"></i>
                </a>
                <a target="_blank" href="https://dev.to/tamtonaquib">
                    <i  className="fab fa-dev contact__icon"></i>
                </a>
            </div>
        </>
    );
}
