import { createSignal } from "solid-js";

const Home = () => {
    const [count, setCount] = createSignal("");
    const text = "Hello There!"
    let index = 0;

    const interval = setInterval(() => setCount((c) => {
        if (text.length == 0) clearInterval(interval);

        let current_text = c + text.charAt(index);
        index++;

        return current_text;
    }), 100);

    return (
        <h1 class="nice">{count}</h1>
    )
}

export default Home;
