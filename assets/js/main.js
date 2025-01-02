// gerir nosso HTML a partir dos dados dinâmicos captados pela API

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = ` ${profileData.name}`


}

(async () => {

    const profileData = await fetchProfileData() // a partir destes dados, iremos começar a 'distribuir' dinâmicamente em nosso HTML
    updateProfileInfo(profileData)
})()