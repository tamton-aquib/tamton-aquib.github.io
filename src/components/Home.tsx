import { useEffect, useState } from "react";

export const Home = () => {
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
        <h1 style={{
            marginTop: '30vh'
        }}>{currentText}</h1>
    );
}
