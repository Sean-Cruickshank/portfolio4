export const projectData = [
  {
    title: "Cool Space Facts",
    link: "https://coolspacefacts.com/",
    date: "2023 - 2024",
    image: "images/cool_space_facts.png",
    tagsText: [
      "HTML5", "CSS3", "JavaScript", "React"
    ],
    tagsClass: [
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-javascript-plain",
      "devicon-react-original"
    ],
    description: "An interactive and educational space facts website. Each page contains a ranking of different space objects, from smallest to largest, based on a specific theme. Utilises react-router and React hooks."
  },
  {
    title: "Tile Game",
    link: "/tilegame",
    date: "2024",
    image: "images/tile_game.png",
    tagsText: [
      "HTML5", "CSS3", "JavaScript", "React"
    ],
    tagsClass: [
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-javascript-plain",
      "devicon-react-original"
    ],
    description: "A small tile-based game created in JavaScript in under 24 hours. Collect keys to get as many points as you can in under 30 seconds. I didn't really make this one to showcase a skill I just thought it was fun."
  },
]

let projectListHTML = ""

projectData.forEach((project) => {
  let projectListTags = ""
  let count = 0
  project.tagsClass.forEach((tag) => {
    const title = project.tagsText[count++]
    projectListTags += `
      <i
        class="${tag} projects__icon"
        title=${title}
      ></i>
    `
  })
  projectListHTML += `
    <div class="projects__card">
      <div class="projects__title">
      <h3 class="">${project.title}</h3>
      <a
        title=${project.link}
        target="_blank"
        href=${project.link} class="projects__link fa-solid fa-link"
      ></a>
      </div>
      <i class="paragraph projects__date">${project.date}</i>
      <p class="paragraph">${project.description}</p>
      <div class="projects__icons">
      ${projectListTags}
      </div>
      <img class="projects__image" src=${project.image} />
    </div>
  `
})

document.querySelector('.projects__list').innerHTML = projectListHTML