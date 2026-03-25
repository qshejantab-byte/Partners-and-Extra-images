// ===========================
// ALPHA COMPUTER LTD - SHARED
// ===========================

// Navbar HTML
function getNavbar(activePage) {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'Products & Services', href: 'products.html' },
    { name: 'About Us', href: 'about.html' },
    { name: 'Support', href: 'support.html' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a></li>`
  ).join('');

  return `
  <nav class="navbar ${activePage === 'Home' ? 'dark' : ''}" id="navbar">
    <a href="index.html" class="nav-logo">
      <div style="width:52px;height:52px;background:white;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:2px">
        <img src="logo2.jpg" style="width:100%;height:100%;object-fit:contain;" alt="Alpha Computer LTD Logo"/>
      </div>
    </a>
    <ul class="nav-links">
      ${links}
    </ul>
    <div class="nav-actions">
      <a href="support.html"><button class="btn-contact">Contact Us</button></a>
      <a href="login.html"><button class="btn-login">Login</button></a>
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    ${pages.map(p => `<a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a>`).join('')}
    <a href="support.html">Contact Us</a>
    <a href="login.html">Login</a>
  </div>`;
}

// Footer HTML
function getFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
          <div style="width:52px;height:52px;background:white;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:2px">
            <img src="logo2.jpg" style="width:100%;height:100%;object-fit:contain;" alt="Alpha Computer LTD Logo"/>
          </div>
          <div style="color:white;font-family:Barlow,sans-serif;font-weight:800;font-size:1rem;line-height:1.1">Alpha Computer<br><span style="font-size:0.7rem;opacity:0.5;font-weight:400">LTD</span></div>
        </div>
        <p>Leading technology solutions provider in Rwanda, delivering innovative LED screens, interactive displays, and audio-visual systems.</p>
        <div class="social-links">
          <div class="social-link">f</div>
          <div class="social-link">𝕏</div>
          <div class="social-link">in</div>
          <div class="social-link">📷</div>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">› Home</a></li>
          <li><a href="products.html">› Products & Services</a></li>
          <li><a href="about.html">› About Us</a></li>
          <li><a href="support.html">› Support</a></li>
          <li><a href="login.html">› Login</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Info</h4>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">✉</div>
          <div>
            <div class="label">Email</div>
            <div class="value">info@alphacomputer.rw</div>
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">📞</div>
          <div>
            <div class="label">Phone</div>
            <div class="value">+250 788 123 456</div>
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">📍</div>
          <div>
            <div class="label">Address</div>
            <div class="value">Kigali, Rwanda</div>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h4>Working Hours</h4>
        <div class="footer-hours-row"><span class="day">Mon - Fri</span><span class="time">8:00 AM - 6:00 PM</span></div>
        <div class="footer-hours-row"><span class="day">Saturday</span><span class="time">9:00 AM - 2:00 PM</span></div>
        <div class="footer-hours-row"><span class="day">Sunday</span><span class="time" style="color:rgba(255,255,255,0.4)">Closed</span></div>
        <a href="support.html" class="footer-get-touch">✉ Get in Touch</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Alpha Computer LTD. All rights reserved. | Kigali, Rwanda</p>
    </div>
  </footer>`;
}

// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// Navbar scroll effect
function initNavbarScroll(isHomePage = false) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (!isHomePage) {
    // Inner pages: always solid white
    navbar.classList.add('solid');
    return;
  }

  // Home page: transparent over hero, scrolled = dark
  function updateNav() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav);
}

// Animate on scroll
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
