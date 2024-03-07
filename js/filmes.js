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

    return data.filme[0]
}