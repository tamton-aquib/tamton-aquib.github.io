import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {

    return (
		<div className="flex justify-around p-5 ps-[20vw] pe-[20vw] mt-[10%]">
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] transition duration-[0.5s] ease-in-out hover:rotate-[-360deg]" icon={faDiscord} />
				<div className="flex"><span className="text-[#c8555a]">@</span>_gilfoyle_</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] transition duration-[0.5s] ease-in-out rotate__icon" icon={faGithub} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamton-aquib</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] transition duration-[0.3s] ease-in-out hover:rotate-[20deg]" icon={faTwitter} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamton_aquib</div>
			</div>
			<div className="flex flex-col items-center">
				<FontAwesomeIcon className="w-[4rem] h-[4rem] transition duration-[0.4s] ease-in-out hover:scale-[1.1]" icon={faDev} />
				<div className="flex"><span className="text-[#c8555a]">@</span>tamtonaquib</div>
			</div>
		</div>
    );
};

export default Contact;
