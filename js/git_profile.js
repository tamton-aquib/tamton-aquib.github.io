
const url = "https://github.com/";
const apiUrl = "https://api.github.com/users/"
const input = document.querySelector('.inp');
const button = document.querySelector('.btn');
const face = document.querySelector('.face');
const details = document.querySelector('.details')

async function getGithub(uri) {
    return await (await fetch(uri)).json()
}

button.addEventListener('click', () => {
    let uri = `url('${url}${input.value}.png?size=150')`
    let apiUri = `${apiUrl}${input.value}`
    face.style.backgroundImage = uri;

    getGithub(apiUri).then(data => {
		console.log(data);
		let noice = `<h2>${data.login}</h2><br>
			<h5>name		:	${data.name}</h5><br>
			<h5>bio		:	${data.bio}</h5><br>
			<h5>following	:	${data.following}</h5><br>
			<h5>followers	:	${data.followers}</h5>
		`
		details.innerHTML = noice
		// console.log(data)
    })

});
