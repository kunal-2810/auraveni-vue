<template>
  <!-- Breadcrumb Section -->
  <section class="relative w-full h-[380px] md:h-[420px] flex items-center justify-center bg-dark overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img :src="bannerImage" :alt="pageTitle" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col justify-center items-center h-full px-4 text-center">
      <!-- Page Title -->
      <h2 class="text-lg md:text-2xl font-semibold text-white mb-4 mt-20 md:mt-28">{{ pageTitle }}</h2>

      <!-- Breadcrumb -->
      <nav class="mb-6" aria-label="Breadcrumb">
        <ol class="flex justify-center items-center space-x-2 text-sm text-white">
          <li v-for="(crumb, idx) in breadcrumb" :key="idx" class="flex items-center">
            <template v-if="crumb.link">
              <a :href="crumb.link" class="hover:underline">{{ crumb.label }}</a>
            </template>
            <template v-else>
              <span class="font-medium">{{ crumb.label }}</span>
            </template>
            <span v-if="idx < breadcrumb.length - 1" class="mx-2">/</span>
          </li>
        </ol>
      </nav>

      <!-- Short Description -->
      <h1 class="text-3xl md:text-[36px] font-primary text-white font-bold leading-snug">
        {{ shortDescription }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  bannerImage: string
  pageTitle: string
  breadcrumb: Array<{ label: string; link?: string }>
  shortDescription: string
}>()
</script>
