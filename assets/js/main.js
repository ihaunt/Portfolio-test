

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo') // 2 (segundo)
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}
// caso seja só texto (innerText), 
// caso tenha texto + href (innerText + href)
//alterando as informações do HTML pelas informações contidas na API usando profileData

function updateSoft(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}
// softSkills faz a busca por id documento no HMTL (profile.skills.softSkills)
// depois a mesma variavel recebe uma conversao em HTML das informações que estão
// no profileData (Api) E transforma as informações da API em HTML


function updateHard(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
} // 3 (terceiro)

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : ' '}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`
    }).join('')
}

function updateExperience(profileData) {
    const experiences = document.getElementById('professionalExperience')
    experiences.innerHTML = profileData.professionalExperience.map(experience => {
        return `
        <li>                        
            <h3 class="name">${experience.name}</h3>

            <p class="period">${experience.period}</p>

            <p class="description">${experience.description}</p>

        </li>`
    }).join('')
}


(async function () {
    const profileData = await fetchProfileData()  //1 (primeiro)
    updateProfileInfo(profileData)
    updateSoft(profileData)
    updateHard(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()
//recebe as informações para uso da api HTTP com novo parametro - profileData
// parametros de manipulação são puxados pra essa requisição para serem invocadas()