const meFacts = [
  "I am <i>28</i> years old",
  "I started getting into web development in <i>2018</i>",
  "My favourite colour is <i>teal</i>",
  "I have over <i>3000</i> hours in Minecraft",
  "Before web development, I wanted to get a degree in <i>Statistics</i>",
  "I memorised the names of <i>every country in the world</i> when I was 15",
  "I tried capital cities too but it was <i>too hard</i>",
  "I am a big space nerd",
]

const button = document.querySelector('.about__button')
let count = 0

const heading = document.querySelector('.about__facts h3')
const fact = document.querySelector('.me-fact')

button.addEventListener("click", () => {
  heading.classList.remove('hidden')
  fact.classList.remove('hidden')
  fact.innerHTML = meFacts[count]
  count < meFacts.length - 1
    ? count++
    : count = 0
})