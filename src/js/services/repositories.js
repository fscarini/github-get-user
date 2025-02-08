import { baseUrl } from "/src/js/variables.js"

async function getRepos(user) {
    try {
        const response = await fetch(`${baseUrl}/${user}/repos`)
        if (response.ok) {
            const data = await response.json()
            const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Ordena os repositórios por data de criação
            return await sortedRepos
        } else {
            console.log("Erro na resposta da API", response.status)
        }
    } catch (err) {
        console.error("Erro na requisição", err)
    }
}

export  {getRepos }