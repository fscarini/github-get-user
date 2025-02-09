import { fetchUser } from "./services/user.js"
import { fetchRepos } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { isEmpty } from "./variables.js"

let userName

document.querySelector("#btn-search").addEventListener("click", () => {
    userName = document.querySelector('#input-search').value
    if(isEmpty(userName)) return
    getUser()
    getRepositories()
})

document.querySelector('#input-search').addEventListener("keyup", (e) => {
    userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressered = key === 13
    if (isEnterPressered) {
        if(isEmpty(userName)) return
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
