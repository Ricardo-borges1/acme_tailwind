'use strict'


export async function getDiretor() {
   const url = 'http://localhost:8080/v2/filmesAcme/diretores' 
   const response = await fetch (url)
   const data = await response.json()
    // ou usar return data para mostrar todas as informações.
   return data.diretor
}


export async function getDiretorById(id) {
    const url = `http://localhost:8080/v2/filmesAcme/diretor/${id}`
    const response = await fetch (url)
    const data = await response.json ()
    return data.diretor[0]
}

export async function postDiretor(diretor) {
    
     const url = 'http://localhost:8080/v2/filmesAcme/novoDiretor'
     const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
     }
     const response = await fetch (url,options)
     console.log(response)
     return response.ok

}

export async function deleteDiretor(id){
    const url = `http://localhost:8080/v1/filmesAcme/deleteDiretor/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch ( url, options)
    return response.ok
}

export async function putDiretor (id,diretor){

    
    const url = `http://localhost:8080/v2/filmesAcme/updateDiretor/${id}`

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }

    
    const response = await fetch (url,options)
    console.log(response);

    return response.ok
}