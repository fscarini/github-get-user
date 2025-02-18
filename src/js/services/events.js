import { baseUrl } from "../variables.js"

async function fetchEvents(user) {
    try {
        const response = await fetch(`${baseUrl}/${user}/events`)
        if (response.ok) {
            const data = await response.json()
            const today = new Date()
            const thirtyDaysAgo = new Date(today)
            thirtyDaysAgo.setDate(today.getDate() - 30)
            const filteredEvents = data
            .filter(event => new Date(event.created_at) >= thirtyDaysAgo)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 10)
            return await filteredEvents
        } else {
            console.log("Erro na resposta da API", response.status)
        }
    } catch (err) {
        console.error("Erro na requisição", err)
    }
}

export  { fetchEvents }