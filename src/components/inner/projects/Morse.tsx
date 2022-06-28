const map = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", "=": "-...-", ";": "-.-.-.", ":": "-...", "/": "-..-.", "–": "-....-", "'": ".-.", "”": ".-..-.", "+": ".-.-.", "*": "-..-", "@": ".-.-." }

const decode = (s: string) => { }
const encode = (s: string) => {
    let result: string;
    s.split("").map((c: string) => {
        result += map[c.toUpperCase()];
    })
}

const Morse = (query: string) => {
    let isMorse = false;
    if (query.split("").filter((c) => ["-", ".", " "].includes(c)).length == query.length) {
        isMorse = true;
    }
    isMorse ? decode(query) : encode(query)
    return "Morse: " + query
}

export default Morse;
