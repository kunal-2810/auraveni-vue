<template>
  <!-- Testimonial & Enquiry Form Section -->
  <section class="grid grid-cols-1 md:grid-cols-2">
    <!-- Left: Testimonials -->
    <div :class="`${testimonialBgColor} px-8 py-12`">
      <h2 class="text-3xl md:text-[36px] font-primary leading-snug font-bold text-gray-800 mb-6">Our Testimonials</h2>

      <!-- User avatar + play (side by side) -->
      <div class="flex items-center justify-between gap-6 mb-4">
        <!-- Play button and text -->
        <button class="flex items-center text-gray-800 order-2" @click="openVideoPopup">
          <img src="../assets/icons/play.svg" class="w-6 h-6 mr-2" />
          Click to play the video
        </button>

        <!-- Video Popup -->
        <div v-show="videoPopupVisible" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div class="relative w-full max-w-2xl mx-auto px-4">
            <button class="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow text-black hover:bg-gray-200 transition" aria-label="Close" @click="closeVideoPopup">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div class="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe class="w-full h-full"
                :src="videoPopupVisible ? currentTestimonial.videoUrl : ''" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen >
              </iframe>
            </div>
          </div>
        </div>
        <!-- Avatar -->
        <img :src="currentTestimonial.avatar" alt="avatar" class="w-16 h-16 rounded-full order-1" />
      </div>

      <!-- Rating (image) -->
      <div class="flex items-center mb-4 gap-1">
        <img v-for="i in 5" :key="i" src="../assets/icons/star.svg" alt="star" class="w-6 h-6" />
      </div>

      <!-- Quote -->
      <p class="text-base text-gray-800 leading-relaxed mb-6">
        <img src="../assets/icons/quote.svg" alt="Quote" class="inline-block w-8 h-8 mr-1 -mt-1 align-top text-[#8e3b5c]" />
        {{ currentTestimonial.quote }}
      </p>

      <!-- Play again -->
      <button class="flex items-center text-gray-800 mb-4" @click="openVideoPopup">
        <img src="../assets/icons/play.svg" class="w-6 h-6 mr-2" />
        Click to play the video
      </button>

      <!-- Reviewer -->
      <div class="mb-2 flex flex-col items-center">
        <p class="font-semibold text-xl text-gray-900 mb-2">{{ currentTestimonial.name }}</p>
        <p class="text-sm text-gray-500">{{ currentTestimonial.source }}</p>
      </div>

      <!-- Dots -->
      <div class="flex justify-center space-x-2 pt-4">
        <span
          v-for="(_, idx) in testimonials"
          :key="idx"
          class="w-3 h-3 rounded-full inline-block cursor-pointer"
          :class="idx === currentIndex ? 'bg-red' : 'bg-gray-300'"
          @click="goToTestimonial(idx)"
        ></span>
      </div>
    </div>

    <!-- Right: Contact Form -->
    <div :class="`${formClass} px-8 py-12` ">
      <h2 class="text-3xl md:text-[36px] font-primary leading-snug font-bold mb-6">Connect With Us</h2>
      <form class="space-y-6">
        <!-- Full Name -->
        <div>
          <input type="text" placeholder="Full Name *" required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`" />
        </div>
        <!-- Email -->
        <div>
          <input type="email" placeholder="Email *" required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`" />
        </div>
        <!-- Mobile (with country dropdown auto by intl-tel-input) -->
        <div>
          <input id="phone" type="tel" placeholder="Mobile *" required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`" style="width:100% !important;" />
        </div>
        <!-- Company Name -->
        <div>
          <input type="text" placeholder="Company Name *" required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`" />
        </div>
        <!-- Website URL -->
        <div>
          <input type="url" placeholder="Website URL" 
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`" />
        </div>
        <!-- Select Services -->
        <div>
          <select required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none`">
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
        <!-- Message -->
        <div>
          <textarea placeholder="Type your message here *" required
            :class="`w-full bg-transparent border-b ${inputClass} py-2 focus:outline-none resize-none`"></textarea>
        </div>
        <!-- Policy -->
        <div class="flex items-start gap-2 text-sm">
          <input type="checkbox" class="mt-1 border-white accent-white" />
          <label>
            I agree to the <a href="#" class="font-semibold underline" target="_blank">Privacy Policy</a> and consent to receiving newsletters.
          </label>
        </div>
        <!-- Submit -->
        <button type="submit" :class="`px-6 py-2 ${buttonClass} uppercase rounded shadow transition w-max`">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps({
  testimonialBgColor: { type: String, default: 'bg-[#F6EAEF]' },
  formClass: { type: String, default: 'bg-red text-white' },
  inputClass: { type: String, default: 'border-white text-white placeholder-white' },
  buttonClass: { type: String, default: 'bg-white text-black hover:bg-yellow' }
});

import { onMounted, ref, computed, onUnmounted } from 'vue';

// Testimonials data
const testimonials = ref([
  {
    name: 'John Wayne',
    source: 'Google',
    avatar: '../assets/icons/male.svg',
    quote: 'Venenatis cras sed felis eget. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nibh praesent tristique magna sit amet purus gravida quis. Vitae auctor eu augue ut lectus. Curabitur vitae nunc sed velit.',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&start=15'
  },
  {
    name: 'Jane Smith',
    source: 'Facebook',
    avatar: '../assets/icons/female.svg',
    quote: 'Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&start=10'
  },
  {
    name: 'Alex Lee',
    source: 'Twitter',
    avatar: '../assets/icons/male.svg',
    quote: 'Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=5'
  },
  {
    name: 'Priya Patel',
    source: 'LinkedIn',
    avatar: '../assets/icons/female.svg',
    quote: 'Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Quis enim lobortis scelerisque fermentum dui faucibus.',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&start=30'
  }
]);

const currentIndex = ref(0);
const videoPopupVisible = ref(false);

const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);

let intervalId: number | undefined;

function nextTestimonial() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
}

function goToTestimonial(idx: number) {
  currentIndex.value = idx;
  resetInterval();
}

function openVideoPopup() {
  videoPopupVisible.value = true;
}

function closeVideoPopup() {
  videoPopupVisible.value = false;
}

function startInterval() {
  intervalId = window.setInterval(() => {
    nextTestimonial();
  }, 10000);
}

function resetInterval() {
  if (intervalId) clearInterval(intervalId);
  startInterval();
}

onMounted(() => {
  startInterval();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

// intl-tel-input logic
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
  const input = document.getElementById('phone');
  if (input && window.intlTelInput) {
    window.intlTelInput(input, {
      initialCountry: 'in',
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
    });
  }
});
</script>
