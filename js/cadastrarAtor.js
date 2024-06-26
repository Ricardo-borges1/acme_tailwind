'use strict'
import {getAtor,postAtor, putAtor} from "./ator.js"

// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const biografia = document.getElementById('biografia')
const nascimento = document.getElementById('nascimento')
const falecimento = document.getElementById('falecimento')
const sexo = document.getElementById('sexo')
const cadastrar = document.getElementById('cadastrar')
const poster = document.getElementById('poster')

cadastrar.addEventListener('click', ()=>{

    const nomeInput = nome.value
    const biografiaInput = biografia.value
    const nascimentoInput = nascimento.value
    const falecimentoInput = falecimento.value
    const sexoInput = sexo.value
    const capaInput = poster.src
    const insert ={
        nome: nomeInput,
        biografia: biografiaInput,
        data_nascimento: nascimentoInput,
        data_falecimento: falecimentoInput,
        sexo:sexoInput,       
        foto: capaInput
        
    }

    postAtor(insert)
    window.location.href = '../html/ator.html'
    
    
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})