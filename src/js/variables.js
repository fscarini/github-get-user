import { screen } from "./objects/screen.js"

const baseUrl = "https://api.github.com/users"

function isEmpty(userName){
    if(userName.length === 0){
        screen.renderEmptyUser()
        return true
    }
} 

export { baseUrl, isEmpty }