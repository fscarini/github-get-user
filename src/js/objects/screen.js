const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl} " alt="Foto de perfil do usuário"
                                        <div class="data">
                                        <h1>${user.name ?? 'Usuário sem nome 😴'}</h1>
                                        <p>${user.bio ?? 'Usuário sem bio 😴'}</p>
                                        </div>
                                        </div>`
    },

    renderRepositories(reps, userName) {
        if (reps.repositories.length <= 0) {
            let userWithoutActivity = `<div class="repositories">
                                    <h2>Xiii... Este usuário não possui repositórios! 😓</h2>
                                </div`
            this.userProfile.innerHTML += userWithoutActivity
        } else {
            let userActivity = `<div class="repositories">
            <h2>Últimos ${reps.repositories.length} repositórios de <strong>@${userName}</strong></h2>
            <ul>`
            for (let i = 0; i < reps.repositories.length; i++) {
                userActivity += `<li><a href="${reps.repositoriesUrl[i]}" target="_blank">${reps.repositories[i]}</a></li>`
            }
            userActivity += `</ul></div>`
            this.userProfile.innerHTML += userActivity
        }

    }
}

export { screen }