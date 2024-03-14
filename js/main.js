'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme} from "./filmes.js"


function criarCard (filme){

    const card = document.createElement('div')
    card.classList.add('flex', 'flex-col', 'bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'mb-2', 'transform', 'trnsition', 'hover:scale-105', 'duration-300', 'max-w-sm', 'mx-auto', )

    const titulo = document.createElement('h2')
    titulo.classList.add('text-lg', 'font-bold', 'text-red-700', 'mb-2', 'text-center')
    titulo.textContent = filme.nome

    //const texto = document.createElement('textarea')
    //texto.textContent = filme.sinopse

    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('w-widthImg', 'h-heightImg', )

    const preco = document.createElement('p')
    preco.classList.add('text-md', 'text-gray-800', 'font-bold', 'mb-2', 'text-center', 'pt-2')
    preco.textContent = `Preço: R$${filme.valor_unitario}`


    const duracao = document.createElement('p')
    duracao.classList.add('text-md', 'text-red-800', 'font-bold', 'mb-2', 'text-center', 'pt-2')
    duracao.textContent = filme.duracao
    card.append(titulo,capa,preco,duracao)

    
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

// adicionar novo filme
const filme = {

    "nome": "Oppenheimer",
            "sinopse": "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
            "duracao": "03:09:09",
            "data_lancamento": "2024-02-08",
            "data_relancamento": "2021-03-09",
            "foto_capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5b/Oppenheimer_poster.jpg/250px-Oppenheimer_poster.jpg",
            "valor_unitario": 40
}

deleteFilme(17)
//postFilme(filme)
preencherContainer()