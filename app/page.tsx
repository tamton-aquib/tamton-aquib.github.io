"use client";
import { useEffect, useState } from "react";

const Home = () => {
    const s = "Hello There!";
    const [currentText, setCurrentText] = useState("");

    let index = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentText((prevText) => {
                if (prevText === s) {
                    clearInterval(timer);
                    return prevText;
                }
                index++;
                return s.slice(0, index);
            });
        }, 200);
        return () => clearInterval(timer);
    }, [s]);

    return (
        <div className="flex justify-center items-center mt-[10%] text-7xl">
			{currentText}
		</div>
    );
}

export default Home;
