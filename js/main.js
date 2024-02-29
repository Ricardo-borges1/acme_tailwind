'use strict'

import { getFilmes, getFilme} from "./filmes.js"


function criarCard (filme){
    const lista = document.getElementById('lista')
    const card = document.createElement('div')

    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome


    //const texto = document.createElement('textarea')
    //texto.textContent = filme.sinopse

    const capa = document.createElement('img')
    capa.src = filme.foto_capa

    lista.append(card)
    card.append(titulo,capa)

    return lista
}

async function preencherContainer () {
    const container = document.querySelector('body')

    const filme = await getFilmes ()

    filme.forEach (filme => {
        const card = criarCard (filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()