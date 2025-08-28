<template>
  <!-- Call To Action Section -->
  <section class="w-full bg-red text-white py-20" ref="ctaSection">
    <div id="cta-call-section" class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
      <!-- Telephone Icon (Left) -->
      <div class="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
        <img
          ref="phoneImg"
          src="@/assets/icons/telephone.svg"
          alt="Telephone"
          class="w-32 h-32 md:w-40 md:h-40 cursor-pointer"
          style="will-change: transform;"
          tabindex="0"
        />
  <audio ref="phoneAudio" :src="phoneRinging" preload="auto"></audio>
      </div>
      <!-- Content (Right) -->
      <div class="flex-1 text-left">
        <h2 class="text-3xl md:text-[36px] font-primary font-bold mb-3 text-white">Let’s Build Your Digital Success Story</h2>
        <p class="mb-6 max-w-xl text-white">
          Whether you're launching an eCommerce platform, upgrading your CRM, scaling with SaaS solutions, or driving digital transformation — Auraveni Solutions is your trusted technology partner. Call us at 
          <a href="tel:+913335448771" class="font-semibold hover:text-[#F4B400]">033 3544 8771</a> or 
          <a href="tel:+919804525831" class="font-semibold hover:text-[#F4B400]">9804525831</a>, 
          or click below to get started. Let’s build something powerful together.
        </p>
        <button class="inline-block px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition-colors duration-200 uppercase" type="button" @click="openEnquiry">
          Get Started Now
        </button>
      </div>
    </div>
  </section>

  <!-- Enquiry Form Drawer -->
  <div
  id="enquiry-drawer"
  class="fixed bottom-0 right-0 w-full max-w-md bg-white text-dark shadow-2xl rounded-tl-2xl z-[9999] transition-transform duration-300"
  :class="{ 'translate-y-full': !showEnquiry }"
  style="box-shadow: 0 -8px 32px rgba(0,0,0,0.18);"
  >
    <div class="flex justify-between items-center px-6 py-4 border-b">
  <h3 class="text-2xl font-primary font-bold">Connect With Us</h3>
  <button class="text-2xl font-bold text-black hover-text-red focus:outline-none" aria-label="Close" @click="closeEnquiry">&times;</button>
    </div>
  <form class="px-6 py-6 space-y-4" id="enquiry-form" autocomplete="off" @submit="handleFormSubmit">
      <div>
        <input id="enquiry-name" name="name" type="text" required placeholder="Full Name *" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div>
        <input id="enquiry-email" name="email" type="email" required placeholder="Email *" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div>
        <!-- Country code dropdown will be auto-initialized by intl-tel-input -->
        <input id="appointment-mobile" name="mobile" type="tel" required placeholder="Mobile *" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none" style="width:100% !important;" />
      </div>
      <div>
        <input id="enquiry-company" name="company" type="text" required placeholder="Company Name *" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div>
        <input id="enquiry-website" name="website" type="website" required placeholder="Website" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div>
        <select id="enquiry-services" name="services" required class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none">
          <option value="" disabled selected>Select Services *</option>
          <option>Branding & Design</option>
          <option>System Design</option>
          <option>Website Design & Development</option>
          <option>Web Application Development</option>
          <option>eCommerce Development</option>
          <option>Mobile App Development</option>
          <option>Custom CRM Development</option>
          <option>Digital Marketing</option>
          <option>API Development</option>
          <option>AI & ML Solutions</option>
          <option>Amazon AWS and Cloud Services</option>
          <option>Business Process Management</option>
        </select>
      </div>
      <div>
        <textarea id="enquiry-message" name="message" rows="3" required placeholder="Type your message here *" class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none resize-none"></textarea>
      </div>
      <div class="flex items-start gap-2 text-sm">
        <input id="enquiry-privacy" name="privacy" type="checkbox" required class="mt-1 border-white accent-gray-200" />
        <label for="enquiry-privacy">I agree to the <a href="#" class="font-semibold underline" target="_blank">Privacy Policy</a> and consent to receiving newsletters.</label>
      </div>
      <button type="submit" class="px-6 py-2 bg-red text-white hover-bg-green uppercase rounded shadow transition w-max">Submit</button>
      <div id="enquiry-success" class="hidden text-green text-center font-semibold mt-2"></div>
    </form>
  </div>

</template>

<script setup lang="ts">
// intl-tel-input logic for Appointment form
declare global {
  interface Window {
    intlTelInput?: any;
  }
}

function loadIntlTelInputScript() {
  return new Promise<void>((resolve, reject) => {
    if (window.intlTelInput) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/intlTelInput.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

onMounted(async () => {
  await loadIntlTelInputScript();
  const input = document.getElementById('appointment-mobile');
  if (input && window.intlTelInput) {
    window.intlTelInput(input, {
      initialCountry: 'in',
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
    });
  }
});



import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Static import for audio file (Vite will resolve the path correctly)
import phoneRinging from '@/assets/audio/phone-ringing.mp3';

const showEnquiry = ref(false);
const ctaSection = ref<HTMLElement | null>(null);
const phoneImg = ref<HTMLImageElement | null>(null);
const phoneAudio = ref<HTMLAudioElement | null>(null);

function openEnquiry() {
  showEnquiry.value = true;
  // Play phone audio when opening enquiry
  if (phoneAudio.value) {
    phoneAudio.value.currentTime = 0;
    phoneAudio.value.load();
    phoneAudio.value.play().catch((err) => {
      // Log error for debugging
      // eslint-disable-next-line no-console
      console.warn('Phone audio play failed:', err);
    });
  }
  nextTick(() => {
    const input = document.getElementById('enquiry-name') as HTMLInputElement;
    input?.focus();
  });
}
function closeEnquiry() {
  showEnquiry.value = false;
}

function handleFormSubmit(e: Event) {
  e.preventDefault();
  const success = document.getElementById('enquiry-success');
  if (success) {
    success.textContent = "Thank you! We'll get back to you soon.";
    success.classList.remove('hidden');
    setTimeout(() => {
      closeEnquiry();
      (document.getElementById('enquiry-form') as HTMLFormElement)?.reset();
      success.classList.add('hidden');
    }, 2000);
  }
}

onMounted(() => {
  // GSAP phone shake animation
  if (phoneImg.value) {
    let shakeTween: any = null;
    gsap.set(phoneImg.value, { rotate: 0 });
    ScrollTrigger.create({
      trigger: ctaSection.value,
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => {
        if (!shakeTween) {
          shakeTween = gsap.to(phoneImg.value, {
            keyframes: [
              { rotate: -15, duration: 0.1 },
              { rotate: 15, duration: 0.1 },
              { rotate: -10, duration: 0.1 },
              { rotate: 10, duration: 0.1 },
              { rotate: 0, duration: 0.1 }
            ],
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      },
      onEnterBack: () => {
        if (!shakeTween) {
          shakeTween = gsap.to(phoneImg.value, {
            keyframes: [
              { rotate: -15, duration: 0.1 },
              { rotate: 15, duration: 0.1 },
              { rotate: -10, duration: 0.1 },
              { rotate: 10, duration: 0.1 },
              { rotate: 0, duration: 0.1 }
            ],
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      },
      onLeave: () => {
        if (shakeTween) {
          shakeTween.kill();
          shakeTween = null;
          gsap.set(phoneImg.value, { rotate: 0 });
        }
      },
      onLeaveBack: () => {
        if (shakeTween) {
          shakeTween.kill();
          shakeTween = null;
          gsap.set(phoneImg.value, { rotate: 0 });
        }
      }
    });
  }

  // (No IntersectionObserver: audio now plays only on button click)
});


</script>
