export async function getFilmes () {
   const url = 'http://localhost:8080/v2/filmesAcme/filmes' 
   const response = await fetch (url)
   const data = await response.json()
    // ou usar return data para mostrar todas as informações.
   return data.filmes
}


export async function getFilme (id) {
    const url = `http://localhost:8080/v2/filmesAcme/filme/${id}`
    const response = await fetch (url)
    const data = await response.json ()

    return data.filme
}

export async function postFilme(filme) {
     const url = 'http://localhost:8080/v2/filmesAcme/filme'
     const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
     }
     const response = await fetch (url,options)
     return response.ok

}

export async function deleteFilme(id){
    const url = `http://localhost:8080/v1/filmesAcme/deleteFilme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch ( url, options)
    return response.ok
}