// Responsive Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scroll for Nav
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if(window.innerWidth <= 600) navLinks.classList.remove('show');
  });
});

// Smooth Scroll for Brand (header)
const brand = document.querySelector('.brand');
if(brand && brand.tagName === 'A') {
  brand.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    // Optionally: set 'Home' link as active here
    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if(homeLink) homeLink.classList.add('active');
    if(window.innerWidth <= 600) navLinks.classList.remove('show');
  });
}

// Simple Typed Text Effect for Role
document.addEventListener('DOMContentLoaded', function() {
  const roles = ['Web Developer', 'Programmer', 'Student','Pogi','Front-End Lang Alam'];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;
  const typed = document.getElementById('typed');

  function typeRole() {
    if (!typed) return;
    if (typing) {
      if (charIndex === 0) {
        typed.textContent = '';
      }
      if (charIndex < roles[roleIndex].length) {
        typed.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(typeRole, 90);
      } else {
        typing = false;
        setTimeout(typeRole, 900);
      }
    } else {
      if (charIndex > 0) {
        typed.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeRole, 40);
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
      }
    }
  }
  if (typed) typeRole();
});

  // Skills Tabs
  document.querySelectorAll('.skills-tabs .tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.skills-tabs .tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      document.querySelectorAll('.skills-content').forEach(c => c.style.display = 'none');
      document.getElementById(this.dataset.tab).style.display = '';
    });
  });

// pop up for portfolio images
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').getAttribute('src');
    const popupImage = document.getElementById('popupImage');
    popupImage.setAttribute('src', imgSrc);

    const popup = document.getElementById('portfolioPopup');
    popup.classList.add('show');
  });
});

document.getElementById('closePortfolioPopup').addEventListener('click', () => {
  document.getElementById('portfolioPopup').classList.remove('show');
});

// light/dark mode toggle
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggleBtn.textContent = '🌑';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  const isLight = body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '🌑' : '🌙';
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .skills-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // 👈 this line makes it re-animate
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach((section) => {
    section.classList.add("section-animate");
    observer.observe(section);
  });
});

// about section animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 👈 this line is 🔑
    }
  });
}, {
  threshold: 0.15
});
// Randomize skill card positions and rotations
const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach(card => {
  const randX = Math.random(); // between 0 and 1
  const randY = Math.random();
  const randRot = Math.random();
  card.style.setProperty('--random-x', randX);
  card.style.setProperty('--random-y', randY);
  card.style.setProperty('--random-rotate', randRot);
});

// animation for portfolio section
