
let h2 = document.getElementById('text');

let str = `Welcome-aboard!`;

for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (letter == '-') {
    letter = ' ';
  }
  setTimeout(function () {
    h2.innerText += letter;

  }, i * 100);
}
