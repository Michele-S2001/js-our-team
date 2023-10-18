
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

console.log(teamMembers);

// stampare su console le informazioni dagli oggetti #MILESTONE 1
for (let i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  const memberInfos = `${currentMember.fullName}, ${currentMember.role}, ${currentMember.portrait}`;
  console.log(memberInfos);
}