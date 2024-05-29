"use client";

import Image from "next/image";
import ArrowNext from "../app/assets/arrow-next.svg";
import ArrowPrev from "../app/assets/arrow-prev.svg";
import { useState } from "react";
import Contact from "@/app/contact/page";
import { motion } from "framer-motion";

const SideBar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSideBar = () => {
		setSidebarOpen(p => !p);
	}

	return (
		<div className="absolute left-0 flex">
			{sidebarOpen &&
				<motion.div className="absolute left-[-100px] mt-[-8rem]" initial={{left: -100}} animate={{left: 0}}>
					<Contact />
				</motion.div>
			}
			<Image
				onClick={toggleSideBar}
				src={sidebarOpen ? ArrowPrev : ArrowNext}
				alt="Arrow"
				className={`absolute left-0 w-[50px] h-[50px] mt-10 cursor-pointer z-888 ${sidebarOpen && 'ml-[8rem]'}`}
			/>
		</div>
	)
};

export default SideBar;
