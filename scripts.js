const newSocialLinks = {
  github: 'willJOIN',
  linkedin: 'whirano',
}

// Change 'maykbrito' to 'willJOIN' in social media links
function changeSocialLinks() {
  // li's of ul
  for (let li of socialLinks.children) {
    // Assign each class of each li's to social
    const social = li.getAttribute('class')
    // href of children at position 0 (a), template string
    li.children[0].href = `https://${social}.com/in/${newSocialLinks[social]}`
  }
}

changeSocialLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${newSocialLinks.github}`
  // Get GitHub API and store it in response (promise), in this case JSON
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Change HTML elements
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
