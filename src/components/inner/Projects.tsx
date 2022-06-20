import { createSignal, lazy } from 'solid-js';

// import Caesar from "./projects/Caesar";
// import Morse from "./projects/Morse";
// import Rot13 from "./projects/Rot13";

const Caesar = lazy(() => import("./projects/Caesar"));
const Morse = lazy(() => import("./projects/Morse"));
const Rot13 = lazy(() => import("./projects/Rot13"));

enum CryptType {
    Caesar,
    Rot13,
    Morse,
    None
    // Base,
    // Xor,
    // Hash
}

const Projects = () => {
    const [output, setOutput] = createSignal("");
    const [query, setQuery] = createSignal("");
    const [currentCrypt, setCurrentCrypt] = createSignal(CryptType.None);
    const [red, green] = ["#df5b60", "#9ce5c0"];

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        if (currentCrypt() == CryptType.Caesar) {
            setOutput(() => Caesar(query()))
        } else if (currentCrypt() == CryptType.Morse) {
            setOutput(() => Morse(query()))
        } else if (currentCrypt() == CryptType.Rot13) {
            setOutput(() => Rot13(query()))
        } else {
            setOutput("");
        }
        // setQuery("");
    }

    return (
        <>
            <h1><u>Decrypt/Encrypt</u></h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="Enter caesar cipher..."
                    required
                    onInput={(e) => setQuery(e.currentTarget.value)}
                />
                <button>submit</button>
            </form>

            <div class="crypt_buttons">
                <button
                    style={{ 'background-color': currentCrypt() == CryptType.Caesar ? red : green }}
                    onClick={() => setCurrentCrypt(CryptType.Caesar)}
                >Caesar</button>
                <button
                    style={{ 'background-color': currentCrypt() == CryptType.Morse ? red : green }}
                    onClick={() => setCurrentCrypt(CryptType.Morse)}
                >Morse</button>
                <button
                    style={{ 'background-color': currentCrypt() == CryptType.Rot13 ? red : green }}
                    onClick={() => setCurrentCrypt(CryptType.Rot13)}
                >Rot13</button>
            </div>

            <div style={{ 'padding-top': '10px;' }}>
                {output}
            </div>
        </>
    )
}

export default Projects;
