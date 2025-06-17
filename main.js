// ------------------------------
// EFFET 3D GLOBAL SUR BODY (mouvement souris)
// ------------------------------

// ------------------------------
// DONNEES AC ET PROJETS
// ------------------------------
const acDomain = {
  admin: ["AC11.01", "AC11.02", "AC11.03", "AC11.04", "AC11.05", "AC11.06"],
  connect: ["AC12.01", "AC12.02", "AC12.03", "AC12.04", "AC12.05"],
  prog: ["AC13.01", "AC13.02", "AC13.03", "AC13.04", "AC13.05", "AC13.06"]
};
const allACs = [...acDomain.admin, ...acDomain.connect, ...acDomain.prog];

const acDescriptions = {
  "AC11.01": "Maîtriser les lois fondamentales de l’électricité pour intervenir sur des équipements de réseau",
  "AC11.02": "Comprendre l’architecture et les fondements des systèmes numériques, le codage et l’Internet",
  "AC11.03": "Configurer les fonctions de base du réseau local",
  "AC11.04": "Maîtriser les systèmes d’exploitation pour administrer un réseau",
  "AC11.05": "Identifier les dysfonctionnements du réseau local et savoir les signaler",
  "AC11.06": "Installer un poste client, expliquer la procédure mise en place",
  "AC12.01": "Mesurer, analyser et commenter les signaux",
  "AC12.02": "Caractériser des systèmes de transmission",
  "AC12.03": "Déployer des supports de transmission",
  "AC12.04": "Connecter les systèmes de ToIP",
  "AC12.05": "Communiquer avec un tiers, adapter son discours",
  "AC13.01": "Utiliser un système informatique et ses outils",
  "AC13.02": "Lire, exécuter, corriger et modifier un programme",
  "AC13.03": "Traduire un algorithme dans un langage",
  "AC13.04": "Connaître l’architecture et les technologies d’un site Web",
  "AC13.05": "Choisir les mécanismes de gestion de données",
  "AC13.06": "S’intégrer dans un environnement collaboratif"
};

