import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {

    return (
		<div className="flex justify-around p-5 ps-[20vw] pe-[20vw] mt-[10%]">
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] discord-icon" icon={faDiscord} />
				<div className="flex"><span className="text-[#c8555a]">@</span>_gilfoyle_</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] github-icon" icon={faGithub} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamton-aquib</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] twitter-icon" icon={faTwitter} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamton_aquib</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] dev-icon" icon={faDev} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamtonaquib</div>
			</div>
		</div>
    );
};

export default Contact;
