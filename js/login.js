'use strict'

const forma =document.getElementById('logar').addEventListener('submit', function(event){
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (email === 'adm@gmail.com' && senha === 123){
        window.Location.href = './html/cms.html'
    } else {
        alert ( ' SENHA OU EMAIL INCORRETOS !! ')
    }
})