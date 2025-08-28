<template>
  <!-- Responsive Footer Section -->
<footer class="bg-[#2E2E2E] text-white px-6 py-12">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    <!-- Company -->
    <div>
      <button @click="toggleSection(1)" class="w-full flex justify-between items-center lg:cursor-default cursor-pointer mb-2 focus:outline-none">
        <span class="text-xl text-light font-primary font-semibold">Company</span>
        <span class="lg:hidden text-white text-xl">
          <span v-if="open === 1">&#x2212;</span>
          <span v-else>&#x2b;</span>
        </span>
      </button>
      <ul v-show="open === 1 || isDesktop">
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">About</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Case Studies</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Solutions</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Blogs</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Career</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Contact</a></li>
      </ul>
    </div>

    <!-- Services -->
    <div>
      <button @click="toggleSection(2)" class="w-full flex justify-between items-center lg:cursor-default cursor-pointer mb-2 focus:outline-none">
        <span class="text-xl text-light font-primary font-semibold">Services</span>
        <span class="lg:hidden text-white text-xl">
          <span v-if="open === 2">&#x2212;</span>
          <span v-else>&#x2b;</span>
        </span>
      </button>
      <ul v-show="open === 2 || isDesktop">
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Branding & Design</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">System Design</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Website Design and Development</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">eCommerce Development</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Mobile Application Development</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Custom CRM Development</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Digital Marketing</a></li>
      </ul>
    </div>

    <!-- Support -->
    <div>
      <button @click="toggleSection(3)" class="w-full flex justify-between items-center lg:cursor-default cursor-pointer mb-2 focus:outline-none">
        <span class="text-xl text-light font-primary font-semibold">Support</span>
        <span class="lg:hidden text-white text-xl">
          <span v-if="open === 3">&#x2212;</span>
          <span v-else>&#x2b;</span>
        </span>
      </button>
      <ul v-show="open === 3 || isDesktop">
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Terms & Conditions</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Privacy Policy</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Email Policy</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Disclaimer</a></li>
        <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Sitemap</a></li>
      </ul>
    </div>

    <div>
      <!-- Follow Us -->
      <div>
        <span class="text-xl text-light font-primary font-semibold mb-2 block">Follow Us</span>
        <div class="flex space-x-4 mb-6">
          <a href="#"><img src="../assets/icons/facebook.svg" alt="Facebook" class="w-6 h-6"></a>
          <a href="#"><img src="../assets/icons/instagram.svg" alt="Instagram" class="w-6 h-6"></a>
          <a href="#"><img src="../assets/icons/twitter.svg" alt="Twitter/X" class="w-6 h-6"></a>
          <a href="#"><img src="../assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6"></a>
          <a href="#"><img src="../assets/icons/youtube.svg" alt="YouTube" class="w-6 h-6"></a>
        </div>
      </div>
      <!-- Portal Login -->
      <div class="mt-10">
        <button @click="open === 4 ? open = null : open = 4" class="w-full flex justify-between items-center lg:cursor-default cursor-pointer mb-2 focus:outline-none">
          <span class="text-xl text-light font-primary font-semibold">Portal Login</span>
          <span class="lg:hidden text-white text-xl">
            <template x-if="open === 4">
              <span>&#x2212;</span>
            </template>
            <template x-if="open !== 4">
              <span>&#x2b;</span>
            </template>
          </span>
        </button>
        <ul x-show="open === 4 || window.innerWidth >= 1024" x-collapse>
          <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Customer/Client Login</a></li>
          <li><a href="#" class="block py-1 text-sm hover:text-[#F4B400]">Employee Login</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center text-sm text-white mt-12">
    © 2025 Auraveni Solutions. All rights reserved.
  </div>
</footer>
<!-- Footer Section End -->
  

</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const open = ref<number | null>(null);
const isDesktop = ref(window.innerWidth >= 1024);

function toggleSection(section: number) {
  open.value = open.value === section ? null : section;
}

function handleResize() {
  isDesktop.value = window.innerWidth >= 1024;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
