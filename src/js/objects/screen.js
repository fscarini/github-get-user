const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderEmptyUser() {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="src/img/angry-emoji.png" alt="Emoji com raiva">
                                            <div class="data">
                                                <h1>Calma lá, meu amigo!</h1>
                                                <p>Digite no campo de busca o 'username' de um usuário do GitHub</p>
                                            </div>
                                        </div>`
    },

    renderInvalidUser() {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="src/img/sad-emoji.png" alt="Emoji triste">
                                            <div class="data">
                                                <h1>Poxa... Que pena!</h1>
                                                <p>Este usuário não está cadastrado no banco de dados do GitHub</p>
                                            </div>
                                        </div>`
    },

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <a href="${user.userUrl}" target="_blank">
                                                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" class="avatar-url">
                                            </a>
                                            <div class="data">
                                                <h1>${user.name ?? 'Usuário sem nome 😴'}</h1>
                                                <p>${user.bio ?? 'Usuário sem bio 😴'}</p>
                                                <div class="follow-section">
                                                    <h3>Seguidores: <strong>${user.followers}</strong><h3>
                                                    <h3>Seguindo: <strong>${user.following}</strong><h3>
                                                </div>
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