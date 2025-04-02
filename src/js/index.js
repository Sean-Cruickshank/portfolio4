import { sideNavArray, fadeInArray} from "../data/siteData.js"

// Creates the onClick scroll functionality for the sidenav links
sideNavArray.forEach((page) => {
  document.querySelector(page.class).addEventListener('click', () => {
    document.getElementById(page.id).scrollIntoView({behavior: "smooth"})
  })
})

function loadPage() {
  //Applies the "active" effect on initial page render
  fadeInArray.forEach((element) => {
    // Staggers the GitHub link by 1 second
    if (element === '.social__github') {
      setTimeout(() => {
        document.querySelector(element).classList.add('active')
      },1000)

    // Staggers the LinkedIn link by 1.5 seconds
    } else if (element === '.social__linkedin') {
      setTimeout(() => {
        document.querySelector(element).classList.add('active')
      },1500)

    // Staggers the welcome arrow by 2 seconds
    } else if (element === '.welcome__arrow') {
      setTimeout(() => {
        document.querySelector(element).classList.add('active')
      },2000)

    // All other single-use classes have the effect applied instantly
    } else {
      document.querySelector(element).classList.add(`active`)
    }
  })
}

loadPage()

window.addEventListener('scroll', () => {
  const position = Math.floor(scrollY);
  // console.log(position)
  
  // Reveals the sidenav when the user scrolls more than 25px down
  if (position > 25) {
    document.querySelector('.sidenav').classList.remove('hidden')
    document.querySelector('.sidenav__toggle').classList.remove('hidden')
  }

  // Sets the breakpoints for the 'sidenav--active' class for each sidenav link
  sideNavArray.forEach((page) => {
    if (position >= page.top - 250 & position < page.bottom - 250) {
      document.querySelectorAll('.sidenav--active').forEach((item) => {
        item.classList.remove('sidenav--active')
      })
      document.querySelector(page.class).classList.add('sidenav--active')
    }
  })

  // Fade in effect for the three rows of skill icons
  if (position > 1180) {
    setTimeout(() => {
      document.querySelector('.skills__row-one').classList.remove('hidden')
    },250)
    setTimeout(() => {
      document.querySelector('.skills__row-two').classList.remove('hidden')
    },500)
    setTimeout(() => {
      document.querySelector('.skills__row-three').classList.remove('hidden')
    },750)
  }
})

let sidenavToggle = false
const hideSidenav = document.querySelector('.sidenav__toggle')
hideSidenav.addEventListener('click', () => {
  sidenavToggle = !sidenavToggle
  if (sidenavToggle) {
    hideSidenav.innerHTML = '<i class="fa-solid fa-circle-chevron-right"></i>'
    document.querySelector('.sidenav').style.left = '-40%'
    setTimeout(() => {
      document.querySelector('.sidenav').style.display = 'none'
    },500)
    
  } else {
    hideSidenav.innerHTML = '<i class="fa-solid fa-circle-chevron-left"></i>'
    setTimeout(() => {
      document.querySelector('.sidenav').style.left = '7%'
    },100)
    
    document.querySelector('.sidenav').style.display = 'grid'
  }
})