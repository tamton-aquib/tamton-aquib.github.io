
let inp = document.getElementById("noice");

function thenga(obj) {
  let pushed = obj.value;

  if (pushed == '=') {
    inp.value = eval(inp.value);
  } else if (pushed == 'C') {
    inp.value = "";
  } else {
    if (pushed == '0') {
      inp.value = '0';
    } else {
      inp.value += pushed;
    }
  }
}
