'use strict'

import { getFilme } from "./js/filmes.js"


const id = localStorage.getItem('idfilme')
async function preencherCards(){
    let filmesArray = await getFilme(id)
    let filme = filmesArray[0]
    console.log(filme)
}


preencherCards()