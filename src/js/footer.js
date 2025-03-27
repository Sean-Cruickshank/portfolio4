import { projectData } from "./projects.js"
import { contactData } from "./contact.js"

// Setup for the sections links
const footerDataSections = ["Welcome", "About", "Skills", "Projects", "Qualifications", "Contact"]

let footerSectionsHTML = ""

footerDataSections.forEach((section) => {
  footerSectionsHTML += `
    <a class="footer-section__${section.toLowerCase()}">${section}</a>
  `
})

document.querySelector('.footer__sections').innerHTML = footerSectionsHTML

footerDataSections.forEach((section) => {
  document.querySelector(`.footer-section__${section.toLowerCase()}`).addEventListener('click', () => {
    document.getElementById(section.toLowerCase()).scrollIntoView({behavior: "smooth"})
  })
})

// Setup for the projects links
let footerProjectsHTML = ""

projectData.forEach((project) => {
  footerProjectsHTML += `
    <a target="_blank" href="${project.link}">${project.title}</a>
  `
})

document.querySelector('.footer__projects').innerHTML = footerProjectsHTML

// Setup for the contacts links
let footerContactsHTML = ""

contactData.forEach((contact) => {
  footerContactsHTML += `
    <a target="_blank" href="${contact.link}">${contact.title}</a>
  `
})

document.querySelector('.footer__contacts').innerHTML = footerContactsHTML



