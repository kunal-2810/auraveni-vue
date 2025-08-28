
<template>
  <Breadcrumb
    :bannerImage="bannerImage"
    pageTitle="About Us"
    :breadcrumb="[
      { label: 'Home', link: '/' },
      { label: 'About Us' }
    ]"
    shortDescription="Empowering Businesses Through Scalable Digital Solutions"
  />

  <!-- About Us Section -->
  <section class="w-full min-h-screen flex items-center justify-center bg-white py-16">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-6">
          Company Overview: Next-Gen Digital Solutions, Built for You
        </h1>
        <p class="text-base md:text-lg mb-4">
          Auraveni Solutions, a unit of <a class="text-blue font-bold hover:underline" href="https://www.sgc.org.in/" target="_blank"> Sarkar Group of Companies</a>, is a full-service digital agency offering enterprise-grade software development, custom CRM platforms, eCommerce solutions, and innovative website and mobile app development. We specialize in building scalable, secure, and user-centric digital products tailored to the needs of startups, brands, and large organizations. Our expert team combines technical expertise with creative strategy to craft seamless digital experiences that drive results. Alongside our development services, we offer end-to-end digital marketing solutions including SEO, paid ad campaigns, and social media management—helping our clients maximize online visibility, engagement, and ROI. Whether you're launching a new business or transforming an existing one, Auraveni Solutions empowers you to grow, adapt, and succeed in today’s digital-first world.
        </p>
        <p class="text-base md:text-lg mb-10">
          Whether you're a startup or an established brand, our end-to-end tech solutions and digital strategies are built to help you grow faster, smarter, and stronger in today’s competitive digital landscape.
        </p>

        <a href="#contact" class="inline-block px-6 py-3 bg-red button-secondary text-white rounded hover:bg-yellow transition uppercase">
          Partner With Us
        </a>

      </div>
  </section>

  <!-- Our Story Section -->
  <section class="w-full flex items-center justify-center text-white bg-blue py-16">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-6">
          Our Story: Driven by Vision, Powered by Innovation
        </h1>
        <p class="text-base md:text-lg mb-4">
          Auraveni Solutions was born from a vision to bridge the gap between ideas and impact. Founded under the leadership of visionary minds from the <a class="font-bold hover:underline" href="https://www.sgc.org.in/" target="_blank"> Sarkar Group of Companies</a>, the agency was built to deliver smart, scalable, and tailor-made digital solutions that empower businesses to thrive in the digital age. The founding directors, with deep roots in system design, brand strategy, and digital transformation, played a key role in shaping Auraveni into a results-driven, client-focused software development and digital services company.
        </p>
        <p class="text-base md:text-lg mb-6">
          What began as a passionate initiative to solve real-world business problems through technology has grown into a full-fledged digital solutions powerhouse. We focus on developing enterprise-grade software, dynamic websites, feature-rich mobile applications, custom CRM platforms, and eCommerce ecosystems designed to scale and perform. Our commitment to quality, attention to detail, and dedication to crafting impactful user experiences have helped us earn the trust of startups, established brands, and global organizations.
        </p>
        <p class="text-base md:text-lg mb-6">
          At Auraveni Solutions, we believe in continuous innovation, agility, and delivering measurable success. Every product we build, every strategy we design, and every project we execute carries the signature of excellence. As we move forward, we continue to invest in technologies, people, and ideas that make a difference.
        </p>
        <p class="text-base md:text-lg mb-6">
          Join us on our journey to shape the future of technology, elevate businesses, and turn visions into reality—one innovation at a time.
        </p>

        <!-- <a href="#contact" class="inline-block px-6 py-3 bg-red button-secondary text-white rounded hover:bg-yellow transition uppercase">
          Discover Our Expertise
        </a> -->

      </div>
  </section>

  <!-- Our Mission Section -->
  <section class="w-full py-16 bg-[#F9F9F9]">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 px-4">
      <!-- Text -->
      <div class="md:w-1/2 w-full text-left md:text-left text-center">
        <h2 class="text-3xl md:text-[36px] font-bold font-primary leading-snug mb-4">Our Mission: Code. Design. Deliver. Empower.</h2>
        <p class="text-base md:text-lg text-gray-700">
          Our mission at Auraveni Solutions is to empower businesses of all sizes with innovative, scalable, and user-centric digital solutions. We aim to bridge the gap between technology and business goals by delivering high-quality software development, custom CRM systems, eCommerce platforms, mobile applications, and digital marketing strategies tailored to your unique needs.
        </p>
        <p class="text-base md:text-lg text-gray-700">
          We are committed to driving measurable impact through intelligent design, seamless functionality, and future-ready technology. Whether it’s building enterprise software or launching result-driven digital campaigns, our focus remains on delivering excellence, enhancing user experience, and fueling business growth through continuous innovation and dedicated support.
        </p>
      </div>
      <!-- Image -->
      <div class="md:w-1/2 w-full flex justify-center">
        <img src="https://placehold.co/480x480" alt="Our Mission - Auraveni Solutions" class="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  </section>

  <!-- Our Vision Section -->
  <section class="w-full py-16 bg-white">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16 px-4">
      <!-- Text -->
      <div class="md:w-1/2 w-full text-left md:text-left text-center">
        <h2 class="text-3xl md:text-[36px] font-bold font-primary leading-snug mb-4">Our Vision: Imagine. Innovate. Scale. Succeed.</h2>
        <p class="text-base md:text-lg text-gray-700">
          At Auraveni Solutions, our vision is to revolutionize how businesses embrace technology. We aim to become a global benchmark in delivering intelligent, scalable, and customer-centric digital solutions. By blending creativity, innovation, and strategic thinking, we empower startups, enterprises, and growing brands to thrive in the digital era. Our future-forward approach ensures that we don’t just build software or websites — we build sustainable ecosystems that drive growth, enhance user experience, and unlock new opportunities. We envision a world where every idea can be transformed into a high-performing digital reality.
        </p>
      </div>
      <!-- Image -->
      <div class="md:w-1/2 w-full flex justify-center">
        <img src="https://placehold.co/480x480" alt="Our Vision - Auraveni Solutions" class="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  </section>

  <!-- Our Values Section -->
  <section id="modules-section" class="w-full bg-green text-white py-16">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Title & Description -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-4">Our Values: Rooted in Values, Driven by Vision</h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto">
          Our values at Auraveni Solutions define who we are and guide how we deliver innovative, scalable, and result-oriented digital solutions to businesses worldwide.</p>
      </div>
      <!-- Modules Grid/List -->
      <div class="space-y-10">
        <!-- Module 1 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <!-- Icon & Title -->
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/innovation.svg" alt="Innovation" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Innovation</span>
          </div>
          <!-- Description -->
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We constantly push creative boundaries to deliver unique, forward-thinking solutions that give our clients a competitive edge in the digital world.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 2 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/integrity.svg" alt="Integrity" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Integrity</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We operate with transparency, honesty, and accountability—building long-term trust with clients, partners, and teams.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 3 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/excellence.svg" alt="Excellence" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Excellence</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We strive for perfection in every line of code and every pixel we design, ensuring top-tier quality across all digital platforms.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 4 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/client-centricity.svg" alt="Client-Centricity" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Client-Centricity</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We put your business goals at the heart of our strategy, delivering personalized software and web solutions that truly make an impact.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 5 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/collaboration.svg" alt="Collaboration" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Collaboration</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We believe in the power of teamwork, working closely with clients and internal teams to co-create high-performance digital products.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 6 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/adaptability.svg" alt="Adaptability" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Adaptability</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We stay agile and flexible to respond to evolving technologies, market trends, and customer needs—ensuring sustainable digital growth.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module 7 -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-8 p-6 module-animate" data-sr>
          <div class="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
            <img src="@/assets/icons/responsibility.svg" alt="Responsibility" class="w-14 h-14 mb-2" />
            <span class="text-xl font-semibold text-center md:text-left">Responsibility</span>
          </div>
          <div class="md:w-2/3 text-base md:text-lg text-center md:text-left">
            We take ownership of our work and its impact, ensuring ethical practices and delivering solutions that are secure, scalable, and sustainable.
          </div>
        </div>
        <div class="w-full h-px bg-white/30 my-2"></div>
        <!-- Module Section Call-to-Action -->
        <div class="text-center mt-12">
          <p class="text-lg md:text-xl mb-6">
            These values are not just words—they're the foundation of everything we do. At Auraveni Solutions, we live by these principles to deliver impactful digital experiences that empower businesses to grow, adapt, and lead in the ever-evolving tech landscape.
          </p>
          <!-- <a href="#contact" class="inline-block bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-yellow hover:text-black transition-all duration-300 uppercase">
            Start Your Online Business Now
          </a> -->
        </div>
      </div>
    </div>
  </section>


  <Enquiry />
</template>


<script setup lang="ts">
import bannerImage from '@/assets/images/blog-banner.webp'
import Breadcrumb from '@/components/Breadcrumb.vue';
import Enquiry from '@/components/Enquiry.vue';


// Animate each module on scroll using ScrollReveal
  document.addEventListener('DOMContentLoaded', function () {
    if (window.ScrollReveal) {
      ScrollReveal().reveal('.module-animate', {
        origin: 'bottom',
        distance: '40px',
        duration: 700,
        delay: 100,
        interval: 120,
        opacity: 0,
        easing: 'ease-out',
        reset: false, // Only animate once
        cleanup: true
      });
    }
  });

</script>
