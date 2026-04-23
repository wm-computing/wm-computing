document.addEventListener('DOMContentLoaded', () => {

  // 1. BOOT SEQUENCE LOGIC
  const bootScreen = document.getElementById('boot-screen');
  const bootTextContainer = document.getElementById('boot-text');

  const bootLines = [
    "INICIALIZANDO SISTEMA V.9.2.4...",
    "ESTABELECENDO CONEXÃO SEGURA...",
    "IGNORANDO NÓS EXTERNOS [OK]",
    "CARREGANDO KERNEL WM_COMPUTING...",
    "MONTANDO PROTOCOLOS DE REDE...",
    "VERIFICANDO INTEGRIDADE DE CIBERDEFESA...",
    "STATUS: ONLINE. ZERO FALHAS DETECTADAS.",
    "ACESSO CONCEDIDO."
  ];

  if (bootScreen && bootTextContainer) {
    let currentLine = 0;

    function typeBootLine() {
      if (currentLine < bootLines.length) {
        const line = document.createElement('div');
        line.textContent = `> ${bootLines[currentLine]}`;
        bootTextContainer.appendChild(line);
        currentLine++;
        setTimeout(typeBootLine, Math.random() * 150 + 50);
      } else {
        setTimeout(() => {
          bootScreen.style.opacity = '0';
          setTimeout(() => {
            bootScreen.style.display = 'none';
            document.body.classList.remove('loading');
            startDecipherEffects();
            startStatusMonitor();
          }, 500);
        }, 500);
      }
    }

    setTimeout(typeBootLine, 200);
  } else {
    startDecipherEffects();
    startStatusMonitor();
  }


  // 2. DECIPHER TEXT EFFECT
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  function decipherText(element) {
    let interval = null;
    let iteration = 0;
    const originalText = element.dataset.text;
    if (!originalText) return;

    clearInterval(interval);

    interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration || letter === " ") {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1;
    }, 30);
  }

  function startDecipherEffects() {
    const decipherElements = document.querySelectorAll('.decipher');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          decipherText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    decipherElements.forEach(el => observer.observe(el));
  }


  // 3. STATS TAPE
  const tapeTrack = document.getElementById('tape-track');
  const tapeContent = "/// TEMPO DE ATIVIDADE: 99.99% /// NÓS SEGUROS: 10.000+ /// AMEAÇAS MITIGADAS: 2.4M /// SAÚDE DO SISTEMA: IDEAL /// TEMPO DE RESPOSTA: <1MS ";

  if (tapeTrack) {
    tapeTrack.innerText = tapeContent.repeat(10);
  }


  // 4. TERMINAL LINE ANIMATION
  const termLines = document.querySelectorAll('.term-line');
  const termObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.term-line'));
        const index = siblings.indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add('active');
        }, index * 300);

        termObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  termLines.forEach(el => termObserver.observe(el));


  // 5. GENERIC REVEAL OBSERVER
  const revealElements = document.querySelectorAll('.reveal, .reveal-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 6. SYSTEM STATUS MONITOR
  function startStatusMonitor() {
    const monitor = document.getElementById('sys-status-monitor');
    if (!monitor) return;

    function updateMonitor() {
      const cpu = (Math.random() * 5 + 2).toFixed(2);
      const ping = (Math.random() * 2 + 0.5).toFixed(1);
      const threads = Math.floor(Math.random() * 100 + 400);
      
      monitor.textContent = `[ CPU: ${cpu}% | PING: ${ping}ms | THREADS: ${threads} | STATUS: NOMINAL ]`;
      
      setTimeout(updateMonitor, 3000 + Math.random() * 2000);
    }
    
    updateMonitor();
  }

});
