fetch('data.json')
// Chargement des données JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Animation 1: Effet parallaxe
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientX / window.innerHeight;
      document.querySelector('header').style.transform = 
        `translate(${x * 20}px, ${y * 20}px)`;
    });

    // Animation 2: Fade-in progressif
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeIn 1s forwards`;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.competence-card').forEach(card => {
      observer.observe(card);
    });

    // Animation 3: Effet "flip" sur les cartes
    document.querySelectorAll('.competence-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'perspective(1000px) rotateY(180deg)';
        setTimeout(() => {
          card.style.transform = 'perspective(1000px) rotateY(0deg)';
        }, 1000);
      });
    });

    // Animation 4: Vague de couleur
    function colorWave() {
      const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];
      let i = 0;
      setInterval(() => {
        document.documentElement.style.setProperty('--primary', colors[i]);
        i = (i + 1) % colors.length;
      }, 3000);
    }
    colorWave();

    // Animation 5: Particules interactives
    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = `rgba(52, 152, 219, ${this.size/5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      const canvas = document.createElement('canvas');
      canvas.id = 'particle-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '-1';
      document.body.appendChild(canvas);
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particles = Array(50).fill().map(() => new Particle());
      
      function animate() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.update();
          p.draw();
          if (p.x < 0 || p.x > canvas.width || 
              p.y < 0 || p.y > canvas.height || p.size <= 0.2) {
            const index = particles.indexOf(p);
            particles[index] = new Particle();
          }
        });
        requestAnimationFrame(animate);
      }
      animate();
    }
    initParticles();
  })
  .catch(error => console.error('Erreur:', error));

// Animation 6: Texte machine à écrire
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const txtElement = document.querySelector('.typing');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
});

// Animation 7: Scroll progressif
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Animation 8: Effet "sticky" sur la navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 100);
});

// Animation 9: Chargement dynamique du contenu
function loadCompetences() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('competences-container');
      data.etudiant.competences.forEach(competence => {
        const card = document.createElement('div');
        card.className = 'competence-card';
        card.innerHTML = `
          <h3>${competence.titre}</h3>
          <p>${competence.description}</p>
          <div class="preuves"></div>
        `;
        container.appendChild(card);
      });
    });
}

// Animation 10: Effet "confetti" sur validation
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '9999';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const confetti = new ConfettiGenerator({
    target: canvas,
    max: 150,
    size: 1.5,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line']
  });
  confetti.render();
  setTimeout(() => {
    canvas.remove();
  }, 5000);
}

document.querySelectorAll('.validate-btn').forEach(btn => {
  btn.addEventListener('click', triggerConfetti);
}); 
// 1. Initialisation de la scène Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('webgl-container').appendChild(renderer.domElement);

// 2. Effet de particules 3D
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 5000;
const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particleMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0x00ffff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});
const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particlesMesh);

camera.position.z = 2;

// 3. Animation de la caméra
document.addEventListener('mousemove', (e) => {
    camera.position.x = (e.clientX / window.innerWidth - 0.5) * 2;
    camera.position.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    camera.lookAt(scene.position);
});

// 4. Effet Matrix (chute de caractères)
class MatrixColumn {
    constructor(x, fontSize, canvasHeight) {
        this.characters = "01アイウエオカキクケコサシスセソ";
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.speed = Math.random() * 5 + 1;
        this.column = [];
        this.initColumn();
    }

    initColumn() {
        const length = Math.floor(Math.random() * 10) + 5;
        for(let i = 0; i < length; i++) {
            this.column.push({
                char: this.characters[Math.floor(Math.random() * this.characters.length)],
                y: i * this.fontSize
            });
        }
    }

    draw(ctx) {
        ctx.fillStyle = "rgba(0, 255, 150, 0.8)";
        ctx.font = `${this.fontSize}px monospace`;
        
        this.column.forEach((charObj, index) => {
            const brightness = index === 0 ? 1 : index / this.column.length;
            ctx.fillStyle = `rgba(0, ${255 * brightness}, ${150 * brightness}, ${brightness})`;
            ctx.fillText(charObj.char, this.x, charObj.y);
            
            if(index === 0) {
                charObj.y += this.speed;
                if(charObj.y > this.canvasHeight && Math.random() > 0.95) {
                    charObj.y = 0;
                }
            } else {
                const prevChar = this.column[index - 1];
                charObj.y = prevChar.y - this.fontSize;
            }
        });
    }
}

// 5. Initialisation de l'effet Matrix
function initMatrixEffect() {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.digital-grid');
    container.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    const fontSize = 20;
    const columns = [];
    
    for(let i = 0; i < canvas.width / fontSize; i++) {
        columns.push(new MatrixColumn(i * fontSize, fontSize, canvas.height));
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        columns.forEach(col => col.draw(ctx));
        requestAnimationFrame(animate);
    }
    animate();
}

// 6. Effet Hologramme
function initHologramEffect() {
    const cards = document.querySelectorAll('.hologram-card');
    cards.forEach(card => {
        const line = card.querySelector('.hologram-line');
        let isAnimating = false;
        
        card.addEventListener('mouseenter', () => {
            if(isAnimating) return;
            isAnimating = true;
            
            gsap.to(line, {
                scaleY: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(line, {
                        scaleY: 0,
                        opacity: 0,
                        duration: 0.3,
                        delay: 0.5,
                        ease: "power2.in",
                        onComplete: () => {
                            isAnimating = false;
                        }
                    });
                }
            });
        });
        
        // Animation aléatoire
        setInterval(() => {
            if(!isAnimating && Math.random() > 0.7) {
                card.dispatchEvent(new Event('mouseenter'));
            }
        }, 3000);
    });
}

// 7. Terminal interactif
class Terminal {
    constructor(element) {
        this.element = element;
        this.lines = element.querySelectorAll('.terminal-line');
        this.currentLine = 0;
        this.init();
    }
    
    init() {
        this.typeLine(this.lines[this.currentLine]);
    }
    
    typeLine(line) {
        const text = line.getAttribute('data-text');
        let displayText = '';
        let i = 0;
        
        line.textContent = '> ';
        const typing = setInterval(() => {
            if(i < text.length) {
                displayText += text[i];
                line.textContent = '> ' + displayText;
                i++;
            } else {
                clearInterval(typing);
                setTimeout(() => {
                    this.nextLine();
                }, 2000);
            }
        }, 50 + Math.random() * 50);
    }
    
    nextLine() {
        this.currentLine = (this.currentLine + 1) % this.lines.length;
        this.typeLine(this.lines[this.currentLine]);
    }
}

// 8. Initialisation des effets au chargement
window.addEventListener('load', () => {
    // Three.js animation
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
    
    // Initialisation des autres effets
    initMatrixEffect();
    initHologramEffect();
    new Terminal(document.querySelector('.terminal'));
    
    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.competence-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });
    
    // Effet de distortion au scroll
    gsap.to("#webgl-container", {
        scrollTrigger: {
            scrub: true
        },
        scale: 1.2,
        opacity: 0.5
    });
});