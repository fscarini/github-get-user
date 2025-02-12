let user = {
    avatarUrl: "",
    userUrl:"",
    name:"",
    bio:"",
    followers:"",
    following:"",
    repositories:[],
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
        const abbreviating = (rep) =>{
            if(rep.language === null){
                return "Linguagem não identificada"
            }else if(rep.language === "JavaScript"){
                return "JS"
            }else{
                return rep.language
            }      
        }

        this.repositories = reps.map(rep => ({
            repositorieName: rep.name,
            repositorieUrl: rep.html_url,
            repositorieForks: rep.forks_count,
            repositorieStars: rep.stargazers_count,
            repositorieWatchers: rep.watchers_count,
            repositorieLanguage: abbreviating(rep),
        }))
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