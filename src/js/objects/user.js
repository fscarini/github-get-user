let user = {
    avatarUrl: "",
    userUrl:"",
    name:"",
    bio:"",
    followers:"",
    following:"",
    respositories:[],
    repositoriesUrl:[],
    events:[],

    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.userUrl = githubUser.html_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.followers = githubUser.followers
        this.following = githubUser.following
    },

    setRepositories(reps){
        this.repositories = reps.map(rep => rep.name)
        this.repositoriesUrl = reps.map(rep => rep.html_url)
    },

    setEvents(events){
        const whatAction = (event) =>{
            if(event.type === "PushEvent"){
                return event.payload.commits[0].message
            }else if(event.type === "PullRequestEvent"){
                return event.payload.pull_request.title
            }else{
                return "Sem mensagem de commit"
            }

        } 
        this.events = events.map(event => ({
            type: event.type,
            repositorie: event.repo,
            action: whatAction(event)
        }))
    }
}

export { user }