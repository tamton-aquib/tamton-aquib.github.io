"use client";

import { motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";

const Home = () => {
    const s = " I'm Tamton Aquib. ";
    const [currentText, setCurrentText] = useState("");
	const [showSideArrow, setShowSideArrow] = useState(false);

    let index = 0;

	useEffect(() => {
		const sidebarShowArrowId = setTimeout(() => setShowSideArrow(true), 3500);

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
			}, 200);
		}, 300);
		return () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
			clearTimeout(sidebarShowArrowId);
		}
	}, [s]);

	return (
		<>

			{
				showSideArrow &&
					<motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
						<SideBar />
					</motion.div>
			}

			<motion.div className="text-3xl" animate={{y: -30}}>
				Hello There!
			</motion.div>

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
