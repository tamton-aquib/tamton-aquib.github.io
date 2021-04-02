let opArray = ["+", "-", "x", "/"]
let numbers = "0123456789".split("");

const do_ans = (list, op) => {
    let n1 = parseFloat(list[0]);
    let n2 = parseFloat(list[1]);

    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case 'x':
            return n1 * n2;
        case '/':
            return n1 / n2;
    }
}
let main_op;


document.addEventListener('click', (e) => {
    let op = null;
    let count = 0;
    let currentKey = e.target.innerText;
    let currentInputvalue = document.querySelector('#input').value;

    if (currentKey == "C"){
        document.querySelector('#input').value = "";
        return;
    }

    if (currentKey == "=") {

        for (main_op of opArray) {
            if (currentInputvalue.includes(main_op)) {
                op = main_op;
                count++;
            }
        }

        // if (!count) {
            // currentInputvalue = currentInputvalue;
            // return;
        // }

        let op_numbers = currentInputvalue.split(op);

        let answer = do_ans(op_numbers, op);

        if (count == 0)
            currentInputvalue = currentInputvalue;

        if (!op || !count || answer == undefined) {
            console.log("only binary numbers supported for now!");
            return;
        }
        document.querySelector('#input').value = answer;

    } else if (numbers.includes(currentKey) || opArray.includes(currentKey)){
        document.querySelector('#input').value += currentKey;
    }

});
