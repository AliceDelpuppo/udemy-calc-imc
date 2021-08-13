const $form = document.querySelector('#formulario')

function criaParagrafo(){
	const paragrafo = document.createElement('p')
	return paragrafo
}

function setResultado(mensagem, isValid){
	const resultado = document.querySelector('#resultado')
	resultado.innerHTML = ''

	const paragrafo = criaParagrafo()

	if (isValid) {
		paragrafo.classList.add('paragrafo-resultado')
	} else {
		paragrafo.classList.add('bad')
	}

	paragrafo.innerHTML = mensagem
	resultado.appendChild(paragrafo)
}

function getIMC(peso, altura){
	const imc = peso / altura ** 2
	return imc.toFixed(2)
}

function getNivelImc(imc){
	const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

	if (imc >= 40) {
		// 'Obesidade grau 3'
		return nivel[5]
	}
	
	if (imc >= 35){
		// 'Obesidade grau 2'
		return nivel[4]
	}
	
	if (imc >= 30) {
		// 'Obesidade grau 1'
		return nivel[3]
	}
	
	if (imc >= 25) {
		// Sobrepeso
		return nivel[2]
	}
	
	if (imc >= 18.5) {
		// Peso normal
		return nivel[1]
	}
	
	if (imc < 18.5) {
		// Abaixo do peso
		return nivel[0]
	}
}

$form.addEventListener('submit', function(event){
	event.preventDefault()
	
	const inputPeso = event.target.querySelector('#peso')
	const inputaltura = event.target.querySelector('#altura')

	const peso = Number(inputPeso.value)
	const altura = Number(inputaltura.value)

	console.log(peso, altura)

	if (!peso) {
		setResultado('Peso inválidos', false)
		return
	}

	if (!altura){
		setResultado('Altura inválida', false)
		return
	}

	const imc = getIMC(peso, altura)
	const nivelImc = getNivelImc(imc)

	// console.log(imc, nivelImc)

	const mensagem = `Seu imc é ${imc} (${nivelImc}).`
	setResultado(mensagem, true)

})
