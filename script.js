function ola(){
    alert('olá.')
}

function olaPessoa(nome){
    alert(nome + ' seja bem vindo!')
}

function saudacao(){
    const nome = document.getElementById('nome').value
    alert('Olá ' + nome)
}

function mouseSobre(){
    alert('Sai de cima klr')
}

function mouseFora(){
    alert('Volta aqui!!')
}

function textoModificado(){
    alert('O texto foi alterado.')
}

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '3px solid green'
    user.style.backgroundColor = 'grey'
}
function semFoco(){
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}
