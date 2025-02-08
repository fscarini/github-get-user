let searchButton = document.querySelector("#btn-search").addEventListener("click", () =>{
    let username = document.querySelector('#input-search').value
    
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
