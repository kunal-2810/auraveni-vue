<template>
<!-- Hero Video Section -->
<section class="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
    <!-- Background Video -->
    <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="../assets/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <!-- Typing Animation Title -->
        <h2
            id="typing-title"
            ref="typingTitleRef"
            class="text-3xl md:text-[42px] font-bold leading-snug text-white font-primary mb-4 md:mb-6"
            style="min-height:3.5rem;"
        ></h2>
        <!-- Banner Description -->
        <p class="text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl">
            We engineer scalable digital solutions — from <strong>Software and Apps</strong> to <strong>CRM and Marketing</strong> for <strong>Enterprises, Startups, and Global brands</strong>.
        </p>
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#services" class="px-6 py-3 bg-white button-primary text-black uppercase rounded shadow hover:bg-light transition">Our Services</a>  
          <a href="#contact" class="px-6 py-3 bg-red text-white uppercase rounded shadow hover:bg-yellow transition">Get Started</a>
        </div>
    </div>
</section>

<!-- About Us Section -->
<section class="w-full min-h-screen flex items-center justify-center bg-white py-16">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <h1 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-6">
        Top Web & Software Agency – Turning Ideas into Impact
      </h1>
      <p class="text-base md:text-lg mb-4">
        Auraveni Solutions is a full-service software development and web design agency based in Kolkata, India, delivering innovative digital solutions to businesses across India and around the globe. We turn ideas into powerful digital products — from custom software, mobile apps, and CRM systems to eCommerce platforms, UI/UX design, and digital marketing services.
      </p>
      <p class="text-base md:text-lg mb-6">
        As a trusted technology partner for startups, enterprises, and growing brands, we specialize in building scalable, secure, and smart solutions tailored to your business goals. Our expertise spans across key industries including automotive, healthcare, hospitality, real estate, media, retail, manufacturing, and food & beverage — we combine innovation with strategy to drive digital transformation and growth in a fast-changing world.
      </p>
      <a href="#contact" class="inline-block px-6 py-3 bg-red button-secondary text-white rounded hover:bg-yellow transition uppercase">
        Discover Our Expertise
      </a>
    </div>
</section>

<!-- Services Section -->
<section id="services-section" ref="servicesSectionRef" class="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
<div  class="w-full lg:h-screen absolute top-0 bg-transparent z-50"></div>
  <!-- Sticky Left Panel -->
  <div class="w-full lg:w-1/2 sticky lg:top-0 lg:h-screen flex flex-col justify-center bg-blue text-white p-10 border-b lg:border-b-0 lg:border-r border-white/10 z-10">
    <h2 class="text-3xl md:text-[36px] font-primary text-white leading-snug font-bold mb-4">
      Innovate, Develop, Grow — With Auraveni’s Expert Tech & Marketing Services
    </h2>
    <p class="text-lg mb-6">
      At Auraveni Solutions, we deliver high-performance software development, mobile & web applications, eCommerce platforms, and enterprise-level CRM systems tailored to your business needs. With a strong presence across India and globally, we also provide full-scale digital marketing services—including SEO, paid advertising, and social media management—to help you scale faster, smarter, and more efficiently.
    </p>
    <a href="#contact" class="px-6 py-3 bg-white text-black uppercase rounded shadow hover:bg[#EAE6E1] transition w-max">
      Explore Our Services
    </a>
  </div>

  <!-- Scrollable Right Panel -->
  <div id="services-scroll-panel" ref="servicesScrollPanelRef" class="w-full lg:w-1/2 lg:h-screen overflow-y-auto relative snap-y snap-mandatory scroll-smooth">
   
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-yellow border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/design.png" class="w-12 h-12" alt="Branding & Design">
        <h3 class="text-[28px] font-primary font-bold">Branding & Design</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Make Your Brand Unforgettable with Stunning Design.</h5>
      <p class="mt-4 mb-6">
        Elevate your business with professional branding and design services tailored for impact. We craft unique logo designs, brand identity systems, marketing materials, social media graphics, and engaging infographics to ensure your brand stands out across all platforms. Perfect for startups, SMEs, and enterprises across India, Dubai, USA, UK, and beyond.
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-light border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/system-design.svg" class="w-12 h-12" alt="System Design">
        <h3 class="text-[28px] font-primary font-bold">System Design</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Build Intelligent, Scalable Systems with Expert Design.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions specializes in professional system design services including UI/UX design, information architecture (IA), wireframing, cloud infrastructure design, database architecture, and enterprise-level system solutions. We craft scalable, high-performance systems with seamless deployment and ongoing maintenance—ideal for startups, enterprises, and global businesses across India, Dubai, USA, UK, and more.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-yellow border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/website-design.png" class="w-12 h-12" alt="Website Design and development">
        <h3 class="text-[28px] font-primary font-bold">Website Design and development</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Custom Websites That Drive Results & Scale Your Business.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions offers expert website design and development services, including custom website design, responsive web design, CMS development, frontend & backend development, landing page creation, and complete web application solutions. We also provide ongoing website maintenance and support for businesses in India, Dubai, USA, UK, and beyond—ensuring your online presence is fast, secure, and impactful.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-light border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/app-development.png" class="w-12 h-12" alt="Mobile Application Development">
        <h3 class="text-[28px] font-primary font-bold">Mobile Application Development</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Powerful Mobile Apps Built for Performance & User Experience.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions delivers end-to-end mobile application development services including custom UI/UX design, Android and iOS app development, cross-platform solutions, eCommerce apps, enterprise apps, and wearable app development. We also provide reliable mobile app support and maintenance for businesses in India, Dubai, USA, UK, and more—ensuring seamless performance and user satisfaction.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-yellow border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/ecommerce.svg" class="w-12 h-12" alt="eCommerce Development">
        <h3 class="text-[28px] font-primary font-bold">eCommerce Development</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">High-Performance eCommerce Solutions That Convert.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions offers professional eCommerce development services crafted for online growth. From custom eCommerce website design and secure payment integration to mobile-friendly storefronts, inventory management, and scalable backend systems—we build powerful, conversion-focused online stores for brands across India, Dubai, USA, UK, and other global markets.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-light border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/customer-relationship-management.png" class="w-12 h-12" alt="Custom CRM Development">
        <h3 class="text-[28px] font-primary font-bold">Custom CRM Development</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Custom CRM Solutions to Streamline Your Business Operations.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions provides tailored CRM development services designed to boost customer engagement, automate workflows, and drive business growth. From lead management and sales tracking to customer support and analytics, our scalable CRM systems are built for startups, SMEs, and enterprises across India, Dubai, USA, UK, and beyond.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
    <!-- Service Item -->
    <div class="min-h-screen snap-start p-10 flex flex-col justify-center bg-yellow border-b border-white/10">
      <div class="flex items-center space-x-4">
        <img src="../assets/icons/services/color/marketing.png" class="w-12 h-12" alt="Digital Marketing">
        <h3 class="text-[28px] font-primary font-bold">Digital Marketing</h3>
      </div>
      <h5 class="text-[24px] text-gray-800 font-medium mt-4">Result-Driven Digital Marketing to Grow Your Online Presence.</h5>
      <p class="mt-4 mb-6">
        Auraveni Solutions offers complete digital marketing services including SEO, paid advertising (Google Ads, Meta Ads), social media marketing, content creation, and campaign management. We help businesses across India, Dubai, USA, UK, and beyond boost traffic, increase conversions, and build strong brand visibility through data-driven strategies.  
      </p>
      <button class="inline-flex items-center text-primary space-x-2 font-medium hover:underline">
        <span>Learn More</span>
        <img src="../assets/icons/right-arrow.svg" class="w-3 h-3" alt="Arrow Right">
      </button>
    </div>
  </div>
