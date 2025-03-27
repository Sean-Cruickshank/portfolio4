export const contactData = [
  {
    title: "GitHub",
    link: "https://github.com/Sean-Cruickshank",
    icon: "fa-brands fa-github"
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/seancruickshank/",
    icon: "fa-brands fa-linkedin"
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/SeanCruickshank1997/",
    icon: "fa-brands fa-facebook"
  },
  {
    title: "Email",
    link: "mailto:seancruickshank2025@gmail.com",
    icon: "fa fa-envelope"
  },
]

let contactHTML = ""

contactData.forEach((contact) => {
  contactHTML += `
    <a
      href="${contact.link}"
      target="_blank"
      title="${contact.title}">
      <i class="contact__icon ${contact.icon}"></i>
    </a>
  `
})

document.querySelector('.contact__list').innerHTML = contactHTML