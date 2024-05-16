'use strict'
import { getAtor,postAtor, putAtor} from "./ator.js"
const id = new URLSearchParams(window.location.search).get('id')



// função para puxar os dados do filme pelo ID
async function dadosAtor(){

    if(id){
        
      
        const infoAtor = await getAtor(id)
        // console.log(infoFilme.sinopse)
        
        const nome = document.getElementById('nome')
        
        const biografia = document.getElementById('biografia')
        
        const nascimento = document.getElementById('nascimento')
        
        const falecimento = document.getElementById('falecimento')

        const sexo = document.getElementById('sexo')
       
        const poster = document.getElementById('poster')
        
        
        nome.value = infoAtor.nome
        biografia.textContent = infoAtor.biografia
        
        
       
        poster.src = infoAtor.foto
       
        const salvar = document.getElementById('salvar')

// Botão de salvar alterações
salvar.addEventListener('click', () => {

    const nomeInput = nome.value;
    const biografiaInput = biografia.value;
    const nascimentoInput = nascimento.value;
    const falecimentoInput = falecimento.value;
    const sexoInput = sexo.value;
    console.log(nomeInput);
    const fotoAtorInput = poster.src;
    
   

    const alteracoes = {
        nome: nomeInput,
        biografia: biografiaInput,
        nascimento: nascimentoInput,
        falecimento: falecimentoInput,
        sexo: sexoInput,
        foto: fotoAtorInput,
        
       
    }

    console.log(alteracoes);
    

    putAtor(id, alteracoes)
        
        window.location.href = '../html/cms.html';
        
    
});

    }else{
        return false
    } 
     
}



const poster = document.getElementById('poster')
const link = document.getElementById('link')

// Mudar capa do filme
link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


dadosAtor()