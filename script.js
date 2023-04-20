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

/* add all the project details to the popup window based on the
'projectIndex' Also this function will swap between projects
if it is provided by a direction instead of projectIndex. */
function generatePopup(projectIndex) {
  const projectName = document.querySelector('.popup-window .project-name');
  const projectTags = document.querySelector('.popup-window .project-tags');
  const mainImage = document.querySelector('.popup-window .main-image');
  const secondaryImage1 = document.querySelector('.popup-window .secondary-image1');
  const secondaryImage2 = document.querySelector('.popup-window .secondary-image2');
  const secondaryImage3 = document.querySelector('.popup-window .secondary-image3');
  const secondaryImage4 = document.querySelector('.popup-window .secondary-image4');
  const popupDescription = document.querySelector('.popup-description');
  const previousProject = document.querySelector('.previous-project');
  const nextProject = document.querySelector('.next-project');
  const projectNumber = document.querySelector('.popup-project-number');

  if (typeof (projectIndex) === 'string') {
    if (projectIndex === 'left') {
      projectIndex = Number(projectNumber.innerHTML.charAt(0));
      projectIndex -= 1;
    } else if (projectIndex === 'right') {
      projectIndex = Number(projectNumber.innerHTML.charAt(0));
      projectIndex += 1;
    }
  }

  if (projectIndex > 1 && projectIndex < 6) {
    previousProject.style.color = '#1a2236';
    previousProject.disabled = false;
    previousProject.style.cursor = 'pointer';
    nextProject.style.color = '#1a2236';
    nextProject.disabled = false;
    nextProject.style.cursor = 'pointer';
  } else if (projectIndex === 1) {
    previousProject.style.color = 'red';
    previousProject.disabled = 'disabled';
    previousProject.style.cursor = 'not-allowed';
  } else if (projectIndex === 6) {
    nextProject.style.color = 'red';
    nextProject.disabled = 'disabled';
    nextProject.style.cursor = 'not-allowed';
  }
  const project = projects[projectIndex];

  projectName.innerHTML = project.name;

  let tags = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    const tag = project.technologies[i];
    tags += `<li>${tag}</li>\n`;
  }
  projectTags.innerHTML = tags;

  secondaryImage1.style.backgroundImage = `url('assets/projects/${projectIndex}/Project-secondary-picture1.svg')`;
  secondaryImage2.style.backgroundImage = `url('assets/projects/${projectIndex}/Project-secondary-picture2.svg')`;
  secondaryImage3.style.backgroundImage = `url('assets/projects/${projectIndex}/Project-secondary-picture3.svg')`;
  secondaryImage4.style.backgroundImage = `url('assets/projects/${projectIndex}/Project-secondary-picture4.svg')`;

  const selectedImage = document.querySelector('.selected-image');
  if (selectedImage != null) {
    selectedImage.classList.remove('selected-image');
  }
  secondaryImage1.classList.add('selected-image');
  mainImage.style.backgroundImage = secondaryImage1.style.backgroundImage;

  popupDescription.innerHTML = project.description;

  projectNumber.innerHTML = `${projectIndex} / 6`;
}

// Toggle the display status of the popup window.
function displayPopup(projectIndex) {
  if (projectIndex >= projects.length || projectIndex < -1) {
    generatePopup(0);
  } else if (projectIndex !== -1) {
    generatePopup(projectIndex);
  } if (typeof (projectIndex) === 'number') {
    document.querySelector('.popup-window').classList.toggle('display-popup');
  }
  return null;
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
