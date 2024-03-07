'use strict'

import { getFilmes, getFilme} from "./filmes.js"


function criarCard (filme){

    const card = document.createElement('div')

    const titulo = document.createElement('h2')
    //titulo.textContent = filme.nome

    //const texto = document.createElement('textarea')
    //texto.textContent = filme.sinopse

    const capa = document.createElement('img')
    capa.src = filme.foto_capa

    card.append(titulo,capa)

    
    return card
}

async function preencherContainer() {
    const container = document.querySelector('#lista')

    const filmes = await getFilmes()

    console.log(filmes)
    filmes.forEach (filme => {
        const card = criarCard(filme)
        console.log(container)
        container.appendChild(card)
    })
}

preencherContainer()