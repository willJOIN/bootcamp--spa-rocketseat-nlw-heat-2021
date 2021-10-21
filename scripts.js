const newSocialLinks = {
  github: 'willJOIN',
  youtube: 'willJOIN',
  facebook: 'willJOIN',
  instagram: 'willJOIN',
  twitter: 'willJOIN'
}
// Change 'maykbrito' to 'willJOIN' in social media links
function changeSocialLinks() {
  // li's of ul
  for (let li of socialLinks.children) {
    // Assign each class of each li's to social
    const social = li.getAttribute('class')
    // href of children at position 0 (a), template string
    li.children[0].href = `https://${social}.com/${newSocialLinks[social]}`
  }
}
changeSocialLinks()
