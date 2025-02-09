import { baseUrl } from "../variables.js"
import { screen } from "../objects/screen.js"

async function fetchUser(user) {
    try {
        const response = await fetch(`${baseUrl}/${user}`)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            return screen.renderInvalidUser()
        }
    } catch (err) {
        console.error("Erro na requisição", err)
    }
}

export {fetchUser}