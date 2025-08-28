<template>
  <!-- Breadcrumb Section -->
  <Breadcrumb
    :bannerImage="bannerImage"
    pageTitle="Blogs"
    :breadcrumb="[
      { label: 'Home', link: '/' },
      { label: 'Blogs' }
    ]"
    shortDescription="Explore latest insights on website design, software development, and mobile app development. Stay updated with our blog!"
  />

  <!-- Blogs Section -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <!-- Header Row -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <!-- Title & Mobile Search Icon -->
      <div class="flex items-center justify-between w-full md:w-auto">
        <h3 class="text-3xl md:text-[36px] font-bold font-primary mb-4 md:mb-0">Latest Blogs</h3>
        <!-- Search Icon (Mobile) -->
        <button id="mobile-search-btn" class="md:hidden flex items-center ml-3 text-gray-700" aria-label="Open search">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor"/>
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <!-- Search (Desktop/Tablet) -->
  <form class="hidden md:flex items-center w-full md:w-auto" role="search" @submit.prevent="onSearch">
        <div class="flex border-b border-[#AC3B61] focus-within:border-[#92294d] w-64">
          <input
            type="text"
            placeholder="Search blogs..."
            class="bg-transparent px-4 py-2 focus:outline-none w-full"
            v-model="search"
          />
          <button type="submit" class="text-[#AC3B61] px-2 py-2 hover:text-[#92294d] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="currentColor"/>
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
  </form>
    </div>
    <!-- Mobile Search Bar (hidden by default) -->
  <form id="mobile-search-bar" class="w-full mb-6 hidden md:hidden" role="search" @submit.prevent="onSearch">
      <div class="flex border-b border-[#AC3B61] focus-within:border-[#92294d]">
        <input
          id="mobile-search-input"
          type="text"
          placeholder="Search blogs..."
          class="bg-transparent px-4 py-2 focus:outline-none w-full"
          v-model="search"
        />
        <button type="submit" class="text-[#AC3B61] px-2 py-2 hover:text-[#92294d] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor"/>
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
  </form>

    <!-- Blog Category Tabs (Vue controlled) -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-3">
        <button
          :class="activeTab === 'all' ? 'bg-blue text-white' : 'bg-gray-100 text-gray-700'"
          class="px-5 py-2 rounded-full font-semibold transition-colors"
          @click="setTab('all')"
        >All</button>
        <button
          :class="activeTab === 'software' ? 'bg-blue text-white' : 'bg-gray-100 text-gray-700'"
          class="px-5 py-2 rounded-full font-semibold transition-colors"
          @click="setTab('software')"
        >Software Development</button>
        <button
          :class="activeTab === 'uiux' ? 'bg-blue text-white' : 'bg-gray-100 text-gray-700'"
          class="px-5 py-2 rounded-full font-semibold transition-colors"
          @click="setTab('uiux')"
        >UI/UX</button>
        <button
          :class="activeTab === 'mobile' ? 'bg-blue text-white' : 'bg-gray-100 text-gray-700'"
          class="px-5 py-2 rounded-full font-semibold transition-colors"
          @click="setTab('mobile')"
        >Mobile Application Development</button>
        <button
          :class="activeTab === 'crm' ? 'bg-blue text-white' : 'bg-gray-100 text-gray-700'"
          class="px-5 py-2 rounded-full font-semibold transition-colors"
          @click="setTab('crm')"
        >CRM Development</button>
      </div>
    </div>

    <!-- Blog Cards (Vue controlled) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <a
        v-for="(blog, idx) in filteredBlogs"
        :key="blog.title + idx"
        href="#"
        class="group block border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
      >
        <img :src="blog.image" :alt="blog.title" class="w-full h-auto">
        <div class="p-6">
          <h3 class="text-xl text-left font-semibold mb-3 transition">
            {{ blog.title }}
          </h3>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center text-sm text-gray-500">
              <img src="@/assets/icons/calendar.svg" alt="Calendar Icon" class="w-4 h-4 mr-2">
              <span>{{ blog.date }}</span>
            </div>
            <div class="text-primary font-semibold flex items-center group-hover:underline">
              Learn More
              <img src="@/assets/icons/plus.svg" alt="Plus Icon" class="w-3 h-3 ml-1">
            </div>
          </div>
        </div>
      </a>
      <div v-if="filteredBlogs.length === 0" class="col-span-full text-center text-gray-500 py-12">
        No blogs found.
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="px-4 py-2 bg-dark text-white rounded shadow transition-colors duration-200 uppercase"
        id="load-more-btn"
        type="button">
        Load More
      </button>
    </div>
  </section>

  <Appointment />

</template>
<script setup lang="ts">

import bannerImage from '@/assets/images/blog-banner.webp';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Appointment from '@/components/Appointment.vue';
import { ref, computed, nextTick } from 'vue';

import blogImg1 from '@/assets/images/blogs/right-software-partner.webp';
import blogImg2 from '@/assets/images/blogs/mobile-apps-for-small-businesses.webp';
import blogImg3 from '@/assets/images/blogs/custom-crm-software-for-business.webp';

const allBlogs = [
  {
    title: 'What to Look for in a Software Development Partner: A Founder’s Checklist',
    category: 'software',
    date: '24 July, 2025',
    image: blogImg1,
  },
  {
    title: 'How a Mobile App Can Boost Growth for Startups and Small Businesses',
    category: 'mobile',
    date: '10 July, 2025',
    image: blogImg2,
  },
  {
    title: 'Why Your Business Needs Custom CRM Software in 2025: A Complete Guide',
    category: 'crm',
    date: '28 June, 2025',
    image: blogImg3,
  },
  // ...add more blogs as needed
];

const search = ref('');
const activeTab = ref('all');
const showMobileSearch = ref(false);

const filteredBlogs = computed(() => {
  let filtered = allBlogs;
  if (activeTab.value !== 'all') {
    filtered = filtered.filter(blog => blog.category === activeTab.value);
  }
  if (search.value.trim()) {
    const s = search.value.trim().toLowerCase();
    filtered = filtered.filter(blog => blog.title.toLowerCase().includes(s));
  }
  return filtered;
});

function setTab(tab: string) {
  activeTab.value = tab;
}

function onSearch(e: Event) {
  e.preventDefault();
}

function toggleMobileSearch() {
  showMobileSearch.value = !showMobileSearch.value;
  nextTick(() => {
    if (showMobileSearch.value) {
      const input = document.getElementById('mobile-search-input') as HTMLInputElement;
      input?.focus();
    }
  });
}




</script>
