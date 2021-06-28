
import React from 'react';
import './Contact.css'

const About = () => {
	return (
		<ul className="social_links_ul">
			<li className="social_links_li">
				<a target="_blank" href="https://discord.com/users/845674119391477820">
					<img
						src="/images/discord.svg"
						width="40"
					/>
				</a>
			</li>
			<li className="social_links_li">
				<a target="_blank" href="https://github.com/tamton-aquib">
					<img
						src="/images/github.png"
						width="45"
					/>
				</a>
			</li>
			<li className="social_links_li">
				<a target="_blank" href="https://twitter.com/tamton_aquib">
					<img
						src="https://img.icons8.com/color/50/000000/twitter-circled.png"
						width="45"
					/>
				</a>
			</li>
			<li className="social_links_li">
				<a target="_blank" href="https://dev.to/tamtonaquib">
					<img
						src="https://img.icons8.com/color/48/000000/devpost.png"
						width="45"
					/>
				</a>
			</li>
		</ul>
	);
}

export default About

