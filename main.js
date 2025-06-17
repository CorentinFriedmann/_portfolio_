// === main.js mis à jour avec réflexions ===

const allACs = [
    "AC11.01", "AC11.02", "AC11.03", "AC11.04", "AC11.05",
    "AC12.01", "AC12.02", "AC12.03", "AC12.04", "AC12.05",
    "AC13.01", "AC13.02", "AC13.03", "AC13.04", "AC13.05", "AC13.06"
];

const acDescriptions = {
    "AC11.01": "Lois fondamentales de l’électricité pour le matériel.",
    "AC11.02": "Architecture & bases des systèmes numériques.",
    "AC11.03": "Configurer et exploiter un réseau local.",
    "AC11.04": "Installer, configurer et sécuriser un OS.",
    "AC11.05": "Cybersécurité et hygiène informatique.",
    "AC12.01": "Protocoles, modèles et adressage réseau.",
    "AC12.02": "Mesurer et caractériser des signaux.",
    "AC12.03": "Analyser un dispositif de transmission.",
    "AC12.04": "Intégrer une solution de communication.",
    "AC12.05": "Restituer des informations en présentation.",
    "AC13.01": "Hygiène numérique et prévention.",
    "AC13.02": "Traitement et analyse de données.",
    "AC13.03": "Projet de groupe collaboratif.",
    "AC13.04": "Documentation technique.",
    "AC13.05": "Adaptation des données aux outils.",
    "AC13.06": "Organisation et outils collaboratifs."
};

const projets = [
  {
    titre: "SAE1.02 – S’initier aux Réseaux Informatiques",
    ac: ["AC11.02", "AC12.01"],
    description: "Configuration d'un réseau local simple, tests d'adressage, découverte du matériel et d'outils comme Packet Tracer.",
    reflexion: "Cette SAE m'a permis de me familiariser avec l'adressage IP, la configuration de commutateurs, et la logique d'une architecture réseau. J'ai travaillé en binôme pour résoudre des cas d'erreurs courants, ce qui m'a renforcé en diagnostic et résolution de problèmes réseau. C'était ma première véritable immersion dans un environnement réseau technique.",
    github: "https://github.com/TonUtilisateur/sae102-reseaux"
  },
  {
    titre: "SAE1.03 – Dispositif de Transmission",
    ac: ["AC12.03"],
    description: "Etude et manipulation de dispositifs de transmission comme les fibres optiques ou le Wi-Fi.",
    reflexion: "J'ai dû réaliser des mesures et interpréter des caractéristiques physiques comme l'atténuation ou la bande passante. Cette SAE m'a sensibilisé à l'importance des supports dans les transmissions. J'ai aussi développé ma rigueur dans la manipulation du matériel de mesure.",
    github: "https://github.com/TonUtilisateur/sae103-dispositif"
  },
  {
    titre: "SAE1.04 – Créer son identité numérique",
    ac: ["AC12.05"],
    description: "Création d'une page web personnelle présentant mon parcours, mes compétences et ma formation.",
    reflexion: "J'ai dû apprendre les bases du HTML/CSS et structurer un contenu adapté à une présentation web. J'ai réalisé l'importance de soigner la forme et le fond pour présenter mes compétences efficacement. Cela m'a également sensibilisé à l'accessibilité et à l'ergonomie.",
    github: "https://github.com/TonUtilisateur/sae104-presentation"
  },
  {
    titre: "SAE1.05 – Traitement de Données",
    ac: ["AC13.02"],
    description: "Mise en pratique d'outils pour traiter, trier et analyser un jeu de données.",
    reflexion: "J'ai utilisé Python et des bibliothèques comme pandas pour extraire des tendances et manipuler des fichiers CSV. J'ai appris à structurer un script propre et réutilisable. C'était aussi ma première approche de l'automatisation.",
    github: "https://github.com/TonUtilisateur/sae105-donnees"
  },
  {
    titre: "SAE2.01 – Conception d'un réseau",
    ac: ["AC11.03", "AC13.04"],
    description: "Projet de création et configuration d'un réseau complet pour une petite entreprise.",
    reflexion: "J'ai rédigé une documentation technique précise, réalisé des schémas, et mis en œuvre des tests de connectivité. Cette SAE m'a permis de mieux comprendre les défis de déploiement d'un réseau réel et l’importance d’une bonne préparation.",
    github: "https://github.com/TonUtilisateur/sae201-reseau"
  }
];

function badgeAC(ac) {
    return `<span class="ac-badge" title="${acDescriptions[ac] || ac}" onclick="filterByAC('${ac}')">${ac}</span>`;
}

function renderACCloud() {
    document.getElementById('ac-cloud').innerHTML = allACs.map(ac => badgeAC(ac)).join('');
}

function renderProjets(filteredAC = null) {
    const projDiv = document.getElementById('projets-list');
    let filtered = projets;
    if (filteredAC) filtered = projets.filter(p => p.ac && p.ac.includes(filteredAC));
    if (filtered.length === 0) {
        projDiv.innerHTML = `<div style="text-align:center;margin:44px 0;font-size:1.25em;">Aucun projet ne valide cette compétence pour l'instant.</div>`;
        return;
    }
    projDiv.innerHTML = filtered.map(p => `
        <div class="projet-card">
            <div class="projet-info">
                <b>${p.titre}</b>
                <div>${p.description}</div>
                <div class="projet-reflexion"><i class="fa fa-lightbulb"></i> ${p.reflexion}</div>
                <div class="projet-tags">${p.ac.map(a => badgeAC(a)).join('')}</div>
                <a href="${p.github}" target="_blank" class="btn" style="margin-top:14px;"><i class="fa-brands fa-github"></i> Preuve GitHub</a>
            </div>
        </div>
    `).join('');
}

function renderGrille() {
    let html = `<table class="grille-ac-sae"><thead><tr><th>AC \ SAE</th>`;
    projets.forEach(p => html += `<th>${p.titre}</th>`);
    html += `</tr></thead><tbody>`;
    allACs.forEach(ac => {
        html += `<tr><td><b title="${acDescriptions[ac] || ac}">${ac}</b></td>`;
        projets.forEach(p => {
            html += `<td style="text-align:center;">${p.ac.includes(ac) ? `<span class="grille-dot" title="Preuve via ${p.titre}" onclick="window.open('${p.github}','_blank')"></span>` : ''}</td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('grille-table').innerHTML = html;
}

function filterByAC(ac) {
    renderProjets(ac);
    window.scrollTo({ top: document.getElementById('projets').offsetTop - 40, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('export-pdf').onclick = () => { window.print(); };
});

window.onload = function () {
    renderACCloud();
    renderProjets();
    renderGrille();
};
