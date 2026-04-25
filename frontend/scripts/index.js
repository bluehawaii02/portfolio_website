

const items = [
  { label: 'React', color: '#378ADD' },
  { label: 'JavaScript', color: '#BA7517' },
  { label: 'Node.js', color: '#1D9E75' },
  { label: 'TypeScript', color: '#378ADD' },
  { label: 'React Native', color: '#D85A30' },
  { label: 'MongoDB', color: '#1D9E75' },
  { label: 'Express.js', color: '#7F77DD' },
  { label: 'REST APIs', color: '#D85A30' },
  { label: 'Flutter', color: '#378ADD' },
  { label: 'PostgreSQL', color: '#378ADD' },
  { label: 'Git & GitHub', color: '#BA7517' },
  { label: 'Docker', color: '#378ADD' },
  { label: 'Tailwind CSS', color: '#1D9E75' },
  { label: 'GraphQL', color: '#7F77DD' },
  { label: 'Firebase', color: '#BA7517' },
  { label: 'Next.js', color: '#7F77DD' },
];
const track = document.getElementById('ticker');
const renderItems = list => list.map(i =>
  `<div class="ticker-item"><span class="ticker-dot" style="background:${i.color}"></span>${i.label}</div>`
).join('');
function fillTicker() {
  const sw = window.innerWidth;
  track.innerHTML = renderItems(items);
  const single = track.scrollWidth;
  const copies = Math.ceil((sw * 3) / single) + 2;
  let html = '';
  for (let i = 0; i < copies; i++) html += renderItems(items);
  track.innerHTML = html + html;
  const half = track.scrollWidth / 2;
  track.style.animationDuration = (half / sw * 15) + 's';
}
fillTicker();
window.addEventListener('resize', fillTicker);

const form = document.querySelector("#two-form");


form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const username = document.querySelector("#name-form").value.trim();
  const userMail = document.querySelector("#email-form").value.trim();
  const userMessage = document.querySelector("#textarea-shit").value;
  const userUpdate = document.querySelector("#error-message");

  fetch(`${window.API_URL}/messages`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name:username,
      email:userMail,
      message:userMessage
    })
  })
  .then(res=> {
    if(!res.ok) throw new Error('request failed');
    return res.json();
  })
  .then(data => {
    console.log(data);
    userUpdate.textContent = data.message;
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert('error sending message');
  })
});

const projects = document.querySelectorAll(".project1");



projects.forEach(project => {
  const id = project.dataset.id;

  const likeIcon = project.querySelector(".fa-thumbs-up");
  const likeCount = project.querySelector(".likes");

  likeIcon.addEventListener("click", ()=>{
    fetch(`${window.API_URL}/projects/${id}/like`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      likeCount.textContent = data.likes
    })
    .catch(error => {
      console.log(error)
    })
  })

  const dislikeIcon = project.querySelector(".fa-thumbs-down");
  const dislikeCount = project.querySelector(".dislikes");

  dislikeIcon.addEventListener("click", ()=>{
    fetch(`${window.API_URL}/${id}/dislike`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data =>{
      dislikeCount.textContent = data.dislikes
    })
    .catch(error =>{
      console.log(error);
    })
  })
});

window.addEventListener("DOMContentLoaded", ()=>{
  fetch(`${window.API_URL}/projects`, {
    method: 'GET',
  })
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.forEach(project => {
      const projectDiv = document.querySelector(`[data-id = "${project._id}"]`);

      if(!projectDiv) return;


      const likeCount = projectDiv.querySelector(".likes");
      const dislikes = projectDiv.querySelector(".dislikes");

      likeCount.textContent = project.likes;
      dislikes.textContent = project.dislikes;
    })
  })
  .catch(error =>{
    console.log(error);
  })
})

/*const certsButton =  document.querySelector("#certs");

certsButton.addEventListener('click', ()=> {
  document.body.style.overflowY = "hidden";
  //document.body.style.filter = "blur(2px)";

  const modalCover = document.createElement("section");
  const modal = document.createElement("img");
  const cert1 = document.createElement("div");
  const cert2 = document.createElement("div");
  const cert3 = document.createElement("div");
  const cert4 = document.createElement("div");


  document.body.appendChild(modalCover);

  modalCover.style.position = 'fixed';
  modalCover.style.top = '0';
  modalCover.style.left = '0';
  modalCover.style.zIndex = '1000';
  modalCover.style.backgroundColor = "rgba(20, 20, 200, .3)";
  modalCover.style.width = "100vw";
  modalCover.style.height = "100vh";
  modalCover.style.display = "flex";
  modalCover.style.flexDirection = "row";
  modalCover.style.justifyContent = "center";
  modalCover.style.alignItems = "center";

  modalCover.appendChild(modal);

  modal.style.width = "60%";
  modal.style.height = "50%"
  modal.style.backgroundColor = "rgba(6, 9, 16, 1)"
  modal.style.borderRadius = "10px";
  modal.style.display = "flex";
  modal.style.flexDirection = "row";
  modal.style.justifyContent = "center";
  modal.style.gap = "10px";
  modal.style.padding = "10px"

  modal.append(cert1, cert2, cert3, cert4);

  const allCerts = [cert1, cert2, cert3, cert4];

  allCerts.forEach(cert => {
    cert.style.backgroundColor = 'white';
    cert.style.width = '30%';
    cert.style.height = '30%';
  })
})*/

const certsButton = document.querySelector("#certs");

certsButton.addEventListener("click", ()=>{
  const modalCover = document.querySelector("#modalcover");
  //const modal = document.querySelector("#modal");
  const closeIcon = document.querySelector(".fa-x");

  if(modalCover.style.display === 'none'){
    modalCover.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
    closeIcon.addEventListener("click", ()=>{
      modalCover.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    })
  }else{
    modalCover.style.display = 'none';
  }
});

const dropIcon = document.querySelector("#dropIcon");
const dropContent = document.querySelector("#dropdown");

if(dropContent && dropIcon){
  dropIcon.addEventListener("click", ()=>{
    if(dropContent.style.display == 'none'){
      dropContent.style.display = 'flex';
      dropContent.style.flexDirection = 'column'
    }
    else{
      dropContent.style.display = 'none'
    }
  })
};

const buttons = document.querySelectorAll(".inq-btn");

buttons.forEach(button => {
  button.addEventListener("click", ()=>{
    document.location = '#contact'
  })
})