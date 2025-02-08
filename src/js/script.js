import { getUser } from "/src/js/services/user.js"
import { getRepos } from "/src/js/services/repositories.js"

let userName

document.querySelector("#btn-search").addEventListener("click", () => {
    userName = document.querySelector('#input-search').value
    getUserProfile()
    getUserRepos()
})

document.querySelector('#input-search').addEventListener("keyup", (e) => {
    userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressered = key === 13
    if (isEnterPressered) {
        getUserProfile()
        getUserRepos()
    }
})

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
                            <ul>`
        for (let i = 0; i < 10; i++) {
            userActivity += `<li><a href="${userRepos[i].html_url}" target="_blank">${userRepos[i].name}</a></li>`
        }
        userActivity += `</ul></div>`
        document.querySelector(".profile-data").innerHTML += userActivity
    })
}