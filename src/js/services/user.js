import { baseUrl } from "../variables.js"

async function fetchUser(user) {
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

export {fetchUser}