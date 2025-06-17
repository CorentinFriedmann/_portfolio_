// === LISTE DES 18 AC OFFICIELLES ===
const allACs = [
    "AC11.01", "AC11.02", "AC11.03", "AC11.04", "AC11.05",
    "AC12.01", "AC12.02", "AC12.03", "AC12.04", "AC12.05",
    "AC13.01", "AC13.02", "AC13.03", "AC13.04", "AC13.05", "AC13.06",
    "AC14.01", "AC14.02" // Mets ici toutes tes AC, adapte si besoin
];

// === DESCRIPTIONS COURTES (exemple, à personnaliser) ===
const acDescriptions = {
    "AC11.01": "Lois fondamentales de l’électricité pour le matériel.",
    "AC11.02": "Architecture & bases des systèmes numériques.",
    "AC11.03": "Configurer et exploiter un réseau local.",
    "AC11.04": "Installer, configurer et sécuriser un système d’exploitation.",
    "AC11.05": "Cybersécurité et hygiène informatique.",
    "AC12.01": "Architectures réseau, protocoles et adressage.",
    "AC12.02": "Mesurer et caractériser les signaux.",
    "AC12.03": "Découvrir un dispositif de transmission.",
    "AC12.04": "VoIP et intégration de solutions réseaux.",
    "AC12.05": "Communication écrite et orale, présentation.",
    "AC13.01": "Sensibilisation sécurité info & orga.",
    "AC13.02": "Développement et traitement des données.",
    "AC13.03": "Travailler en équipe, projet intégratif.",
    "AC13.04": "Documenter, restituer, présentation.",
    "AC13.05": "Gestion de données adaptée à l’outil.",
    "AC13.06": "S’intégrer à un environnement collaboratif.",
    "AC14.01": "AC optionnelle 1.",
    "AC14.02": "AC optionnelle 2."
};

// === LISTE DE TES SAÉ/PROJETS (adapte si tu veux en rajouter/supprimer) ===
const projets = [
    {
        titre: "SAE1.02 – S’initier aux Réseaux Informatiques",
        ac: ["AC11.02", "AC12.01"],
        description: "Premiers pas dans les réseaux informatiques, configuration, adressage, manipulation du matériel.",
        github: "https://github.com/TonUtilisateur/sae102-reseaux"
    },
    {
        titre: "SAE1.03 – Découvrir un dispositif de transmission",
        ac: ["AC12.03"],
        description: "Découverte, analyse et expérimentation autour des dispositifs de transmission (ex : Wi-Fi, Ethernet…).",
        github: "https://github.com/TonUtilisateur/sae103-dispositif"
    },
    {
        titre: "SAE1.04 – Se présenter sur Internet",
        ac: ["AC12.05"],
        description: "Création d’un portfolio ou page web pour se présenter et valoriser ses compétences.",
        github: "https://github.com/TonUtilisateur/sae104-presentation"
    },
    {
        titre: "SAE1.05 – Traiter les données",
        ac: ["AC13.02"],
        description: "Mise en œuvre d’outils ou de scripts pour manipuler et traiter des données informatiques.",
        github: "https://github.com/TonUtilisateur/sae105-donnees"
    },
    {
        titre: "SAE11 – Hygiène Informatique",
        ac: ["AC11.05", "AC13.01"],
        description: "Sensibilisation et application des bonnes pratiques en cybersécurité et hygiène informatique.",
        github: "https://github.com/TonUtilisateur/sae11-hygiene"
    },
    {
        titre: "SAE2.01 – Construire un réseau",
        ac: ["AC11.03", "AC13.04"],
        description: "Réalisation d’un projet de conception et mise en place d’un réseau informatique complet.",
        github: "https://github.com/TonUtilisateur/sae201-construire-reseau"
    },
    {
        titre: "SAE2.02 – Mesurer et caractériser un signal",
        ac: ["AC12.02"],
        description: "Analyse de signaux, manipulation d’oscilloscope, compréhension des caractéristiques des transmissions.",
        github: "https://github.com/TonUtilisateur/sae202-signal"
    },
    {
        titre: "SAE2.04 – Projet intégratif",
        ac: ["AC12.04", "AC13.03"],
        description: "Projet global permettant de mobiliser l’ensemble des compétences du semestre : réseau, signal, dev, cybersécurité…",
        github: "https://github.com/TonUtilisateur/sae204-projet-integratif"
    }
];

// === FONCTION POUR LES BADGES AC CLIQUABLES (pour filtrer) ===
function badgeAC(ac) {
    return `<span class="ac-badge" title="${acDescriptions[ac] || ac}" onclick="filterByAC('${ac}')">${ac}</span>`;
}

// === INJECTION DU CLOUD DE BADGES AC (filtre dynamique) ===
function renderACCloud() {
    document.getElementById('ac-cloud').innerHTML = allACs.map(ac => badgeAC(ac)).join('');
}

// === AFFICHAGE DES PROJETS/SAÉ AVEC BADGES AC ===
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
                <div class="projet-tags">
                    ${p.ac.map(a => badgeAC(a)).join('')}
                </div>
                <a href="${p.github}" target="_blank" class="btn" style="margin-top:14px;">
                    <i class="fa-brands fa-github"></i> Preuve GitHub
                </a>
            </div>
        </div>
    `).join('');
}

// === FILTRE SUR LES BADGES AC ===
function filterByAC(ac) {
    renderProjets(ac);
    window.scrollTo({top: document.getElementById('projets').offsetTop - 40, behavior: 'smooth'});
}

// === GRILLE AC × SAE INTERACTIVE ===
function renderGrille() {
    // Récupère toutes les AC utilisées au moins une fois (ou affiche tout si tu veux la grille complète)
    // Pour toutes les AC, même si non couvertes :
    let html = `<table class="grille-ac-sae"><thead><tr><th>AC \\ SAE</th>`;
    projets.forEach(p => html += `<th>${p.titre}</th>`);
    html += `</tr></thead><tbody>`;
    allACs.forEach(ac => {
        html += `<tr><td><b title="${acDescriptions[ac] || ac}">${ac}</b></td>`;
        projets.forEach(p => {
            html += `<td style="text-align:center;">${
                (p.ac.includes(ac))
                ? `<span class="grille-dot" title="Preuve via ${p.titre}" onclick="window.open('${p.github}','_blank')"></span>`
                : ''
            }</td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('grille-table').innerHTML = html;
}

// === GADGETS ===
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('export-pdf').onclick = () => { window.print(); };
});

// FOND ANIMÉ
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

// === INITIALISATION ===
window.onload = function () {
    renderACCloud();
    renderProjets();
    renderGrille();
};
