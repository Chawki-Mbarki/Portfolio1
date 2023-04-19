// ================================= Functions =================================

// Toggle the Display-nav class showing/hiding navigation
function displayNavigation() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('display-nav');
}

// Dynamically generates the projects in works section.
function generateProjects(projects) {
  const works = document.querySelector('.works');

  projects.forEach((projectInfo) => {
    let tags = '';
    for (let i = 0; i < (projectInfo.technologies).length; i += 1) {
      const tag = projectInfo.technologies[i];
      tags += `<li>${tag}</li>\n`;
    }

    const projectElement = `
      <li class="project project-${projectInfo.number} flex-column">
        <div class="project-container flex-column">
          <div class="project-image project-image${projectInfo.number}">
          </div>
          <div class="project-info flex-column">
            <div class="project-name">
              <h3>${projectInfo.name}</h3>
            </div>
            <ul class="project-tags flex-row">
              ${tags}
            </ul>
            <button type="button" class="primary-button dark-button">See this project <i
              class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </li>`;
    works.innerHTML += projectElement;
    document.querySelector(`.project-image${projectInfo.number}`).style.backgroundImage = `url(assets/projects/${projectInfo.number}/main.svg)`;
  });
}

// ================================= Variables declaration =================================
const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const navLinks = document.querySelectorAll('.nav-link');

const projects = [
  {
    number: 1,
    name: 'project Name Goes Here',
    description: `   Description 1
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link: '#',
    source: '#',
  },
  {
    number: 2,
    name: 'project Name Goes Here',
    description: `   Description 2
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    link: '#',
    source: '#',
  },
  {
    number: 3,
    name: 'project Name Goes Here',
    description: `   Description 3
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link: '#',
    source: '#',
  },
  {
    number: 4,
    name: 'project Name Goes Here',
    description: `   Description 4
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    link: '#',
    source: '#',
  },
  {
    number: 5,
    name: 'project Name Goes Here',
    description: `   Description 5
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    link: '#',
    source: '#',
  },
  {
    number: 6,
    name: 'project Name Goes Here',
    description: `   Description 6
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                      Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi.
    `,
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    link: '#',
    source: '#',
  },
];

// ================================= Adding Event Listeners =================================
menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', displayNavigation);
}

document.body.addEventListener('load', generateProjects(projects));
