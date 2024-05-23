'use strict'


export async function getAtor() {
   const url = 'http://localhost:8080/v2/filmesAcme/atores' 
   const response = await fetch (url)
   const data = await response.json()
    // ou usar return data para mostrar todas as informações.
   return data.atores
}


export async function getAtorById(id) {
    const url = `http://localhost:8080/v2/filmesAcme/ator/${id}`
    const response = await fetch (url)
    const data = await response.json ()
    return data.atores[0]
}

export async function postAtor(ator) {
    
     const url = 'http://localhost:8080/v2/filmesAcme/novoAtor'
     const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(ator)
     }
     const response = await fetch (url, options)
     return response.ok

}

export async function deleteAtor(id){
    const url = `http://localhost:8080/v1/filmesAcme/deleteAtor/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch ( url, options)
    return response.ok
}

export async function putAtor (id,ator){
    const url = `http://localhost:8080/v2/filmesAcme/updateAtores/${id}`

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    
    const response = await fetch (url,options)
    console.log(response);
    return response.ok
}