</section>








</template>

<script setup lang="ts">


import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const typingTitleRef = ref<HTMLElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const servicesSectionRef = ref<HTMLElement | null>(null);
const servicesScrollPanelRef = ref<HTMLElement | null>(null);

const lines = [
  "Enterprise Software. Scalable Results.",
  "Web & Mobile Apps That Drive Growth.",
  "Custom CRMs, Powered by Precision.",
  "eCommerce Development That Sells More.",
  "Digital Strategy Meets Powerful Code."
];
let lineIndex = 0, charIndex = 0, isDeleting = false, typingTimeout: ReturnType<typeof setTimeout> | null = null;
let servicesScrollTrigger: ScrollTrigger | null = null;

function type() {
  const currentLine = lines[lineIndex];
  if (typingTitleRef.value) {
    if (!isDeleting) {
      typingTitleRef.value.textContent = currentLine.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentLine.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 1500);
        return;
      }
    } else {
      typingTitleRef.value.textContent = currentLine.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    typingTimeout = setTimeout(type, isDeleting ? 40 : 80);
  }
}

function adjustTypingTitleHeight() {
  if (!typingTitleRef.value) return;
  if (window.innerWidth < 768) {
    typingTitleRef.value.style.minHeight = "2.8rem";
  } else {
    typingTitleRef.value.style.minHeight = "3.5rem";
  }
}

function setupServicesScroll() {
  if (window.innerWidth < 1024) return;
  if (!servicesSectionRef.value || !servicesScrollPanelRef.value) return;

  const scrollPanel = servicesScrollPanelRef.value;
  const section = servicesSectionRef.value;
  const scrollPanelScrollHeight = scrollPanel.scrollHeight;
  const scrollPanelClientHeight = scrollPanel.clientHeight;
  const scrollDistance = scrollPanelScrollHeight - scrollPanelClientHeight;

  servicesScrollTrigger = ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: () => "+=" + scrollDistance,
    pin: true,
    scrub: true,
    anticipatePin: 1,
    onUpdate: self => {
      const scrollTop = Math.max(0, Math.min(self.progress * scrollDistance, scrollDistance));
      scrollPanel.scrollTop = scrollTop;
    }
  });

  // Prevent native scroll on the right panel while ScrollTrigger is active
  scrollPanel.addEventListener('wheel', preventDefault, { passive: false });
  scrollPanel.addEventListener('touchmove', preventDefault, { passive: false });
}

function cleanupServicesScroll() {
  if (servicesScrollTrigger) {
    servicesScrollTrigger.kill();
    servicesScrollTrigger = null;
  }
  if (servicesScrollPanelRef.value) {
    servicesScrollPanelRef.value.removeEventListener('wheel', preventDefault);
    servicesScrollPanelRef.value.removeEventListener('touchmove', preventDefault);
  }
}

function preventDefault(e: Event) {
  e.preventDefault();
}

onMounted(() => {
  type();
  adjustTypingTitleHeight();
  window.addEventListener("resize", adjustTypingTitleHeight);

  if (videoRef.value) {
    videoRef.value.muted = true;
    videoRef.value.play();
  }

  setupServicesScroll();
  window.addEventListener('resize', setupServicesScroll);
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
  window.removeEventListener("resize", adjustTypingTitleHeight);
  window.removeEventListener('resize', setupServicesScroll);
  cleanupServicesScroll();
});






</script>