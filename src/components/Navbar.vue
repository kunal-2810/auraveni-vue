<template>
  <!-- Navbar -->
  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300',
    scrolled ? 'bg-white text-black shadow' : 'bg-transparent text-white'
  ]">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold flex items-center space-x-2">
        <img
          :src="scrolled ? logoColor : logoWhite"
          alt="Logo"
          class="w-[180px] h-[62px] transition-all duration-300"
        />
      </div>
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-5">
        <a href="tel:+913335448771" class="flex items-center space-x-1 transition-colors duration-300">
          <img
            :src="scrolled ? phoneColor : phoneWhite"
            alt="Call"
            class="w-6 h-6 transition-all duration-300"
          />
          <span :class="scrolled ? 'text-black' : 'text-white'" class="transition-colors duration-300">CALL</span>
        </a>
        <a href="https://wa.me/+919804525831" class="flex items-center space-x-1 transition-colors duration-300">
          <img
            :src="scrolled ? whatsappColor : whatsappWhite"
            alt="WhatsApp"
            class="w-6 h-6 transition-all duration-300"
          />
          <span :class="scrolled ? 'text-black' : 'text-white'" class="transition-colors duration-300">WHATSAPP</span>
        </a>
        <button class="ml-3" @click="openSideMenu">
          <img
            :src="scrolled ? menuColor : menuWhite"
            alt="Menu"
            class="w-6 h-6 transition-all duration-300"
          />
        </button>
        <button
          :class="scrolled ? 'bg-[#AC3B61] text-white' : 'bg-white text-black'"
          class="px-4 py-2 uppercase rounded transition-all duration-300"
        >Get in Touch</button>
      </div>
      <!-- Mobile Menu Icon -->
      <div class="md:hidden flex space-x-4 items-center">
        <img
          :src="scrolled ? phoneColor : phoneWhite"
          alt="Call"
          class="w-8 h-8 transition-all duration-300"
        />
        <img
          :src="scrolled ? whatsappColor : whatsappWhite"
          alt="WhatsApp"
          class="w-8 h-8 transition-all duration-300"
        />
        <button @click="openSideMenu">
          <img
            :src="scrolled ? menuColor : menuWhite"
            alt="Menu"
            class="w-8 h-8 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  </header>

  <!-- Slide-out Menu (Drawer) -->
  <div
    class="fixed top-0 right-0 w-80 max-w-full h-full bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col"
    :class="sideMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex flex-col h-full">
      <!-- Header: Menu title and Close button -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <span class="text-xl font-bold">Menu</span>
        <button class="text-2xl leading-none focus:outline-none" @click="closeSideMenu">&times;</button>
      </div>
      <!-- Scrollable Menu List with Expand/Collapse -->
      <div class="flex-1 overflow-y-auto px-5 py-2">
        <!-- Menu Item 1: Services (Expandable) -->
        <div>
          <button @click="toggleSidebarExpand(1)" class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
            <span>SERVICES</span>
            <span>
              <svg v-if="sidebarExpand === 1" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-linecap="round"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-linecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
          <div v-show="sidebarExpand === 1">
            <ul class="mb-2">
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/design.png" alt="Branding & Design" class="w-6 h-6" />
                <span>Branding & Design</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/system-design.svg" alt="System Design" class="w-6 h-6" />
                <span>System Design</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/website-design.png" alt="Website Design & Development" class="w-6 h-6" />
                <span>Website Design & Development</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/ecommerce.svg" alt="eCommerce Development" class="w-6 h-6" />
                <span>eCommerce Development</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/app-development.png" alt="Mobile App Development" class="w-6 h-6" />
                <span>Mobile App Development</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/customer-relationship-management.png" alt="Custom CRM Development" class="w-6 h-6" />
                <span>Custom CRM Development</span>
              </li>
              <li class="py-3 border-t border-gray-200 flex items-center gap-3">
                <img src="../assets/icons/services/color/marketing.png" alt="Digital Marketing" class="w-6 h-6" />
                <span>Digital Marketing</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full h-px bg-gray-200"></div>
        <!-- Other Menu Items -->
        <button class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
          <span>CASE STUDIES</span>
        </button>
        <div class="w-full h-px bg-gray-200"></div>
        <button class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
          <span>SOLUTIONS</span>
        </button>
        <div class="w-full h-px bg-gray-200"></div>
        <button class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
          <span>BLOGS</span>
        </button>
        <div class="w-full h-px bg-gray-200"></div>
        <button class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
          <span>ABOUT US</span>
        </button>
        <div class="w-full h-px bg-gray-200"></div>
        <button class="w-full flex justify-between items-center py-3 font-semibold text-left focus:outline-none">
          <span>CAREER</span>
        </button>
        <div class="w-full h-px bg-gray-200"></div>
        <!-- Contact Info & Socials -->
        <div class="mt-6">
          <div class="flex items-center mb-4">
            <img src="../assets/icons/address.svg" class="w-5 h-5 mr-2" alt="Address" />
            <span class="text-sm">56A/69 Putiary Banerjee Para Road, Kolkata, West Bengal 700041</span>
          </div>
          <div class="flex items-center mb-4">
            <img src="../assets/icons/call.svg" class="w-5 h-5 mr-2" alt="Phone" />
            <span class="text-sm">033 3544 8771</span>
          </div>
          <div class="flex items-center mb-4">
            <img src="../assets/icons/mail.svg" class="w-5 h-5 mr-2" alt="Mail" />
            <span class="text-sm">support@vervebytes.com</span>
          </div>
          <div class="flex space-x-4 mt-4">
            <img src="../assets/icons/facebook.svg" alt="Facebook" class="w-6 h-6" />
            <img src="../assets/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
            <img src="../assets/icons/twitter.svg" alt="Twitter/X" class="w-6 h-6" />
            <img src="../assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
            <img src="../assets/icons/youtube.svg" alt="YouTube" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import logoWhite from '../assets/images/logo-white.webp';
import logoColor from '../assets/images/logo.webp';
import phoneWhite from '../assets/icons/phone-white.svg';
import phoneColor from '../assets/icons/phone-color.svg';
import whatsappWhite from '../assets/icons/whatsapp-white.svg';
import whatsappColor from '../assets/icons/whatsapp-color.svg';
import menuWhite from '../assets/icons/menu-white.svg';
import menuColor from '../assets/icons/menu.svg';

// State for sidebar (side menu)
const sideMenuOpen = ref(false);
// State for expanded menu in sidebar
const sidebarExpand = ref<number | null>(null);
// State for navbar style on scroll
const scrolled = ref(false);

function openSideMenu() {
  sideMenuOpen.value = true;
}
function closeSideMenu() {
  sideMenuOpen.value = false;
}
function toggleSidebarExpand(idx: number) {
  sidebarExpand.value = sidebarExpand.value === idx ? null : idx;
}

function handleScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
