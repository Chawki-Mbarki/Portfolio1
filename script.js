// ================================= Global Variables declaration =================================

const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const navLinks = document.querySelectorAll('.nav-link');

const projects = [
  {
    number: 0,
    name: 'project Not Found',
    description: '   Description Not Found',
    technologies: ['None', 'None', 'None'],
    link: '#',
    source: '#',
  },
  {
    number: 1,
    name: 'project Name Goes Here 1',
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
    name: 'project Name Goes Here 2',
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
    name: 'project Name Goes Here 3',
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
    name: 'project Name Goes Here 4',
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
    name: 'project Name Goes Here 5',
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
    name: 'project Name Goes Here 6',
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
// Generate the projects in the works section;
function generateProjects(projects) {
  const works = document.querySelector('.works');
  const projectElements = [];
  for (let i = 1; i < projects.length; i += 1) {
    let tags = '';
    const projectInfo = projects[i];
    for (let j = 0; j < projectInfo.technologies.length; j += 1) {
      const tag = projectInfo.technologies[j];
      tags += `<li>${tag}</li>\n`;
    }

    const projectIndex = projectInfo.number;
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
            <button type="button" onclick="displayPopup(${projectIndex})" class="primary-button dark-button">See this project <i
              class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </li>`;

    projectElements.push(projectElement);
  }

  works.innerHTML += projectElements.join('');

  for (let i = 1; i < projects.length; i += 1) {
    const projectInfo = projects[i];
    document.querySelector(`.project-image${projectInfo.number}`).style.backgroundImage = `url(assets/projects/${projectInfo.number}/main.svg)`;
  }
}
// ================================= Event Listeners =================================

menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);

document.body.addEventListener('load', generateProjects(projects));

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', displayNavigation);
}

// =========================== Fixing stupid meanless linter errors =======================

const fix = displaySelectedImage(1) + displayPopup('test');
console.log(fix);
