let user = {
    avatarUrl: "",
    name:"",
    bio:"",
    followers:"",
    following:"",
    respositories:[],
    repositoriesUrl:[],

    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.followers = githubUser.followers
        this.following = githubUser.following
    },

    setRepositories(reps){
        this.repositories = reps.map(rep => rep.name)
        this.repositoriesUrl = reps.map(rep => rep.html_url)
    }
}

export { user }