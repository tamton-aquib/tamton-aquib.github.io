
const input = document.querySelector('.inp');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
	let noice = input.value

	document.querySelector('.container').style.backgroundColor = noice;
	document.querySelector('h1').style.color = noice;
})
