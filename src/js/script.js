let userName
let searchButton = document.querySelector("#btn-search").addEventListener("click", () => {
    userName = document.querySelector('#input-search').value
    getUserProfile()
    getUserRepos()
})

let inputSearch = document.querySelector('#input-search').addEventListener("keyup", (e) => {
    userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressered = key === 13
    if (isEnterPressered) {
        getUserProfile()
        getUserRepos()
    }

})

async function getUser(user) {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
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

async function getRepos(user) {
    try {
        const response = await fetch(`https://api.github.com/users/${user}/repos`)
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

async function getUserProfile() {
    getUser(userName).then(userData => {
        let userInfo = `<div class="info">
                        <img src="${userData.avatar_url} " alt="Foto de perfil do usuário"
                        <div class="data">
                            <h1>${userData.name ?? 'Usuário sem nome 😴'}</h1>
                            <p>${userData.bio ?? 'Usuário sem bio 😴'}</p>
                        </div>
                        </div>`
        document.querySelector(".profile-data").innerHTML = userInfo
    })
}

async function getUserRepos() {
    getRepos(userName).then(userRepos => {
        let userActivity = `<div class="repositories">
                            <h2>Últimos 10 repositórios de <strong>@${userName}</strong></h2>
                                <ul>
                                    <li><a href="${userRepos[0].html_url}" target="_blank">${userRepos[0].name}</a></li>
                                    <li><a href="${userRepos[1].html_url}" target="_blank">${userRepos[1].name}</a></li>
                                    <li><a href="${userRepos[2].html_url}" target="_blank">${userRepos[2].name}</a></li>
                                    <li><a href="${userRepos[3].html_url}" target="_blank">${userRepos[3].name}</a></li>
                                    <li><a href="${userRepos[4].html_url}" target="_blank">${userRepos[4].name}</a></li>
                                    <li><a href="${userRepos[5].html_url}" target="_blank">${userRepos[5].name}</a></li>
                                    <li><a href="${userRepos[6].html_url}" target="_blank">${userRepos[6].name}</a></li>
                                    <li><a href="${userRepos[7].html_url}" target="_blank">${userRepos[7].name}</a></li>
                                    <li><a href="${userRepos[8].html_url}" target="_blank">${userRepos[8].name}</a></li>
                                    <li><a href="${userRepos[9].html_url}" target="_blank">${userRepos[9].name}</a></li>
                                </ul>
                        </div>`
        document.querySelector(".profile-data").innerHTML += userActivity
    })
}
