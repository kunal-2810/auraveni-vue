<template>
  <section
    id="portfolio-section"
    class="relative w-full bg-secondary py-16 md:py-20"
    ref="portfolioSectionRef"
  >
    <div class="max-w-5xl mx-auto pb-8 px-4 text-center z-10">
      <h2 class="text-3xl md:text-[36px] font-primary leading-snug font-bold mb-4">Our Portfolio</h2>
      <p class="text-lg md:text-xl text-gray-700 mb-10">
        Explore our recent projects — innovative solutions crafted for real business impact.
      </p>
    </div>
    <div class="relative flex items-center justify-center"></div>
    <div
      id="portfolio-slider-wrapper"
      class="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      <div
        id="portfolio-slider"
        class="flex gap-4 md:gap-8 px-4 md:px-20 transition-transform duration-700 will-change-transform"
        ref="sliderRef"
      >
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="relative min-w-[324px] md:min-w-[400px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0"
        >
          <img :src="card.img" :alt="card.title" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.0) 60%);"></div>
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start z-10">
            <div class="w-full rounded-xl px-2 md:px-4 py-2 md:py-4">
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{{ card.title }}</h3>
              <button class="inline-flex items-center space-x-2 text-white hover:underline">
                <span>View Case Study</span>
                <img src="../assets/icons/plus-white.svg" class="w-3 h-3" alt="Arrow Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
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
let portfolioScrollTween: gsap.core.Tween | null = null;

const cards = [
  {
    img: '../assets/images/portfolio/ncb-jewellers.webp',
    title: 'Nemichand Bamalwa Jewellers',
  },
  {
    img: '../assets/images/portfolio/kutumb.webp',
    title: 'Kutumb Group',
  },
  {
    img: '../assets/images/portfolio/wizderm.webp',
    title: 'Wizderm Speciality Skin & Hair Clinic',
  },
  {
    img: '../assets/images/portfolio/arrjavv.webp',
    title: 'Arrjavv Builders Private Limited',
  },
  {
    img: '../assets/images/portfolio/saratthi.webp',
    title: 'Saratthi Mobility Private Limited',
  },
  {
    img: '../assets/images/portfolio/kathleen.webp',
    title: 'Kathleen Confectioners',
  },
  {
    img: '../assets/images/portfolio/farmway.webp',
    title: 'Farmway',
  },
  {
    img: '../assets/images/portfolio/green-bench.webp',
    title: 'The Green Bench',
  },
  {
    img: '../assets/images/portfolio/kalo.webp',
    title: 'Kalo Infra Group',
  },
  {
    img: '../assets/images/portfolio/pmecpl.webp',
    title: 'Prime Mover Engineering Company Private Limited',
  },
];

function setupPortfolioScroll() {
  nextTick(() => {
    if (
      window.innerWidth >= 1024 &&
      portfolioSectionRef.value &&
      sliderRef.value
    ) {
      const cardEls = sliderRef.value.querySelectorAll(':scope > div');
      if (!cardEls.length) return;
      const cardGap = 32; // px, adjust if needed
      const cardWidth = (cardEls[0] as HTMLElement).offsetWidth;
      const visibleWidth = (sliderRef.value.parentElement as HTMLElement).offsetWidth;
      const totalWidth = cardEls.length * cardWidth + (cardEls.length - 1) * cardGap;
      const scrollDistance = totalWidth > visibleWidth ? totalWidth - visibleWidth : 0;

      if (portfolioScrollTween) {
        (portfolioScrollTween.scrollTrigger as ScrollTrigger)?.kill();
        portfolioScrollTween = null;
      }

      portfolioScrollTween = gsap.to(sliderRef.value, {
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
        },
      });
    } else {
      if (sliderRef.value) {
        gsap.set(sliderRef.value, { clearProps: 'x' });
      }
      if (portfolioScrollTween) {
        (portfolioScrollTween.scrollTrigger as ScrollTrigger)?.kill();
        portfolioScrollTween = null;
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
  if (portfolioScrollTween) {
    (portfolioScrollTween.scrollTrigger as ScrollTrigger)?.kill();
    portfolioScrollTween = null;
  }
});
</script>
