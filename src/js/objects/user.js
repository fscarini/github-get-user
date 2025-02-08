let user = {
    avatarUrl: "",
    name:"",
    bio:"",
    respositories:[],
    repositoriesUrl:[],

    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
    },

    setRepositories(reps){
        this.repositories = reps.map(rep => rep.name)
        this.repositoriesUrl = reps.map(rep => rep.html_url)
    }
}

export { user }