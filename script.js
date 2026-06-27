document.addEventListener("DOMContentLoaded", () => {
    const scenes = document.querySelectorAll(".scene");
    const startBtn = document.getElementById("startBtn");
    const finishBtn = document.getElementById("finishBtn");
    const prevBtn = document.getElementById("prevBtn"); 
    let currentIdx = 0;

   // Función para controlar cuándo aparece el botón "Atrás"
    function updateNavigation() {
        // El botón atrás SOLO se oculta en la primera escena (intro)
        if (currentIdx === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }
        }

    // Avanzar de escena
    function nextScene() {
        if (currentIdx < scenes.length - 1) {
            scenes[currentIdx].classList.remove("active");
            currentIdx++;
            scenes[currentIdx].classList.add("active");
            updateNavigation();
        }
    }

    // Retroceder de escena
    function prevScene() {
        if (currentIdx > 0) {
            scenes[currentIdx].classList.remove("active");
            currentIdx--;
            scenes[currentIdx].classList.add("active");
            updateNavigation();
        }
    }

    // 1. Botón Comenzar
    startBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const music = document.getElementById("bgMusic");
        music.volume = 0.4; // Nivel de volumen sutil
        music.play().catch(err => console.log("Audio en espera del usuario:", err));
        nextScene();
    });

    // 2. Click interactivo en el botón "Atrás"
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        prevScene();
    });

    // 3. Cliks generales para ir hacia adelante (Solo escenas intermedias)
    scenes.forEach((scene, idx) => {
        if (idx !== 0 && idx !== scenes.length - 1) {
            scene.addEventListener("click", () => {
                nextScene();
            });
        }
    });

    // 4. Botón de confirmación final (Solución definitiva con códigos Unicode)
    finishBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        // REEMPLAZA AQUÍ TU CELULAR REAL (Código de país + número todo pegado)
        const tuTelefono = "573193098387"; // Ejemplo: 573193098888 para Colombia
        
        // Reemplazamos los emojis de texto por sus códigos de escape Unicode
        // \u{1F942} es el parapente y \u{2728} son los destellos
        const textoLimpio = "¡Sí, quiero volar contigo! Nos vemos el 17 de julio \u{1F942}\u{2728}";
        
        const mensajeParaTi = encodeURIComponent(textoLimpio);
        const urlWhatsapp = `https://wa.me/${tuTelefono}?text=${mensajeParaTi}`;
        
        window.open(urlWhatsapp, "_blank");
    });

    // --- GENERADOR DE PARTÍCULAS MÁGICAS ---
    const particlesContainer = document.getElementById("particles-container");
    const particleCount = 40; 

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        if (!particlesContainer) return;

        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 12 + 8;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * duration}s`;

        if (Math.random() > 0.5) {
            particle.style.filter = "blur(1px)";
        }

        particlesContainer.appendChild(particle);

        particle.addEventListener("animationend", () => {
            particle.remove();
            createParticle();
        });
    }
});