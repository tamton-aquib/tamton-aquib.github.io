
const buttonBox = document.querySelector('.button-box')
const button = document.querySelector('.button')

const noice = document.querySelector('.container')
const dark = "#2c2e34"
const light = "#dddddd"

let isToggled = false
let count = 0;

button.addEventListener('click', () => {
	if (count > 2) {
		document.querySelector('.heading').innerHTML = "Dont you have anything else to do? 🌝"
	}
	let alignment = isToggled ? "left" : "right"
	if (!isToggled) {
		noice.style.backgroundColor = light
		buttonBox.style.textAlign = alignment
		count++;
	} else {
		noice.style.backgroundColor = dark
		buttonBox.style.textAlign = alignment
	}
	isToggled = !isToggled
})


