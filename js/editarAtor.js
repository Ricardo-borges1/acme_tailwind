'use strict'
import { getAtor,getAtorById,postAtor, putAtor} from "./ator.js"
const id = new URLSearchParams(window.location.search).get('id')


// função para puxar os dados do filme pelo ID
async function dadosAtor(){
    
    if(id){
        const infoAtor = await getAtorById(id)
        console.log(infoAtor);
        // console.log(infoFilme.sinopse)
        
        const nome = document.getElementById('nome')
        
        const biografia = document.getElementById('biografia')
        
        const nascimento = document.getElementById('nascimento')
        
        const falecimento = document.getElementById('falecimento')

        const sexo = document.getElementById('sexo')
       
        const poster = document.getElementById('poster')
        
        
        nome.value = infoAtor.nome
        biografia.textContent = infoAtor.biografia
        nascimento.value = infoAtor.data_nascimento.slice(0,10)
        if(infoAtor.data_falecimento){
            falecimento.value = infoAtor.data_falecimento.slice(0,10)
        }

        
       
        poster.src = infoAtor.foto
       
        const editar = document.getElementById('editar')

// Botão de salvar alterações
editar.addEventListener('click', () => {

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
        
       // window.location.href = '../html/ator.html';
        
    
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