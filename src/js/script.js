let userName
let searchButton = document.querySelector("#btn-search").addEventListener("click", () =>{
    userName = document.querySelector('#input-search').value
    getUserProfile()
})

let inputSearch = document.querySelector('#input-search').addEventListener("keyup", (e) =>{
    userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressered = key === 13
    if(isEnterPressered){
        getUserProfile()
    }

})


async function getUser(user){
    try{
        const response = await fetch(`https://api.github.com/users/${user}`)
        if(response.ok){
            const data = await response.json()
            return data
        }else{
            console.log("Erro na resposta da API", response.status)
        }
    }catch(err){
        console.error("Erro na requisição", err)
    }
}

async function getUserProfile(){
    getUser(userName).then(userData =>{
        let userInfo = `<img src="${userData.avatar_url} " alt="Foto de perfil do usuário"
                        <div class="data">
                            <h1>${userData.name ?? 'Usuário sem nome 😴'}</h1>
                            <p>${userData.bio ?? 'Usuário sem bio 😴'}</p>
                        </div>`
        document.querySelector(".profile-data").innerHTML = userInfo
    })
}