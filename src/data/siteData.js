// All single-use classes that should receive the '.active' class and respective colour theme
// ie the ones using querySelector
export const fadeInArray = [
  '.welcome__title',
  '.welcome__subtitle',
  '.welcome__arrow',
  '.social__github',
  '.social__linkedin',
  '.about__button'
]

// Array of all sidenav links
// Top and Bottom are the scroll breakpoints for each section, used for adding and removing the 'sidebar--active' class
export const sideNavArray =
[
  {
    id: 'welcome',
    class: '.sidenav__welcome',
    top: 0,
    bottom: 776
  },
  {
    id: 'about',
    class: '.sidenav__about',
    top: 776,
    bottom: 1329
  },
  {
    id: 'skills',
    class: '.sidenav__skills',
    top: 1329,
    bottom: 2067
  },
  {
    id: 'projects',
    class: '.sidenav__projects',
    top: 2067,
    bottom: 3342
  },
  {
    id: 'qualifications',
    class: '.sidenav__qualifications',
    top: 3342,
    bottom: 4150
  },
  {
    id: 'contact',
    class: '.sidenav__contact',
    top: 4150,
    bottom: 9999
  }
]