const projets = [
  {
    titre: "SAE1.02 – S’initier aux Réseaux Informatiques",
    ac: ["AC11.02", "AC12.01"],
    description: "Configuration d'un réseau local simple, tests d'adressage, découverte du matériel et d'outils comme Packet Tracer.",
    reflexion: "Cette SAE m'a permis de me familiariser avec l'adressage IP, la configuration de commutateurs, et la logique d'une architecture réseau. J'ai travaillé en binôme pour résoudre des cas d'erreurs courants, ce qui m'a renforcé en diagnostic réseau.",
    role: "Binôme (configuration, tests, résolution de problèmes réseau)",
    outils: "Packet Tracer, Switchs Cisco, câblage",
    difficulte: "Prise en main de Packet Tracer, logique de résolution d’erreurs IP.",
    images: ["img/sae102-1.jpg"],
    github: "https://github.com/TonUtilisateur/sae102-reseaux"
  },
  {
    titre: "SAE1.03 – Dispositif de Transmission",
    ac: ["AC12.03"],
    description: "Étude et manipulation de dispositifs de transmission comme les fibres optiques ou le Wi-Fi.",
    reflexion: "J'ai dû réaliser des mesures et interpréter des caractéristiques physiques comme l'atténuation ou la bande passante. Cette SAE m'a sensibilisé à l’importance des supports dans les transmissions.",
    role: "Travail pratique (mesures, tests, rapport)",
    outils: "Oscilloscope, fibre optique, bornes Wi-Fi",
    difficulte: "Analyse fine des mesures, rigueur dans le protocole expérimental.",
    images: [],
    github: "https://github.com/TonUtilisateur/sae103-dispositif"
  },
  {
    titre: "SAE1.04 – Créer son identité numérique",
    ac: ["AC12.05"],
    description: "Création d'une page web personnelle présentant mon parcours, mes compétences et ma formation.",
    reflexion: "J'ai appris les bases du HTML/CSS et structuré un contenu adapté à une présentation web. Importance de l'accessibilité et de l’ergonomie.",
    role: "Concepteur, développeur web",
    outils: "HTML, CSS, éditeur VS Code",
    difficulte: "Responsive design et choix graphiques accessibles.",
    images: ["img/sae104-1.png"],
    github: "https://github.com/TonUtilisateur/sae104-presentation"
  },
  {
    titre: "SAE2.01 – Conception d'un réseau",
    ac: ["AC11.03", "AC13.04"],
    description: "Projet de création et configuration d'un réseau complet pour une petite entreprise.",
    reflexion: "J'ai rédigé une documentation technique précise, réalisé des schémas et mis en œuvre des tests de connectivité. Cette SAE m’a permis de mieux comprendre les défis du déploiement réseau.",
    role: "Chef de projet, documentation, schématisation",
    outils: "Packet Tracer, GNS3, Word, PowerPoint",
    difficulte: "Gestion du temps, synthèse des résultats.",
    images: ["img/sae201-1.jpg"],
    github: "https://github.com/TonUtilisateur/sae201-reseau"
  },
  {
    titre: "SAE2.04 – Projet intégratif",
    ac: ["AC12.04", "AC13.03"],
    description: "Projet global mobilisant les compétences du semestre (réseau, signal, dev, cybersécurité…).",
    reflexion: "Coordination de groupe et gestion de projet m'ont permis de mettre en œuvre de nombreuses compétences transverses. Travail en équipe et reporting régulier.",
    role: "Coordinateur d’équipe, gestion projet",
    outils: "Git, Trello, GNS3, Packet Tracer",
    difficulte: "Répartition des tâches, respect des délais.",
    images: [],
    github: "https://github.com/TonUtilisateur/sae204-projet-integratif"
  }
];

// ------------------------------
// RENDERING DES BADGES AC
// ------------------------------
function badgeAC(ac) {
  const dom = Object.keys(acDomain).find(d => acDomain[d].includes(ac));
  return `<span class="ac-badge ${dom}" title="${acDescriptions[ac] || ac}" onclick="filterByAC('${ac}')">${ac}</span>`;
}

function renderACCloud(list = allACs) {
  document.getElementById('ac-cloud').innerHTML = list.map(ac => badgeAC(ac)).join('');
}

