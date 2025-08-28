<template>
  <!-- Testimonial & Enquiry Form Section -->
<section class="grid grid-cols-1 md:grid-cols-2">
  <!-- Left: Testimonials -->
  <div class="bg-[#F6EAEF] px-8 py-12">
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
              :src="videoPopupVisible ? YT_URL : ''" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen >
            </iframe>
          </div>
        </div>
      </div>
      <!-- Avatar -->
      <img src="../assets/icons/male.svg" alt="avatar" class="w-16 h-16 rounded-full order-1" />
    </div>

    <!-- Rating (image) -->
    <div class="flex items-center mb-4 gap-1">
      <img src="../assets/icons/star.svg" alt="4 stars" class="w-6 h-6" />
      <img src="../assets/icons/star.svg" alt="4 stars" class="w-6 h-6" />
      <img src="../assets/icons/star.svg" alt="4 stars" class="w-6 h-6" />
      <img src="../assets/icons/star.svg" alt="4 stars" class="w-6 h-6" />
      <img src="../assets/icons/star.svg" alt="4 stars" class="w-6 h-6" />
    </div>

    <!-- Quote -->
    <p class="text-base text-gray-800 leading-relaxed mb-6">
      <img src="../assets/icons/quote.svg" alt="Quote" class="inline-block w-8 h-8 mr-1 -mt-1 align-top text-[#8e3b5c]" />
      Venenatis cras sed felis eget. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nibh praesent tristique magna sit amet purus gravida quis. Vitae auctor eu augue ut lectus. Curabitur vitae nunc sed velit.
    </p>

    <!-- Play again -->
    <button class="flex items-center text-gray-800 mb-4" @click="openVideoPopup">
      <img src="../assets/icons/play.svg" class="w-6 h-6 mr-2" />
      Click to play the video
    </button>

    <!-- Reviewer -->
    <div class="mb-2 flex flex-col items-center">
      <p class="font-semibold text-xl text-gray-900 mb-2">John Doe</p>
      <p class="text-sm text-gray-500">Google</p>
    </div>

    <!-- Dots -->
    <div class="flex justify-center space-x-2 pt-4">
      <span class="w-3 h-3 rounded-full bg-red inline-block"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
    </div>
  </div>

  <!-- Right: Contact Form -->
  <div class="bg-red text-white px-8 py-12">
    <h2 class="text-3xl md:text-[36px] font-primary leading-snug font-bold mb-6">Connect With Us</h2>
    <form class="space-y-6">
      <!-- Full Name -->
      <div>
        <input type="text" placeholder="Full Name *" required
          class="w-full bg-transparent border-b border-white text-white placeholder-white py-2 focus:outline-none" />
      </div>
      <!-- Email -->
      <div>
        <input type="email" placeholder="Email *" required
          class="w-full bg-transparent border-b border-white text-white placeholder-white py-2 focus:outline-none" />
      </div>
      <!-- Mobile (with country dropdown auto by intl-tel-input) -->
      <div>
        <input id="phone" type="tel" placeholder="Mobile *" required
          class="w-full bg-transparent border-b border-white text-white placeholder-white py-2 focus:outline-none" style="width:100% !important;" />
      </div>
      <!-- Message -->
      <div>
        <textarea placeholder="Type your message here *" required
          class="w-full bg-transparent border-b border-white text-white placeholder-white py-2 focus:outline-none resize-none"></textarea>
      </div>
      <!-- Policy -->
      <div class="flex items-start gap-2 text-sm">
        <input type="checkbox" class="mt-1 border-white accent-white" />
        <label>
          I agree to the <a href="#" class="font-semibold underline" target="_blank">Privacy Policy</a> and consent to receiving newsletters.
        </label>
      </div>
      <!-- Submit -->
      <button type="submit" class="px-6 py-2 bg-white text-black uppercase rounded shadow hover:bg-yellow transition w-max">Submit</button>
    </form>
  </div>
</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Video popup logic
const videoPopupVisible = ref(false);
const YT_URL = 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&start=15';

function openVideoPopup() {
  videoPopupVisible.value = true;
}

function closeVideoPopup() {
  videoPopupVisible.value = false;
}

// intl-tel-input logic
// Declare intlTelInput on window for TypeScript
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
