const qualificationsData = [
  {
    title: "Azure Fundamentals (AZ-900)",
    location: "Microsoft Learn",
    date: "2025",
  },
  {
    title: "Bachelor of Information Technology",
    location: "Southern Institute of Technology School of Computing",
    date: "2019 - 2021",
  },
  {
    title: "New Zealand Certificate in Information Technology Essentials (Level 4)",
    location: "NorthTec Tai Tokerau Wānanga",
    date: "2018 - 2019",
  },
]

const qualificationsList = document.querySelector('.qualifications__list')

let qualificationsHTML = ''

qualificationsData.forEach((entry) => {
  qualificationsHTML += `
  <div class="qualifications__entry">  
    <h3 class="">${entry.date}</h3>  
    <p class="paragraph">${entry.title}</p>
    <i class="paragraph">${entry.location}</i>
  </div>
  `
})

qualificationsList.innerHTML = qualificationsHTML