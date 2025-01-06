// gerir nosso HTML a partir dos dados dinâmicos captados pela API

function updateProfileInfo(profileData) {
    const photo = document.getElementById("profile.photo");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById("profile.name");
    name.innerHTML = ` &lt;/${profileData.name}&gt;`;

    const social = document.getElementById("profile.job");
    social.innerHTML = `${profileData.job}`;

    const location = document.getElementById("profile.location");
    location.innerHTML = `${profileData.location}`;

    const phone = document.getElementById("profile.phone");
    phone.innerHTML = `${profileData.phone}`;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById("profile.email");
    email.innerHTML = `${profileData.email}`;
    email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById("profile.skills.softSkills");
    const listSkills = profileData.skills.softSkills;
    const softInLi = listSkills
        .map((sf) => {
            return `<li>${sf}</li>`;
        })
        .join("");

    softSkills.innerHTML = softInLi;
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById("profile.skills.hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills
        .map((hs) => {
            return `<li>
                  <img
                    src="${hs.logo}"
                    alt="${hs.name}"
                    title="${hs.name}"
                  />
                </li>`;
        })
        .join("");
}

function updateLanguages(profileData) {
    const languages = document.getElementById("profile.languages");
    languages.innerHTML = profileData.languages
        .map((language) => {
            return `<li>
                  ${language}
                </li>`;
        })
        .join("");
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById("profile.portfolio");
    portfolio.innerHTML = profileData.portfolio.map((project) => {

        return `<li>
              <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
              <a href="${project.url}" target="_blank"
                >${project.url}</a
              >
            </li>`;
    }).join('');
}

function updateProfessionalExperience(profileData) {
    const experience = document.getElementById("profile.professionalExperience");
    experience.innerHTML = profileData.professionalExperience.map((xp) => {

        return `
    <li>
        <h3 class="title">${xp.name}</h3>
        <p class="period">${xp.period}</p>
        <p>${xp.description}</p>
    </li>`;
    }).join('');
}

(async () => {
    const profileData = await fetchProfileData(); // a partir destes dados, iremos começar a 'distribuir' dinâmicamente em nosso HTML
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})();