// ------------------------------
// FILTRES DOMAINE
// ------------------------------
function filterDomain(domain) {
  document.querySelectorAll('.domain-filters button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  let list = (domain === 'all') ? allACs : acDomain[domain];
  renderACCloud(list);
  renderProjets();
  renderGrille();
}

// ------------------------------
// AFFICHAGE PROJETS / SAE
// ------------------------------
function renderProjets(filteredAC = null) {
  const projDiv = document.getElementById('projets-list');
  let filtered = projets;
  if (filteredAC) filtered = projets.filter(p => p.ac && p.ac.includes(filteredAC));
  if (filtered.length === 0) {
    projDiv.innerHTML = `<div style="text-align:center;margin:44px 0;font-size:1.25em;">Aucun projet ne valide cette compétence pour l’instant.</div>`;
    return;
  }
  projDiv.innerHTML = filtered.map(p => `
    <div class="projet-card">
      <div class="projet-info">
        <b>${p.titre}</b>
        <div>${p.description}</div>
        <div class="projet-meta">
          <span><b>Rôle :</b> ${p.role}</span>
          <span><b>Outils :</b> ${p.outils}</span>
          <span><b>Difficultés :</b> ${p.difficulte}</span>
        </div>
        <div class="projet-reflexion">${p.reflexion}</div>
        ${p.images.length ? `<div class="projet-multimedia">${p.images.map(img => `<img src="${img}" alt="">`).join('')}</div>` : ''}
        <div class="projet-tags">${p.ac.map(a => badgeAC(a)).join('')}</div>
        <a href="${p.github}" target="_blank" class="btn" style="margin-top:14px;">
          Preuve GitHub
        </a>
      </div>
    </div>
  `).join('');
}

// ------------------------------
// GRILLE AC x PROJETS
// ------------------------------
function renderGrille() {
  let html = `<table class="grille-ac-sae"><thead><tr><th>AC \\ SAE</th>`;
  projets.forEach(p => html += `<th>${p.titre}</th>`);
  html += `</tr></thead><tbody>`;
  allACs.forEach(ac => {
    html += `<tr><td><b title="${acDescriptions[ac] || ac}">${ac}</b></td>`;
    projets.forEach(p => {
      html += `<td style="text-align:center;">${
        (p.ac.includes(ac)) ?
        `<span class="grille-dot" title="Preuve via ${p.titre}" onclick="window.open('${p.github}','_blank')"></span>`
        : ''}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table>`;
  document.getElementById('grille-table').innerHTML = html;
}

// ------------------------------
// MINI GRAPHIQUE D3 : PROGRESSION SAE
// ------------------------------
function renderChart() {
  document.getElementById('chart').innerHTML = "";
  const data = [
    { dom: "Administrer", count: projets.filter(p => p.ac.some(a => acDomain.admin.includes(a))).length },
    { dom: "Connecter", count: projets.filter(p => p.ac.some(a => acDomain.connect.includes(a))).length },
    { dom: "Programmer", count: projets.filter(p => p.ac.some(a => acDomain.prog.includes(a))).length }
  ];
  const w = 350, h = 200, barw = 70;
  const svg = d3.select("#chart").append("svg")
    .attr("width", w).attr("height", h);

  svg.selectAll("rect")
    .data(data).enter()
    .append("rect")
    .attr("x", (d, i) => i * (barw+30) + 50)
    .attr("y", d => h - d.count*30 - 40)
    .attr("width", barw)
    .attr("height", d => d.count*30)
    .attr("fill", (d, i) => ["#FF6F61", "#6BAED6", "#45B880"][i])
    .attr("rx", 10);

  svg.selectAll("text")
    .data(data).enter()
    .append("text")
    .text(d => `${d.dom}\n(${d.count})`)
    .attr("x", (d, i) => i * (barw+30) + 85)
    .attr("y", h - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", 16);
}

// ------------------------------
// FOND ANIME PARTICULES
// ------------------------------
(function particlesBG() {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  canvas.style.position = 'absolute';
  document.getElementById('webgl-container').appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const dots = Array.from({length: 105}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.7,
      dx: Math.random()*0.3 + 0.1,
      dy: Math.random()*0.3 + 0.1,
      color: `rgba(${Math.floor(Math.random()*100+155)},${Math.floor(Math.random()*200+55)},252,0.18)`
  }));
  function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      dots.forEach(dot=>{
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI*2);
          ctx.fillStyle = dot.color;
          ctx.fill();
          dot.x += dot.dx * (Math.random() > 0.5 ? 1 : -1);
          dot.y += dot.dy * (Math.random() > 0.5 ? 1 : -1);
          if(dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
          if(dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });
      requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', ()=>{
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  });
})();

// ------------------------------
// INTERACTIONS ET INITIALISATION
// ------------------------------
function filterByAC(ac) {
  renderProjets(ac);
  window.scrollTo({top: document.getElementById('projets').offsetTop - 40, behavior: 'smooth'});
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('export-pdf').onclick = () => { window.print(); };
});

// Loader page (masque le spinner après chargement)
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) loader.style.display = 'none';
});

// Tilt effet sur chaque section .tilt-section


// ------------------------------
// INITIALISATION TOUT AFFICHER
// ------------------------------
window.onload = function () {
  renderACCloud();
  renderProjets();
  renderGrille();
  renderChart();
};
