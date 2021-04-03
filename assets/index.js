
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

const menu = document.querySelector('.but');
const nav = document.querySelector('.nav');
const hiddenList = document.querySelector('.cross');
const calcBtn = document.querySelector('.calc');
const navbar = document.querySelector('.navbar');

navbar.addEventListener('click', (e) => {
    hiddenList.style.display = "block";
    calcBtn.style.display = "inline";
    navbar.style.display = "none";
    console.log("Noice");
});

hiddenList.addEventListener('click', (e) => {
    hiddenList.style.display = "none";
    calcBtn.style.display = "none";
    nav.style.display = "block";
    navbar.style.display = "block";
});
