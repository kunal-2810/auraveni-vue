<template>
  <!-- Breadcrumb Section -->
  <BreadcrumbBlogs
    :bannerImage="bannerImage"
    pageTitle="What to Look for in a Software Development Partner: A Founder’s Checklist"
    :breadcrumb="[
      { label: 'Home', link: '/' },
      { label: 'Blogs', link: '/blogs' },
      { label: 'What to Look for in a Software Development Partner: A Founder’s Checklist' }
    ]"
  />

  <!-- Blog Details Two-Panel Layout -->
  <main class="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">

    <!-- Left Panel: Blog Content -->
    <article class="flex-1 min-w-0">
      <!-- Blog Title -->
      <h1 class="text-3xl md:text-4xl font-bold font-primary mb-3">What to Look for in a Software Development Partner: A Founder’s Checklist</h1>
      <!-- Blog Meta -->
      <div class="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
        <span class="bg-blue text-white px-3 py-1 rounded-full font-semibold">Software Development</span>
        <span>Published on: <time datetime="2024-06-01">July 24, 2025</time></span>
      </div>
      <!-- Blog Image -->
      <img src="@/assets/images/blogs/right-software-partner.webp" alt="Why Your Business Needs Custom CRM Software in 2025: A Complete Guide" class="w-full h-auto rounded-lg mb-8 shadow-lg max-h-[450px] object-cover" />

      <!-- Blog Body -->
      <section id="introduction" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">Introduction</h2>
        <p>Choosing a software development partner isn’t just about finding someone who can code—it’s about aligning with a team that <strong>understands your vision, scales with your needs, and delivers on time</strong>.
        </p>
        <p class="mb-4">In a market crowded with developers, freelancers, and agencies, the wrong decision can lead to wasted budgets, missed deadlines, or even a failed product launch. This blog acts as a <strong>complete checklist</strong> for startup founders and business leaders who want to get this decision right.
        </p>
      </section>

      <section id="why-section" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">Why Your Choice of Development Partner Matters</h2>
        <p class="mb-4">A software partner isn’t just a vendor—they become <strong>an extension of your team</strong>. Their expertise, communication, and process directly affect your:</p>
        <ul class="list-disc pl-6 my-4">
          <li>Product quality</li>
          <li>Go-to-market speed</li>
          <li>Customer experience</li>
          <li>ROI and scalability</li>
        </ul>
        <p class="mb-4">For early-stage startups or scaling companies, this relationship is often the difference between <strong>a successful launch</strong> and <strong>months of damage control</strong>.
        </p>
        <div class="flex items-center gap-3 mb-6">
          <img src="@/assets/icons/brain.svg" alt="Team Power" class="w-8 h-8 flex-shrink-0" />
          <span class="italic">
            "Your product is only as strong as the team behind it."
          </span>
        </div>
      </section>

      <section id="key-questions" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">8 Key Questions to Ask Before Hiring</h2>
        <p class="mb-4">Here’s your <strong>founder-friendly checklist</strong> before signing with any software agency:</p>
        <ol class="list-decimal pl-6 space-y-4">
          <li>
            <div class="font-semibold text-lg mb-1">Do they have proven experience in your industry?</div>
            <p class="mb-2 text-gray-700">
              Ask for real case studies or projects in similar domains (e.g., healthcare, eCommerce, SaaS, logistics).
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Can they scale with your business?</div>
            <p class="mb-2 text-gray-700">
              Startups grow fast. You need a partner who can quickly add resources or pivot the tech stack.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">What does their team structure look like?</div>
            <p class="mb-2 text-gray-700">
              Look for dedicated UI/UX designers, backend/frontend engineers, testers, and project managers.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Are they transparent with timelines & deliverables?</div>
            <p class="mb-2 text-gray-700">
              Agile is good—but without delivery milestones and sprint goals, it’s chaos.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Do they prioritize code quality and documentation?</div>
            <p class="mb-2 text-gray-700">
              You don’t want “developer-dependent” code. Ensure they deliver clean, maintainable code with docs.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">How do they handle communication & updates?</div>
            <p class="mb-2 text-gray-700">
              Weekly check-ins, shared dashboards, live demos—these should be non-negotiable.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Can they handle integrations, scaling, and security?</div>
            <p class="mb-2 text-gray-700">
              Your app will eventually need payment gateways, CRM, AI/ML, WhatsApp API, etc. Make sure they’re future-ready.
            </p>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">What’s their post-launch support model?</div>
            <p class="mb-2 text-gray-700">
              You’ll need bug fixes, enhancements, analytics setup, and monitoring after launch too.
            </p>
          </li>
        </ol>
        <img src="@/assets/images/blogs/questions-to-ask-before-hiring.webp" alt="8 Key Questions to Ask Before Hiring" class="w-full rounded-lg mb-4 pt-4">
      </section>
      
      <section id="pillars" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">The Pillars of a Reliable Software Partner</h2>
        <ol class="list-decimal pl-6 space-y-4">
          <li>
            <div class="font-semibold text-lg mb-1">Technical Expertise</div>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>Mastery in modern frameworks (React, Node, Laravel, Flutter)</li>
              <li>Ability to architect scalable systems</li>
              <li>Clean, modular code practices</li>
            </ul>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Design Thinking</div>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>UX-first approach</li>
              <li>Prototyping before building</li>
              <li>Mobile and accessibility optimization</li>
            </ul>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Communication & Collaboration</div>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>Dedicated Slack/WhatsApp channels</li>
              <li>Agile tools (Jira, Trello, Notion)</li>
              <li>Project visibility in real-time</li>
            </ul>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Flexibility & Adaptability</div>
            <p class="mb-2 text-gray-700">
              Track how users interact with your app: what they click, how long they stay, and when they drop off.
            </p>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>Can adjust to your team’s tools</li>
              <li>Willing to shift priorities or pivot strategy when needed</li>
            </ul>
          </li>
          <li>
            <div class="font-semibold text-lg mb-1">Ownership Mindset</div>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>Suggests improvements, not just executes tasks</li>
              <li>Treats your product like their own</li>
              <li>Focuses on long-term success, not just delivery</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="red-flags" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">Red Flags to Watch Out For</h2>
        <!-- <img src="https://placehold.co/900x450" alt="Blog Example" class="w-full rounded-lg mb-4" /> -->
        <div class="space-y-2 mb-4">
          <p class="mb-4">
            Not every agency is built equal. Be wary of:
          </p>
          <table class="w-full mb-4 border-separate border-spacing-0">
            <tbody>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 font-semibold text-gray-800">Red Flag</td>
                <td class="align-top w-3/5 py-3 font-semibold text-gray-800">Why It’s a Problem</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">Vague proposals with no timeline</td>
                <td class="align-top w-3/5 py-3 text-gray-700">Lack of clarity = hidden delays</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">No QA process</td>
                <td class="align-top w-3/5 py-3 text-gray-700">Buggy product, frustrated users</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">No design mockups or wireframes</td>
                <td class="align-top w-3/5 py-3 text-gray-700">UI/UX is often an afterthought</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">One-man shows</td>
                <td class="align-top w-3/5 py-3 text-gray-700">Risks in continuity, quality, and support</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">Too cheap to be true</td>
                <td class="align-top w-3/5 py-3 text-gray-700">Likely compromises in security, performance, or code</td>
              </tr>
              <tr><td colspan="2"><div class="w-full h-px bg-gray-200"></div></td></tr>
              <tr>
                <td class="align-top w-2/5 py-3 pr-4 text-gray-700">No post-launch service model</td>
                <td class="align-top w-3/5 py-3 text-gray-700">You're left alone after go-live</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="trust" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">How Auraveni Delivers as a Trusted Development Partner</h2>
        <p>At Auraveni Solutions, we don’t just build software — we help you build a future-ready business.</p>
        <h3 class="text-xl font-semibold my-4">✅ Here’s what makes us different:</h3>
        <ul class="list-disc pl-6 my-4">
          <li>🧠 Strategy-First: We guide you through ideation, scoping, MVP planning, and roadmap</li>
          <li>💻 Full-Stack Development: Web, mobile, CRM, APIs, cloud — handled by domain experts</li>
          <li>🎨 UI/UX-Centric Design: Your users stay longer and convert better</li>
          <li>📈 Agile, Transparent Process: Weekly sprints, live demos, shared docs, and reporting</li>
          <li>🔗 Post-Launch Support: Updates, monitoring, hosting, analytics — we don’t disappear</li>
          <li>🛡 Secure & Scalable Systems: We build for today and tomorrow — with clean code and future-proof tech</li>
        </ul>
        <h3 class="text-xl font-semibold my-4">🔄 We Work With:</h3>
        <ol class="list-decimal pl-6 mb-4 space-y-1 text-gray-700">
          <li>Startups building MVPs</li>
          <li>Growing businesses needing digital transformation</li>
          <li>Enterprises looking for custom CRM, ERP, and automation</li>
        </ol>
      </section>

      <section id="conclusion" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">Conclusion</h2>
        <p>Choosing the right software development partner is a <strong>critical business decision</strong>. It's not just about who writes the code—it's about who understands your business, goals, and customers.
        </p>
        <p>With the right partner, your idea transforms into a powerful product. With the wrong one, it becomes a painful, expensive lesson.
        </p>
        <div class="flex items-center gap-3 py-3 mb-6">
          <img src="@/assets/icons/comment.svg" alt="Quote" class="w-8 h-8 flex-shrink-0" />
          <span class="italic">
            If you're looking for a team that brings vision, tech, and execution together — reach out to Auraveni Solutions today.
          </span>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="mb-10">
        <h2 class="text-2xl font-semibold mb-3">FAQ</h2>
        <div class="divide-y divide-gray-200">
          <!-- FAQ Item 1 (Open by default) -->
          <div>
            <button
              @click="toggleFaq(0)"
              class="w-full flex justify-between items-center py-5 focus:outline-none"
              :aria-expanded="faqOpen === 0"
            >
              <span class="text-lg font-medium text-left">Is a mobile app better than a website for small businesses?</span>
              <span class="ml-4 text-2xl">
                <span v-if="faqOpen === 0">&#x2212;</span>
                <span v-else>&#x2b;</span>
              </span>
            </button>
            <div v-show="faqOpen === 0">
              <p class="text-gray-600 pb-5 pl-1">
                Not better—but more interactive and engaging. Apps offer push notifications, offline access, and better customer retention than websites alone.
              </p>
            </div>
          </div>
          <!-- FAQ Item 2 -->
          <div>
            <button
              @click="toggleFaq(1)"
              class="w-full flex justify-between items-center py-5 focus:outline-none"
              :aria-expanded="faqOpen === 1"
            >
              <span class="text-lg font-medium text-left">How much does it cost to develop a mobile app for small business?</span>
              <span class="ml-4 text-2xl">
                <span v-if="faqOpen === 1">&#x2212;</span>
                <span v-else>&#x2b;</span>
              </span>
            </button>
            <div v-show="faqOpen === 1">
              <p class="text-gray-600 pb-5 pl-1">
                Costs vary based on features. A basic MVP can start at ₹80,000 – ₹1.5L, while complex apps with integrations range higher. At Auraveni Solutions, we offer flexible packages.
              </p>
            </div>
          </div>
          <!-- FAQ Item 3 -->
          <div>
            <button
              @click="toggleFaq(2)"
              class="w-full flex justify-between items-center py-5 focus:outline-none"
              :aria-expanded="faqOpen === 2"
            >
              <span class="text-lg font-medium text-left">How long does it take to build a mobile app?</span>
              <span class="ml-4 text-2xl">
                <span v-if="faqOpen === 2">&#x2212;</span>
                <span v-else>&#x2b;</span>
              </span>
            </button>
            <div v-show="faqOpen === 2">
              <p class="text-gray-600 pb-5 pl-1">
                Typically 4–10 weeks depending on complexity, features, and platform (iOS, Android, or cross-platform).
              </p>
            </div>
          </div>
          <!-- FAQ Item 4 -->
          <div>
            <button
              @click="toggleFaq(3)"
              class="w-full flex justify-between items-center py-5 focus:outline-none"
              :aria-expanded="faqOpen === 3"
            >
              <span class="text-lg font-medium text-left">What platform should I choose: Android, iOS, or both?</span>
              <span class="ml-4 text-2xl">
                <span v-if="faqOpen === 3">&#x2212;</span>
                <span v-else>&#x2b;</span>
              </span>
            </button>
            <div v-show="faqOpen === 3">
              <p class="text-gray-600 pb-5 pl-1">
                If budget is tight, start with Android (higher market share). Otherwise, opt for cross-platform development using Flutter or React Native for both.
              </p>
            </div>
          </div>
          <!-- FAQ Item 5 -->
          <div>
            <button
              @click="toggleFaq(4)"
              class="w-full flex justify-between items-center py-5 focus:outline-none"
              :aria-expanded="faqOpen === 4"
            >
              <span class="text-lg font-medium text-left">Can my mobile app integrate with payment gateways and CRMs?</span>
              <span class="ml-4 text-2xl">
                <span v-if="faqOpen === 4">&#x2212;</span>
                <span v-else>&#x2b;</span>
              </span>
            </button>
            <div v-show="faqOpen === 4">
              <p class="text-gray-600 pb-5 pl-1">
                Yes! Auraveni Solutions builds apps that support UPI, Razorpay, Stripe, CRMs, WhatsApp, and even WhatsApp Business APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Navigation (Previous/Next) -->
      <nav class="flex justify-between items-center mt-12 mb-16">
        <!-- Previous Blog -->
        <a href="/blogs/custom-crm-software-for-business" class="flex items-center gap-2 text-gray-700 hover:text-[#AC3B61] font-medium group">
          <svg class="w-6 h-6 group-hover:text-[#AC3B61]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          <span>Previous Blog</span>
        </a>
        <!-- Next Blog -->
        <a href="/blogs/mobile-app-growth-startups-small-businesses" class="flex items-center gap-2 text-gray-700 hover:text-[#AC3B61] font-medium group">
          <span>Next Blog</span>
          <svg class="w-6 h-6 group-hover:text-[#AC3B61]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </nav>
    </article>

    <!-- Right Panel: Author & TOC -->
    <aside class="w-full lg:w-80 flex-shrink-0">
      <!-- Author Card -->
      <div class="bg-white rounded-lg shadow p-6 mb-8">
        <div class="flex flex-col items-center">
          <img src="@/assets/icons/male.svg" alt="Author" class="w-20 h-20 rounded-full mb-3 object-cover border-4 border-[#F4B400]" />
          <div class="text-lg font-semibold">Kunal Sarkar</div>
          <div class="text-sm text-gray-500 mb-4">CEO</div>
          <hr class="w-full border-gray-200 my-4" />
          <!-- Like & Share -->
          <div class="flex items-center justify-center gap-4 mb-4">
            <!-- Like Button -->
            <button @click="likeCount++" class="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:bg-yellow/10 transition">
              <img src="@/assets/icons/like.svg" alt="Like" class="w-5 h-5" />
              <span class="font-semibold">{{ likeCount }}</span>
            </button>
            <span class="text-gray-400">|</span>
            <span class="font-medium text-gray-700">Share:</span>
            <a href="#" title="Share on Facebook" class="hover:text-[#1877F3]">
              <img src="@/assets/icons/facebook.svg" alt="Facebook" class="w-5 h-5" />
            </a>
            <a href="#" title="Share on LinkedIn" class="hover:text-[#0A66C2]">
          <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <!-- Table of Contents -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-2xl font-bold mb-4">Table of Contents</h3>
        <nav>
          <ul class="space-y-2">
            <li>
              <a href="#introduction" class="toc-link text-red font-bold hover:underline">Introduction</a>
            </li>
            <li>
              <a href="#why-section" class="toc-link text-gray-500 hover:underline">Why Your Choice of Development Partner Matters</a>
            </li>
            <li>
              <a href="#key-questions" class="toc-link text-gray-500 hover:underline">8 Key Questions to Ask Before Hiring</a>
            </li>
            <li>
              <a href="#pillars" class="toc-link text-gray-500 hover:underline">The Pillars of a Reliable Software Partner</a>
            </li>
            <li>
              <a href="#red-flags" class="toc-link text-gray-500 hover:underline">Red Flags to Watch Out For</a>
            </li>
            <li>
              <a href="#trust" class="toc-link text-gray-500 hover:underline">How Auraveni Delivers as a Trusted Development Partner</a>
            </li>
            <li>
              <a href="#conclusion" class="toc-link text-gray-500 hover:underline">Conclusion</a>
            </li>
            <li>
              <a href="#faq" class="toc-link text-gray-500 hover:underline">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </main>


  <Appointment />

