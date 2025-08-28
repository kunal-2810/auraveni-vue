<template>
<section id="portfolio-section" class="relative w-full bg-secondary py-16 md:py-20">
  <div class="max-w-5xl mx-auto pb-8 px-4 text-center z-10">
    <h2 class="text-3xl md:text-[36px] font-primary leading-snug font-bold mb-4">Our Portfolio</h2>
    <p class="text-lg md:text-xl text-gray-700 mb-10">
      Explore our recent projects — innovative solutions crafted for real business impact.
    </p>
  </div>
  <div class="relative flex items-center justify-center"></div>
    <div id="portfolio-slider-wrapper" class="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div id="portfolio-slider" class="flex gap-4 md:gap-8 px-4 md:px-20 transition-transform duration-700 will-change-transform">
        <!-- Portfolio Card 1 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden group flex-shrink-0">
          <img src="../assets/images/portfolio/ncb-jewellers.webp" alt="Nemichand Bamalwa Jewellers" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Nemichand Bamalwa Jewellers</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="View Case Study">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 2 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/kutumb.webp" alt="Kutumb Group" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Kutumb Group</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 3 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/wizderm.webp" alt="Wizderm Speciality Skin & Hair Clinic" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col text-shadow-lg items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Wizderm Speciality Skin & Hair Clinic</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 4 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/arrjavv.webp" alt="Arrjavv Builders Private Limited" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Arrjavv Builders Private Limited</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 5 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/saratthi.webp" alt="Saratthi Mobility Private Limited" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Saratthi Mobility Private Limited</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 6 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/kathleen.webp" alt="Kathleen Confectioners" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Kathleen Confectioners</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 7 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/farmway.webp" alt="Farmway" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Farmway</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 8 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/green-bench.webp" alt="The Green Bench" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Green Bench</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 9 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/kalo.webp" alt="Kalo Infra Group" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Kalo Infra Group</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
        <!-- Portfolio Card 10 -->
        <div class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
          <img src="../assets/images/portfolio/pmecpl.webp" alt="Prime Mover Engineering Company Private Limited" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Prime Mover Engineering Company Private Limited</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right">
              </button>
            </div>
          </div>
        </div>
      </div>
    <!-- Optional: Slider navigation arrows (hidden on mobile) -->
    <!-- <button id="portfolio-prev" class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20">
      <svg class="w-6 h-6 text-[#537FBB]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button id="portfolio-next" class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20">
      <svg class="w-6 h-6 text-[#537FBB]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button> -->
  </div>
</section>
</template>


<script setup lang="ts">

import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const portfolioSectionRef = ref<HTMLElement | null>(null);
const sliderRef = ref<HTMLElement | null>(null);
let portfolioScrollTrigger: gsap.core.Tween | null = null;

function setupPortfolioScroll() {
  nextTick(() => {
    if (window.innerWidth >= 1024 && portfolioSectionRef.value && sliderRef.value) {
      const cards = sliderRef.value.querySelectorAll('div.relative');
      const cardGap = 32;
      const cardWidth = (cards[0] as HTMLElement).offsetWidth;
      const visibleWidth = (sliderRef.value.parentElement as HTMLElement).offsetWidth;
      const totalWidth = cards.length * cardWidth + (cards.length - 1) * cardGap;
      const scrollDistance = totalWidth > visibleWidth ? totalWidth - visibleWidth : 0;

      portfolioScrollTrigger = gsap.to(sliderRef.value, {
        x: () => -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          id: 'portfolioScroll',
          trigger: portfolioSectionRef.value,
          start: 'top top',
          end: () => '+=' + scrollDistance,
          pin: portfolioSectionRef.value,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    } else {
      if (sliderRef.value) {
        gsap.set(sliderRef.value, { clearProps: 'x' });
      }
      if (portfolioScrollTrigger) {
        (portfolioScrollTrigger.scrollTrigger as ScrollTrigger)?.kill();
        portfolioScrollTrigger = null;
      }
    }
  });
}

onMounted(() => {
  setupPortfolioScroll();
  window.addEventListener('resize', setupPortfolioScroll);
});
onUnmounted(() => {
  window.removeEventListener('resize', setupPortfolioScroll);
  if (portfolioScrollTrigger) {
    (portfolioScrollTrigger.scrollTrigger as ScrollTrigger)?.kill();
    portfolioScrollTrigger = null;
  }
});




</script>