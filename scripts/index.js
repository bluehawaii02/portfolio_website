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