<template>
<!-- Why Choose Section -->
<section class="w-full bg-green text-white px-6 py-16 md:h-screen flex items-center" id="why-choose">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <!-- Left Section -->
    <div>
      <h2 class="text-3xl md:text-[36px] font-primary text-white leading-snug font-bold mb-6">Your Growth, Our Mission — Here's Why Brands Trust Auraveni</h2>
      <p class="text-lg mb-4">
        Auraveni Solutions is your dedicated technology and marketing partner, delivering high-impact digital products tailored for real-world growth. From pixel-perfect designs to robust software systems and ROI-driven marketing, we bring deep expertise, fast delivery, and long-term support. Trusted by startups, enterprises, and global brands across India, the Middle East, the US, UK, and Australia—we help you scale smarter, faster, and stronger.
      </p>
      <p class="text-lg mb-6">
        Trust our experienced team for innovative and creative designs that drive growth and success.
      </p>
      <a href="#contact" class="inline-block bg-white text-black uppercase px-6 py-3 rounded transition">
        Discover Our Advantage
      </a>
    </div>

    <!-- Right Section: USP Grid 2x2 centered vertically and horizontally -->
    <div class="flex items-center justify-center h-full">
      <div class="grid grid-cols-2 grid-rows-2 gap-8 relative">
        <!-- Vertical Borders -->
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/30"></div>
        <div class="absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
        <!-- USP 1 -->
        <div class="usp-item flex flex-col items-center text-center p-6 opacity-100 transition duration-500 z-10">
          <img src="../assets/icons/innovation.svg" alt="Innovation" class="usp-icon w-10 h-10 mb-2 transition-all duration-400">
          <h4 class="font-semibold text-lg">Innovation</h4>
        </div>
        <!-- USP 2 -->
        <div class="usp-item flex flex-col items-center text-center p-6 opacity-100 transition duration-500 z-10">
          <img src="../assets/icons/experience.svg" alt="Expertise" class="usp-icon w-10 h-10 mb-2 transition-all duration-400">
          <h4 class="font-semibold text-lg">Expertise and Experience</h4>
        </div>
        <!-- USP 3 -->
        <div class="usp-item flex flex-col items-center text-center p-6 opacity-100 transition duration-500 z-10">
          <img src="../assets/icons/customization.svg" alt="Customization" class="usp-icon w-10 h-10 mb-2 transition-all duration-400">
          <h4 class="font-semibold text-lg">Customization</h4>
        </div>
        <!-- USP 4 -->
        <div class="usp-item flex flex-col items-center text-center p-6 opacity-100 transition duration-500 z-10">
          <img src="../assets/icons/commitment.svg" alt="Commitment" class="usp-icon w-10 h-10 mb-2 transition-all duration-400">
          <h4 class="font-semibold text-lg">Commitment</h4>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">
import ScrollReveal from 'scrollreveal';

// Reveal animation for .usp-item
ScrollReveal().reveal('.usp-item', {
  interval: 300,
  delay: 200,
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  distance: '20px',
  opacity: 0,
  cleanup: true
});

// Glow effect for icons in sequence every time section enters viewport from any direction
(function glowIconsOnView() {
  const section = document.getElementById('why-choose');
  if (!section) return;
  const icons = Array.from(section.querySelectorAll('.usp-icon'));
  let lastInView = false;
  let lastScrollY = window.scrollY;

  function isSectionInView() {
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    // Section is considered in view if at least 40% of it is visible
    const visible =
      rect.top < window.innerHeight * 0.6 &&
      rect.bottom > window.innerHeight * 0.4;
    return visible;
  }

  function animateGlow(direction = 'down') {
    icons.forEach(icon => icon.classList.remove('glow'));
    const order = direction === 'down' ? icons : [...icons].reverse();
    order.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add('glow');
      }, i * 350);
    });
    const glowDuration = icons.length * 350 + 800;
    order.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.remove('glow');
      }, glowDuration + i * 350);
    });
  }

  function onScroll() {
    const inView = isSectionInView();
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? 'down' : 'up';
    if (inView && !lastInView) {
      animateGlow(direction);
    }
    lastInView = inView;
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  // Also trigger on load in case already in view
  onScroll();
})();


</script>
