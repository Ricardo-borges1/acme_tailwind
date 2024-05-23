'use strict'
import { getDiretor,getDiretorById,postDiretor, putDiretor} from "./diretor.js"
const id = new URLSearchParams(window.location.search).get('id')


// função para puxar os dados do filme pelo ID
async function dadosDiretor(){
    
    if(id){
        const infoDiretor = await getDiretorById(id)
        console.log(infoDiretor);
        // console.log(infoFilme.sinopse)
        
        const nome = document.getElementById('nome')
        
        const biografia = document.getElementById('biografia')
        
        const nascimento = document.getElementById('nascimento')
        
        const falecimento = document.getElementById('falecimento')

        const sexo = document.getElementById('sexo')
       
        const poster = document.getElementById('poster')
        
        
        nome.value = infoDiretor.nome
        biografia.textContent = infoDiretor.biografia
        nascimento.value = infoDiretor.data_nascimento.slice(0,10)
        if(infoDiretor.data_falecimento){
            falecimento.value = infoDiretor.data_falecimento.slice(0,10)
        }
        console.log(infoDiretor)
        sexo.value = infoDiretor.tbl_sexo_id
        poster.src = infoDiretor.foto
       
        const editar = document.getElementById('editar')

// Botão de salvar alterações
editar.addEventListener('click', async () => {

    const nomeInput = nome.value;
    const biografiaInput = biografia.value;
    const nascimentoInput = nascimento.value;
    const falecimentoInput = falecimento.value;
    const sexoInput = sexo.value;
    const fotoAtorInput = poster.src;
    
   

    const alteracoes = {
        nome: nomeInput,
        biografia: biografiaInput,
        nascimento: nascimentoInput,
        falecimento: falecimentoInput,
        sexo: sexoInput,
        foto: fotoAtorInput
    }

    const result = await putDiretor(id, alteracoes)
    if(result){
        window.location.href = '../html/diretor.html';
    } else {
        alert("Deu erro")
    }
        
    
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


dadosDiretor()