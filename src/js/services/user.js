import { baseUrl } from "../variables.js"
import { screen } from "../objects/screen.js"

async function fetchUser(user) {
    try {
        const response = await fetch(`${baseUrl}/${user}`)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            if(response.status === 404){
                return screen.renderInvalidUser()
            }else if(response.status === 403){
                return screen.renderMaxRequests()
            }

        }
    } catch (err) {
        console.error("Erro na requisição", err)
    }
}

export {fetchUser}