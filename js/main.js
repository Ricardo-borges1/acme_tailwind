'use script'

import {getFilmes, getFilme, deleteFilme, postFilme, putFilme} from "./filmes.js"

function criarCard (filme){

    const button=document.createElement('button')
    button.classList.add('bg-transparent')
    console.log(filme)
    button.addEventListener('click', ()=>{
        location.href = '../html/home.html'
        localStorage.setItem('idfilme', filme.id)
    })

    const card = document.createElement('div')
    card.classList.add ('flex', 'flex-col', 'bg-white', 'rounded-lg', 'shadow-lg', 'p-2', 'mb-8', 'transform', 'trnsition', 'hover:scale-105', 'duration-300', 'max-w-[200px]', 'mx-13')
  
    const titulo = document.createElement('h2')
    titulo.classList.add('text-lg', 'font-bold', 'text-red-700', 'mb-2', 'text-center')
    titulo.textContent = filme.nome

    const capa = document.createElement ('img')
    capa.classList.add('w-capa')
    capa.src = filme.foto_capa

    const preco = document.createElement('p')
    preco.classList.add('text-md', 'text-gray-800', 'font-bold', 'mb-2', 'text-center', 'pt-2')
    preco.textContent = `Preço: R$${filme.valor_unitario}`


    card.append(capa,titulo,preco)
    button.append(card)

    return button
}

async function preencherContainer(){
    const container = document.getElementById('filmes')


    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}



// async function setIDFilme(){
//     const idFilme=this.id
//     localStorage.setItem('idFilme',idFilme)
//     window.location.href='./html/home.html'
// }

preencherContainer()