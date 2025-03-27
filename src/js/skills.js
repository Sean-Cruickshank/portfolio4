const skillsData = [
  {
    name: "HTML",
    icon: "devicon-html5-plain-wordmark",
    row: 1
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain-wordmark",
    row: 1
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    row: 1
  },
  {
    name: "SASS/SCSS",
    icon: "devicon-sass-original",
    row: 1
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    row: 2
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    row: 2
  },
  {
    name: "React",
    icon: "devicon-react-original",
    row: 2
  },
  {
    name: ".NET Core",
    icon: "devicon-dotnetcore-plain",
    row: 3
  },
  {
    name: "SQL",
    icon: "devicon-azuresqldatabase-plain",
    row: 3
  },
  {
    name: "Azure Fundamentals",
    icon: "devicon-azure-plain",
    row: 3
  },
  {
    name: "Git/GitHub",
    icon: "devicon-git-plain",
    row: 3
  },
]

const skillsRowOne = document.querySelector('.skills__row-one')
const skillsRowTwo = document.querySelector('.skills__row-two')
const skillsRowThree = document.querySelector('.skills__row-three')

let skillsRowOneHTML = '';
let skillsRowTwoHTML = '';
let skillsRowThreeHTML = '';

skillsData.forEach((skill) => {
  if (skill.row === 1) {
    skillsRowOneHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  } else if (skill.row === 2) {
    skillsRowTwoHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  } else if (skill.row === 3) {
    skillsRowThreeHTML+= `
    <div class="skills__skill">
    <i class="${skill.icon} skills__icon"></i>
    <p class="skills__description">${skill.name}</p>
    </div>
  `
  }
})

skillsRowOne.innerHTML = skillsRowOneHTML
skillsRowTwo.innerHTML = skillsRowTwoHTML
skillsRowThree.innerHTML = skillsRowThreeHTML


