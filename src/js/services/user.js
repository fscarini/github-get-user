import { baseUrl } from "/src/js/variables.js"

async function getUser(user) {
    try {
        const response = await fetch(`${baseUrl}/${user}`)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            console.log("Erro na resposta da API", response.status)
        }
    } catch (err) {
        console.error("Erro na requisição", err)
    }
}

export {getUser}