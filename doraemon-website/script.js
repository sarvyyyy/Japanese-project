// Simple cloud float animation (bonus aesthetic)

const body = document.body;

function createCloud() {
  const cloud = document.createElement('div');
  cloud.classList.add('cloud');
  cloud.style.left = Math.random() * 100 + 'vw';
  cloud.style.animationDuration = 20 + Math.random() * 10 + 's';
  body.appendChild(cloud);

  setTimeout(() => {
    cloud.remove();
  }, 30000);
}
  
setInterval(createCloud, 3000);
// Sakura Petals Effect

function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.style.left = Math.random() * 100 + 'vw';
    sakura.style.animationDuration = 5 + Math.random() * 5 + 's';
    sakura.style.opacity = Math.random();
    sakura.style.fontSize = Math.random() * 15 + 20 + 'px';
    sakura.innerHTML = '🌸';
    document.body.appendChild(sakura);
  
    setTimeout(() => {
      sakura.remove();
    }, 10000);
  }
  
  setInterval(createSakura, 600);
  // Reveal Sections on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', reveal);
  