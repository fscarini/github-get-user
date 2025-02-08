import { fetchUser } from "/src/js/services/user.js"
import { fetchRepos } from "/src/js/services/repositories.js"
import { user } from "/src/js/objects/user.js"
import { screen } from "/src/js/objects/screen.js"

let userName

document.querySelector("#btn-search").addEventListener("click", () => {
    userName = document.querySelector('#input-search').value
    getUser()
    getRepositories()
})

document.querySelector('#input-search').addEventListener("keyup", (e) => {
    userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressered = key === 13
    if (isEnterPressered) {
        getUser()
        getRepositories()
    }
})

async function getUser() {
    const response = await fetchUser(userName)
    user.setInfo(response)
    screen.renderUser(user)

}

async function getRepositories(){
    const response = await fetchRepos(userName)
    user.setRepositories(response)
    screen.renderRepositories(user, userName)
}
