
let h2 = document.querySelector('#text');
const openNavbar = document.querySelector('.open-navbar')
const closeNavbar = document.querySelector('.close-navbar')

let str = `Welcome-aboard!`;
let isOpen = false;

for (let i = 0; i < str.length; i++) {
	let letter = str[i];

	if (letter == '-') {
		letter = ' ';
	}

	setTimeout(function () {
		h2.innerText += letter;
	}, i * 100);
}

closeNavbar.addEventListener('click', (e) => {
	if (!isOpen) {
		openNavbar.style.display = "inline-block";
		isOpen = true;
	} else {
		openNavbar.style.display = "none";
		isOpen = false;
	}
})