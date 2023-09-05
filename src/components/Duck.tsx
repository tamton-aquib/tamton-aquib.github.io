import { useEffect, useRef, useState } from 'react';
import duckGif from "../assets/duck.gif";

const STEPS = 1.5; // steps to take in an interval
const SPEED = 150; // lower the faster

const Duck = () => {
    let diff = {x: STEPS, y: STEPS};
    const [co, setCo] = useState<{x: number, y: number}>({x: 500 ,y: 500});
    const pos = useRef<number>();
    const [score, setScore] = useState<number>(0);

    const clickHandler = () => {
        setScore((score) => score+1);
    }

    useEffect(() => {
        pos.current = setInterval(() => {

            for (const _ of [1, 2]) {
                setCo((c) => ({x: c.x + diff.x, y: c.y + diff.y}));
            }

            diff.x = Math.random() < 0.5 ? -(STEPS) : STEPS;
            diff.y = Math.random() < 0.5 ? -(STEPS) : STEPS;

            return () => clearInterval(pos.current);
        }, SPEED)
    }, []);

    return (
        <>
            <div style={{
                top: co.x + 17,
                left: co.y + 17,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                position: 'absolute'
            }} onClick={clickHandler}>
                <img src={duckGif} width={35} height={35} />
            </div>
            <div className="score">{score != 0 ? `SCORE: ${score}` : null}</div>
        </>
    )
}

export default Duck;
