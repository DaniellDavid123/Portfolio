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

