
// Array contenente i membri del team #MILESTONE 0
const teamMembers = [
  {
    fullName: "Wayne Barnett",
    role: "Founder & CEO",
    portrait: "wayne-barnett-founder-ceo.jpg"
  },
  {
    fullName: "Angela Caroll",
    role: "Chief Editor",
    portrait: "angela-caroll-chief-editor.jpg"
  },
  {
    fullName: "Walter Gordon",
    role: "Office Manager",
    portrait: "walter-gordon-office-manager.jpg"
  },
  {
    fullName: "Angela Lopez",
    role: "Social Media Manager",
    portrait: "angela-lopez-social-media-manager.jpg"
  },
  {
    fullName: "Scott Estrada",
    role: "Developer",
    portrait: "scott-estrada-developer.jpg"
  },
  {
    fullName: "Barbara Ramos",
    role: "Graphic Designer",
    portrait: "barbara-ramos-graphic-designer.jpg"
  }
];

// stampare su console le informazioni dagli oggetti #MILESTONE 1
for (let i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  const memberPortrait = `${currentMember.portrait}`;
  const memberFullName = `${currentMember.fullName}`;
  const memberRole = `${currentMember.role}`;
  // stampare le informazioni nel DOM
  templateCardEl(memberPortrait, memberFullName, memberRole);
}

function templateCardEl (img, name, role) {
  const cardTemplateHTML = document.querySelector('.templateCard').cloneNode(true);
  const cardImg = cardTemplateHTML.querySelector('.card-img');
  const cardDesc = cardTemplateHTML.querySelector('.card-desc');
  cardImg.innerHTML = `
    <img src="./img/${img}">
  `;
  cardDesc.innerHTML = `
    <p class="member-name">${name}</p>
    <p class="member-role">${role}</p>  
  `;
  document.querySelector('.grid').appendChild(cardTemplateHTML);
}