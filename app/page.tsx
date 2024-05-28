"use client";
import { motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
    const s = " I'm Tamton Aquib. ";
    const [currentText, setCurrentText] = useState("");

    let index = 0;

	useEffect(() => {
		let intervalId: any;
		const timeoutId = setTimeout(() => {
			intervalId = setInterval(() => {
				setCurrentText((prevText) => {
					if (prevText === s) {
						clearInterval(intervalId);
						return prevText;
					}
					index++;
					return s.slice(0, index);
				});
			}, 270);
		}, 900);
		return () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
		}
	}, [s]);

	return (
		<>

			{
				currentText ?
					<motion.div className="text-3xl flex justify-center" animate={{y: -30}}>
						Hello There!
					</motion.div>
					:
					<div className="text-3xl flex justify-center">
						Hello There!
					</div>
			}

			{
				currentText &&
					<MotionConfig transition={{ duration: 0.2 }}>
						<motion.div className="text-[0.002rem] absolute" animate={{y: 50, fontSize: '3rem'}}>
							{currentText}
						</motion.div>
					</MotionConfig>
			}

		</>
	);
}

export default Home;
