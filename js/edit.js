'use strict'
import {getFilmes, getFilme,postFilme, putFilme} from "./filmes.js"
const id = new URLSearchParams(window.location.search).get('id')



// função para puxar os dados do filme pelo ID
async function dadosFilme(){

    if(id){
        
      
        const infoFilme = await getFilme(id)
        console.log(infoFilme)
        
        const nome = document.getElementById('nome')
        
        const sinopse = document.getElementById('sinopse')
        
        const lancamento = document.getElementById('lancamento')
        
        const relancamento = document.getElementById('relancamento')

        const duracao = document.getElementById('duracao')
       
        const valor = document.getElementById('valor')
        const poster = document.getElementById('poster')
        const classifi = document.getElementById('classificacao')
        
        nome.value = infoFilme.nome
        sinopse.textContent = infoFilme.sinopse
        duracao.value = tratarDuracao(infoFilme.duracao)
        
       
        poster.src = infoFilme.foto_capa
       
        valor.value = infoFilme.valor_unitario
        lancamento.value = infoFilme.data_lancamento.slice(0,10)
        // console.log(infoFilme.data_lancamento.slice(0,10))
        relancamento.value = infoFilme.data_relancamento
        classifi.value = infoFilme.classificacao[0].id

        const salvar = document.getElementById('salvar')

// Botão de salvar alterações
salvar.addEventListener('click', () => {

    const nomeInput = nome.value;
    const sinopseInput = sinopse.value;
    const duracaoInput = duracao.value
    const dataLancamentoInput = lancamento.value;
    const dataRelancamentoInput = relancamento.value;
    const precoInput = valor.value;
    console.log(nomeInput);
    const fotoCapaInput = poster.src;
    const classifiInput = classifi.value
   

    const alteracoes = {
        nome: nomeInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: precoInput,
        foto_capa: fotoCapaInput,
        tbl_classificacao_id: classifiInput
       
    }

    console.log(alteracoes);
    

    putFilme(id, alteracoes)
        
        window.location.href = '../html/cms.html';
        
    
});

    }else{
        return false
    } 
     
}
function tratarDuracao(string){
    const stringTratada = string.slice(11,19)
    return stringTratada
}

const poster = document.getElementById('poster')
const link = document.getElementById('link')

// Mudar capa do filme
link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


dadosFilme()