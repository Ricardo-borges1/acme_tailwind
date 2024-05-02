'use strict'
import {getDiretor,deleteDiretor, putDiretor, postDiretor} from "./diretor.js"
const listaDiretor = await getDiretor()
const container = document.getElementById('container')

console.log(listaDiretor);

function criarAtor(info){
    const diretor = document.createElement('div')
    diretor.classList.add('h-20','border-b-4','border-[#fffffff]', 'grid', 'grid-cols-4', 'place-items-center')
    const id = document.createElement('h1')
    id.classList.add('text-[#ffffff]','text-3xl')
    id.textContent=info.id
    const produto = document.createElement('p')
    produto.textContent=info.nome
    produto.classList.add('text-[#ffffff]','text-3xl')
     const valor = document.createElement('p')
     valor.classList.add('text-[#ffffff]','text-3xl')
     valor.textContent= tratarData(info.data_nascimento)
    const icones = document.createElement('div')
    icones.classList.add('text-[#fffffff]','text-3xl','flex','gap-4')
    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx','bx-pencil','cursor-pointer')
    const iconeDeletar = document.createElement('i')
    iconeDeletar.classList.add('bx','bxs-trash-alt','text-[#FF0000]','cursor-pointer') 
    const iconeAdicionar = document.createElement ('i')
    iconeAdicionar.classList.add('bx', 'bx-plus-medical')
    iconeAdicionar.id = 'add'


  


    icones.replaceChildren(iconeEditar,iconeDeletar,iconeAdicionar)
    diretor.replaceChildren(id,produto,valor,icones)
    container.appendChild(diretor)

    iconeEditar.addEventListener('click',()=>{
        window.location.href='../html/editar.html?id='+info.id
    })
    iconeDeletar.addEventListener('click',()=>{
        deleteDiretor(info.id)
        window.location.reload()
    })

    iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../html/cadastrar.html'
    })
}

const add = document.getElementById('add')

function tratarData(string){
    let dataTratada = string.slice(0,10)
    dataTratada = dataTratada.split('-')
    dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
    return dataTratada
}

listaDiretor.forEach(diretor => {
    criarAtor(diretor)
});