
const Caesar = (query: string) => {
    const range = (start: number, end: number, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)

    let letters = "abcdefghijklmnopqrstuvwxyz";
    let results: string;
    range(1, 25).map((i: number) => {
        query.split("").map((c) => {
            if (letters.includes(c)) {
                let stuff = letters[(letters.indexOf(c) + i) % 26];
                results += stuff
            } else {
                results += c
            }
        })
        results += "\n";
    });
    return results
}

export default Caesar;
