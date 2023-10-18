
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

// stampare su console le informazioni dagli oggetti in console #MILESTONE 1
// stampare le informazioni dagli oggetti nel DOM #BONUS 1 & 2
for (let i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  const memberPortrait = currentMember.portrait;
  const memberFullName = currentMember.fullName;
  const memberRole = currentMember.role;
  //stampo le informazioni in console
  console.log(memberPortrait, memberFullName, memberRole);
  // stampare le informazioni nel DOM
  templateCardEl(memberPortrait, memberFullName, memberRole);
}

function templateCardEl (img, name, role) {
  const cardTemplateHTML = document.querySelector('.templateCard').cloneNode(true);
  const cardPortrait = cardTemplateHTML.querySelector('.card-portrait');
  const cardMemberName = cardTemplateHTML.querySelector('.member-name');
  const cardMemberRole = cardTemplateHTML.querySelector('.member-role');
  cardPortrait.setAttribute('src', `./img/${img}`);
  cardMemberName.innerHTML = name;
  cardMemberRole.innerHTML = role;
  document.querySelector('.grid').appendChild(cardTemplateHTML);
}