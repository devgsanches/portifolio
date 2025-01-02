// gerir nosso HTML a partir dos dados dinâmicos captados pela API

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = ` &lt;/${profileData.name}&gt;`;

    const social = document.getElementById('profile.job')
    social.innerHTML = `${profileData.job}`

    const location = document.getElementById('profile.location')
    location.innerHTML = `${profileData.location}`

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = `${profileData.phone}`
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = `${profileData.email}`
    email.href = `mailto:${profileData.email}`

    const softSkills = document.getElementById('profile.skills.softSkills')
    const listSkills = profileData.skills.softSkills
    const softInLi = listSkills.map((li) => {
        return `<li>${li}</li>`
    }
    ).join('')

    softSkills.innerHTML = softInLi




}

(async () => {

    const profileData = await fetchProfileData() // a partir destes dados, iremos começar a 'distribuir' dinâmicamente em nosso HTML
    updateProfileInfo(profileData)
})()