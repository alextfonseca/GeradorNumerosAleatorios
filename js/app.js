// pegando os campos do html
const campoPrimeiroDia = document.querySelector('.primeiroDia')
const campoSegundoDia = document.querySelector('.segundoDia')
const campoTerceiroDia = document.querySelector('.terceiroDia')
const sortear = document.querySelector('#sortear')


//funcao Math.random gera um numero aleatório de 0 ate 9
const variableNumberOne = (Math.floor(Math.random() * 10))
const variableNumberTwo = (Math.floor(Math.random() * 10))
const variableNumberThree = (Math.floor(Math.random() * 10))

function initSorteio() {

    if (variableNumberOne === variableNumberTwo || variableNumberOne === variableNumberThree || variableNumberTwo === variableNumberOne || variableNumberThree === variableNumberOne || variableNumberThree === variableNumberTwo) {
        reloadPage()
    } else {
        campoPrimeiroDia.textContent = variableNumberOne
        campoSegundoDia.textContent = variableNumberTwo
        campoTerceiroDia.textContent = variableNumberThree
    }
}

function reloadPage() {
    window.location.reload()
}

sortear.addEventListener('click', reloadPage)

initSorteio()