</template>

<script setup lang="ts">
import bannerImage from '@/assets/images/blogs/team-using-crm-system.webp';
import BreadcrumbBlogs from '@/components/BreadcrumbBlogs.vue';
import Appointment from '@/components/Appointment.vue';


// --- Video thumbnail-to-video swap logic (type-safe, no duplicate logic) ---
// (Handled in onMounted below)

// Like button logic (simple increment)

// Vue state and logic
import { ref, onMounted } from 'vue';

const likeCount = ref(10);
const faqOpen = ref<number | null>(0);

function toggleFaq(idx: number) {
  faqOpen.value = faqOpen.value === idx ? null : idx;
}

onMounted(() => {
  // Smooth scroll for TOC links
  document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', function (this: HTMLAnchorElement, e) {
      const targetId = this.getAttribute('href')?.replace('#', '');
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Video play logic (if video elements exist)
  const videoThumb = document.getElementById('local-video-thumbnail');
  const videoElem = document.getElementById('local-video-element');
  const playBtn = document.getElementById('local-video-play-btn');
  if (videoThumb && videoElem && playBtn) {
    playBtn.style.pointerEvents = 'auto';
    playBtn.addEventListener('click', showVideo);
    videoThumb.addEventListener('click', showVideo);
    function showVideo() {
      if (videoThumb) videoThumb.style.display = 'none';
      if (playBtn) playBtn.style.display = 'none';
      if (videoElem instanceof HTMLVideoElement) {
        videoElem.classList.remove('hidden');
        videoElem.play();
      } else if (videoElem) {
        videoElem.classList.remove('hidden');
      }
    }
  }
});



</script>
