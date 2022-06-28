
const Rot13 = (query: string) => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let result: string;

    query.split("").map((c) => {
        if (letters.includes(c)) {
            let stuff = letters[(letters.indexOf(c) + 13) % 26];
            console.log(stuff);
            result += stuff
        } else {
            result += c
        }
    })

    return "Rot13: " + result
}

export default Rot13;
