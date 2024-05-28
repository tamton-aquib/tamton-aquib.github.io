"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";

const Contact = () => {

	return (
		<MotionConfig transition={{duration: 0.8}}>
			<motion.div className="flex justify-evenly w-[100%] ps-3 pe-3 right-0 opacity-0" animate={{opacity: 1}}>
				<Link href="https://discord.com/users/845674119391477820" className="flex flex-col items-center">
					<FontAwesomeIcon className="w-[4rem] h-[4rem] discord-icon" icon={faDiscord} />
					<div className="flex"><span className="text-[#c8555a]">@</span>_gilfoyle_</div>
				</Link>
				<Link href="https://github.com/tamton-aquib" className="flex flex-col items-center">
					<FontAwesomeIcon className="w-[4rem] h-[4rem] github-icon" icon={faGithub} />
					<div className="flex"><span className="text-[#c8555a]">@</span>tamton-aquib</div>
				</Link>
				<Link href="https://x.com/tamton_aquib" className="flex flex-col items-center">
					<FontAwesomeIcon className="w-[4rem] h-[4rem] twitter-icon" icon={faTwitter} />
					<div className="flex"><span className="text-[#c8555a]">@</span>tamton_aquib</div>
				</Link>
				<Link href="https://dev.to/tamtonaquib" className="flex flex-col items-center">
					<FontAwesomeIcon className="w-[4rem] h-[4rem] dev-icon" icon={faDev} />
					<div className="flex"><span className="text-[#c8555a]">@</span>tamtonaquib</div>
				</Link>
			</motion.div>
		</MotionConfig>
	);
};

export default Contact;
