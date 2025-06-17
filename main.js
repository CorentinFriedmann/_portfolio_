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

const acTextesLongs = {
  "AC11.01": `
    <p>
      <strong>Maîtriser les lois fondamentales de l’électricité pour intervenir sur des équipements de réseau</strong><br>
      Cette compétence est essentielle car l’électricité est à la base du fonctionnement de tous les équipements numériques et réseaux. Elle permet de comprendre la sécurité, la maintenance, l’alimentation, et le diagnostic d’incidents sur le matériel. La maîtrise des bases électriques garantit d’éviter les erreurs de branchement et d’intervenir sereinement lors d’installations réseau ou de réparations.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Ateliers de travaux pratiques</b> :<br>
        Lors des séances en laboratoire, j’ai appris à manipuler des appareils de mesure, à lire des schémas électriques et à appliquer les règles de sécurité. J’ai compris les principes de courant, tension, résistance, ainsi que l’importance d’un câblage soigné. Ces notions sont devenues naturelles lors de mes interventions sur du matériel réseau.
      </li>
    </ul>
  `,
  "AC11.02": `
    <p>
      <strong>Comprendre l’architecture et les fondements des systèmes numériques, le codage et l’Internet</strong><br>
      Cette compétence est indispensable pour saisir comment fonctionnent les ordinateurs, les réseaux et les applications web. Elle englobe le binaire, le codage de l’information, les protocoles Internet (TCP/IP), la logique matérielle, et l’organisation des systèmes numériques. Cela permet de mieux diagnostiquer, configurer et optimiser un environnement informatique.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE1.02 – S’initier aux Réseaux Informatiques</b><br>
        Grâce à cette SAE, j’ai appris à configurer un réseau local et à comprendre les différentes couches du modèle OSI. J’ai utilisé EVE_NG pour simuler des architectures et expérimenter les bases du routage et du commutateur. Cela m’a permis d’ancrer les connaissances vues en cours dans des situations pratiques.
        <br>
        <a href="https://github.com/CorentinFriedmann/eve_ng" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC11.03": `
    <p>
      <strong>Configurer les fonctions de base du réseau local</strong><br>
      Savoir configurer un réseau local, c’est garantir la bonne communication entre les machines. Cela inclut l’attribution d’adresses IP, la configuration des switchs et routeurs, le paramétrage du DHCP, et la vérification des connexions physiques et logiques. Cette compétence est au cœur du métier d’administrateur réseau.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE2.01 – Conception d'un réseau</b><br>
        Durant ce projet, j’ai mis en place un réseau local complet pour une entreprise fictive : planification d’adressage IP, configuration des équipements et tests de connectivité. J’ai aussi produit de la documentation technique pour garantir la pérennité de l’infrastructure.
        <br>
        <a href="https://github.com/CorentinFriedmann/GNS3" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC11.04": `
    <p>
      <strong>Maîtriser les systèmes d’exploitation pour administrer un réseau</strong><br>
      Administrer un réseau nécessite une parfaite connaissance des systèmes d’exploitation (Windows, Linux). Il faut savoir installer, configurer, sécuriser les postes et les serveurs, gérer les utilisateurs et les droits, et automatiser certaines tâches pour gagner du temps et fiabiliser l’exploitation.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Projets d'installation de postes clients</b><br>
        J’ai installé des OS sur plusieurs machines, paramétré des scripts de connexion, configuré des partages réseau et géré les droits d’accès. Cela m’a permis de mieux comprendre l’interaction entre système et réseau.
      </li>
    </ul>
  `,
  "AC11.05": `
    <p>
      <strong>Identifier les dysfonctionnements du réseau local et savoir les signaler</strong><br>
      Cette compétence permet de diagnostiquer rapidement les incidents réseau : coupure de service, problème d’accès, perte de connectivité, etc. Elle implique aussi de savoir rédiger un rapport clair et précis pour les équipes techniques ou le support.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE1.02 – S’initier aux Réseaux Informatiques</b><br>
        J’ai dû analyser et corriger différents scénarios de panne, comme des conflits d’adressage IP ou des erreurs de câblage. J’ai rédigé des comptes-rendus structurés afin de décrire chaque problème et sa résolution, ce qui a renforcé ma capacité à communiquer efficacement.
        <br>
        <a href="https://github.com/CorentinFriedmann/eve_ng" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC11.06": `
    <p>
      <strong>Installer un poste client, expliquer la procédure mise en place</strong><br>
      Installer un poste client, c’est garantir qu’un nouvel utilisateur pourra travailler sans souci : installation du système, des logiciels, des accès réseau, et accompagnement pour l’utilisation. Expliquer la démarche montre la maîtrise et l’autonomie sur le poste.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Projets pratiques – Installation de postes</b><br>
        J’ai suivi une méthodologie stricte pour préparer, installer et configurer des postes utilisateurs. J’ai documenté chaque étape pour pouvoir transmettre le savoir-faire à un collègue ou à un nouvel arrivant.
      </li>
    </ul>
  `,
  "AC12.01": `
    <p>
      <strong>Mesurer, analyser et commenter les signaux</strong><br>
      Analyser les signaux, c’est comprendre comment l’information circule dans un réseau : mesure de l’atténuation, du bruit, analyse des oscillogrammes, etc. Cette compétence permet de garantir la qualité des communications numériques.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE1.03 – Découvrir un dispositif de transmission</b><br>
        
        <br>
        <a href="https://github.com/CorentinFriedmann/wifi" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC12.02": `
    <p>
      <strong>Caractériser des systèmes de transmission</strong><br>
      Cette compétence vise à comparer différents supports de transmission : cuivre, fibre, Wi-Fi, etc. Elle permet d’adapter le choix du support au besoin réel et de comprendre les limites de chaque technologie.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Travaux pratiques en laboratoire</b><br>
        J’ai testé différents supports et réalisé des mesures pour déterminer leurs propriétés (débit, portée, atténuation). J’ai ensuite rédigé des rapports comparatifs pour présenter les atouts et les faiblesses de chaque solution.
      </li>
    </ul>
  `,
  "AC12.03": `
    <p>
      <strong>Déployer des supports de transmission</strong><br>
      Savoir déployer des supports (câbles, fibre optique, liaisons sans fil) est un prérequis pour toute installation réseau. Cela implique aussi la préparation du matériel, le respect des normes, et la réalisation de tests de validation.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE1.03 – Dispositif de Transmission</b><br>
        J’ai participé à l’installation de câblage, à la mise en œuvre de la fibre optique et à la validation des connexions par des tests. Ce travail de terrain m’a appris la rigueur et l’importance de chaque étape du déploiement.
        <br>
        <a href="https://github.com/CorentinFriedmann/wifi" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC12.04": `
    <p>
      <strong>Connecter les systèmes de ToIP</strong><br>
      La ToIP (Téléphonie sur IP) est aujourd’hui incontournable : comprendre son fonctionnement, configurer les équipements, assurer la qualité de service, voilà les enjeux de cette compétence.
    </p>
    
  `,
  "AC12.05": `
    <p>
      <strong>Communiquer avec un tiers, adapter son discours</strong><br>
      Il est crucial de savoir expliquer un problème technique ou une solution à un collègue, un client, ou un supérieur hiérarchique. Savoir vulgariser, s’adapter à l’interlocuteur, c’est aussi savoir écouter, reformuler, et transmettre clairement l’information.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE1.04 – Créer son identité numérique</b><br>
        J’ai conçu une page web pour présenter mon parcours, mes compétences et mes expériences. Ce travail m’a appris à organiser mes idées, à choisir un vocabulaire accessible, et à penser à l’utilisateur final dans ma communication écrite.
        <br>
        <a href="https://github.com/CorentinFriedmann/se_presenter" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC13.01": `
    <p>
      <strong>Utiliser un système informatique et ses outils</strong><br>
      Savoir utiliser efficacement un ordinateur, ses logiciels, et ses outils de travail collaboratif est indispensable dans tous les métiers de l’informatique. Cela englobe l’utilisation d’un système d’exploitation, d’un éditeur de texte, des outils de sauvegarde, etc.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Utilisation quotidienne en cours et en projet</b><br>
        J’ai renforcé ma maîtrise des outils bureautiques, des éditeurs de code, des gestionnaires de versions comme Git, et j’ai su les adapter à chaque contexte professionnel rencontré.
      </li>
    </ul>
  `,
  "AC13.02": `
    <p>
      <strong>Lire, exécuter, corriger et modifier un programme</strong><br>
      Cette compétence est le socle du métier de développeur. Elle permet de comprendre un code existant, d’identifier des bugs, d’apporter des améliorations ou des corrections, et de le tester dans des conditions variées.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Projets de programmation en TP</b><br>
        J’ai été confronté à des codes incomplets ou contenant des erreurs. J’ai su les relire, comprendre la logique, corriger les fautes et optimiser certains traitements pour les rendre plus performants ou plus robustes.
      </li>
    </ul>
  `,
  "AC13.03": `
    <p>
      <strong>Traduire un algorithme dans un langage</strong><br>
      Passer de l’algorithme (pseudo-code, logique) à la programmation réelle est une compétence clé pour tous les informaticiens. Elle demande rigueur, adaptation et créativité.
    </p>
  
  `,
  "AC13.04": `
    <p>
      <strong>Connaître l’architecture et les technologies d’un site Web</strong><br>
      Le développement web nécessite de connaître les langages, les protocoles, la structure des sites, et les technologies associées (HTML, CSS, JS, hébergement, etc.).
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>SAE2.01 – Conception d'un réseau</b><br>
        J’ai documenté et présenté l’architecture réseau en m’inspirant des méthodes web : création de schémas, utilisation de technologies de présentation, sensibilisation aux enjeux de l’accessibilité.
        <br>
        <a href="https://github.com/CorentinFriedmann/GNS3" target="_blank">Voir la preuve Github</a>
      </li>
    </ul>
  `,
  "AC13.05": `
    <p>
      <strong>Choisir les mécanismes de gestion de données</strong><br>
      Les données sont au cœur de l’informatique moderne. Il faut savoir choisir la bonne méthode de stockage, de sauvegarde et d’accès, en fonction du contexte et des contraintes.
    </p>
    <h4>Mon expérience :</h4>
    <ul>
      <li>
        <b>Projets de bases de données</b><br>
        J’ai travaillé sur la création de schémas de bases de données, sur le choix de solutions de gestion (SQL, fichiers plats), et sur la mise en œuvre de stratégies de sauvegarde/restauration.
      </li>
    </ul>
  `,
  "AC13.06": `
    <p>
      <strong>S’intégrer dans un environnement collaboratif</strong><br>
      Le travail en équipe est une réalité du monde professionnel. Savoir utiliser les outils collaboratifs, partager des documents, gérer un projet avec ses collègues et communiquer efficacement est indispensable.
    </p>
   
  `
};

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
    github: "https://github.com/CorentinFriedmann/se_presenter"
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
    github: "https://github.com/CorentinFriedmann/GNS3"
  },

];

// ------------------------------
// RENDERING DES BADGES AC
// ------------------------------
function badgeAC(ac) {
  const dom = Object.keys(acDomain).find(d => acDomain[d].includes(ac));
  return `<span class="ac-badge ${dom}" title="${acDescriptions[ac] || ac}" onclick="showACDetail('${ac}')">${ac}</span>`;
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
function showACDetail(ac) {
  const dom = Object.keys(acDomain).find(d => acDomain[d].includes(ac));
  const projetsForAC = projets.filter(p => p.ac.includes(ac));
  let html = `
    <div class="ac-detail-head">
      <span class="ac-badge ${dom}">${ac}</span>
      <span class="ac-name">${acDescriptions[ac] || ''}</span>
      <button onclick="closeACDetail()" class="close-btn" title="Fermer">&times;</button>
    </div>
    <div class="ac-detail-body">
      ${acTextesLongs[ac] || `
        <h4>Explication</h4>
        <div>${acDescriptions[ac] || ''}</div>
        <h4>SAÉ / Projets associés</h4>
        <ul>
          ${
            projetsForAC.length ?
            projetsForAC.map(p =>
              `<li>
                <b>${p.titre}</b> :<br>
                <span>${getAcJustification(p, ac)}</span><br>
                <a href="${p.github}" target="_blank">Voir la preuve Github</a>
              </li>`
            ).join('')
            : `<li>Aucun projet associé pour l’instant.</li>`
          }
        </ul>
      `}
    </div>
  `;
  const acDetail = document.getElementById('ac-detail');
  acDetail.innerHTML = html;
  acDetail.style.display = 'block';
  acDetail.scrollIntoView({behavior:"smooth", block:"center"});
}


function closeACDetail() {
  document.getElementById('ac-detail').style.display = 'none';
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
