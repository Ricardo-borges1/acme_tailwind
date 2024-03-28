'use strict'

import {getFilmes, getFilme,postFilme, deleteFilme} from "./filmes.js"

const idFilme = localStorage.getItem('idfilme')
console.log(idFilme)


async function preencherCampos(id){
    const filme = await getFilme(id)
    console.log(filme);
   
    const filho2 = document.createElement('div')

    const sinopse = document.createElement('p')
    sinopse.textContent = filme.sinopse
    sinopse.classList.add('text-[20px]', 'text-white', 'bottom-[450px]', 'text-justify' , 'w-[590px]', 'fixed' ,'left-[760px]', )
 
    const titulo = document.createElement('h1')
    titulo.textContent = filme.nome
    titulo.classList.add('text-4xl', 'text-center', 'text-white', 'pb-[360px]', 'pl-[290px]')
   
    const valorD = document.createElement('div')
    valorD.classList.add('text-red-700', 'text-2xl' , 'bg-red-200' , 'w-[170px]', 'h-[50px]', 'text-center', 'fixed', 'left-[700px]','rounded-lg', 'inline-block', 'align-middle')
    const valor = document.createElement('p')
    valor.textContent = `Valor : R$:${filme.valor_unitario}`
   

    valorD.append(valor)
    
    
    filho2.append(titulo, sinopse, valorD)

    return filho2
}


const fotoTitulo = async(id) =>{
    const filme = await getFilme(id)
    console.log(filme);

    const filho1 = document.createElement('div')
    filho1.classList.add('ml-[100px]', 'posterFilme', 'bg-[#]', 'top-[200px]', 'min-w-[480px]', 'min-h-[400px]','text-[#FFFFFF]', 'h-fit', 'flex', 'flex-col', 'items-center', 'border-2', 'border-[#FFFFFFFF]', 'mt-[180px]')
   
    const poster = document.createElement('img')
    poster.classList.add('min-w-[470px]','min-h-[400px]', 'flex', )
    poster.src = filme.foto_capa

    filho1.append(poster)

    return filho1
}
async function preencherContainer() {
    const container = document.getElementById('pai')
    container.classList.add('gap-8')

        const card = await fotoTitulo(idFilme)
        const cardG = await preencherCampos(idFilme)
        
        container.append(card, cardG)
}

preencherContainer()



